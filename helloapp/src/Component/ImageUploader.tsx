import React, { useState } from 'react';
import Cropper from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

interface Crop {
  unit: 'px' | '%';
  width: number;
  height: number;
  x: number;
  y: number;
}

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: 'px', width: 0, height: 0, x: 0, y: 0 });
  const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageLoad = (img: HTMLImageElement) => {
    const aspectRatio = 16 / 9; // 원하는 비율
    const initialWidth = img.width;
    const initialHeight = img.width / aspectRatio;

    const initialCrop: Crop = {
      unit: 'px',
      x: 0,
      y: (img.height - initialHeight) / 2, // 중앙 정렬
      width: initialWidth,
      height: initialHeight,
    };
    setCrop(initialCrop);
  };

  const onCropComplete = (newCrop: Crop) => {
    if (image && newCrop.width && newCrop.height) {
      const canvas = document.createElement('canvas');
      const img = document.createElement('img');
      img.src = image;

      img.onload = () => {
        canvas.width = newCrop.width;
        canvas.height = newCrop.height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(
          img,
          newCrop.x,
          newCrop.y,
          newCrop.width,
          newCrop.height,
          0,
          0,
          newCrop.width,
          newCrop.height
        );

        setCroppedImageUrl(canvas.toDataURL());
      };
    }
  };

  const handleUpload = () => {
    if (croppedImageUrl) {
      const formData = new FormData();
      formData.append("file", dataURItoBlob(croppedImageUrl));

      axios.post("http://localhost:8080/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("서버 응답: ", response.data);
      })
      .catch((error) => {
        console.error("파일 업로드 오류", error);
      });
    }
  };

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onFileChange} />
      {image && (
        <Cropper
          src={image}
          onImageLoaded={onImageLoad}
          onComplete={onCropComplete}
          onChange={(newCrop) => setCrop(newCrop)} // crop 상태를 업데이트
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      {croppedImageUrl && <img src={croppedImageUrl} alt="Cropped Image" />}
      <button onClick={handleUpload}>업로드</button>
    </div>
  );
};

export default ImageUploader;
