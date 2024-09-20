import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import Cropper from "react-easy-crop";
import axios from "axios";
import { Area } from "react-easy-crop/types";

const App = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
    if (open) resetCrop();
  };

  const resetCrop = () => {
    setImage(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCroppedAreaPixels(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (image && croppedAreaPixels) {
      const canvas = document.createElement("canvas");
      const img = new Image();
      img.src = image;

      img.onload = () => {
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
        const ctx = canvas.getContext("2d");

        ctx?.drawImage(
          img,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toBlob(async (blob) => {
          if (blob) {
            const formData = new FormData();
            formData.append("file", blob, "cropped-image.png");

            try {
              const response = await axios.post("http://localhost:8080/user/profile/1", formData, {
                headers: { "Content-Type": "multipart/form-data",
                  "Authorization": "Bearer "
                },
              });
              console.log("서버 응답: ", response.data);
              toggleModal();
            } catch (error) {
              console.error("파일 업로드 오류", error);
            }
          }
        });
      };
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const zoomChange = event.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prevZoom) => Math.min(Math.max(prevZoom + zoomChange, 1), 3));
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <Button variant="contained" onClick={toggleModal}>
        이미지 업로드
      </Button>

      <Modal open={open} onClose={toggleModal}>
        <div style={{ position: "relative", padding: "20px", background: "white", borderRadius: "8px", maxWidth: "600px", margin: "auto", marginTop: "100px" }}>
          <Button 
            variant="outlined" 
            onClick={toggleModal} 
            style={{ position: "absolute", top: "10px", right: "10px" }} // 우측 상단에 위치
          >
            닫기
          </Button>
          <h2>이미지 크롭하기</h2>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <div className="crop-container" style={{ position: "relative", width: "100%", height: "300px" }} onWheel={handleWheel}>
            {image && (
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1} // 비율을 1:1로 설정
                onCropChange={setCrop}
                onCropComplete={(croppedArea, croppedAreaPixels) => setCroppedAreaPixels(croppedAreaPixels)}
                onZoomChange={setZoom}
              />
            )}
          </div>
          <Button variant="contained" onClick={handleUpload} style={{ marginTop: "20px" }}>
            업로드
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
