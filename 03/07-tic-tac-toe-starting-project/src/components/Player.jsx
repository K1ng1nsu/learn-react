import { useState } from 'react';

export default function Player({ initialName, initialSymbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = () => {
        onChangeName(initialSymbol, playerName);
        setIsEditing(false);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';
    let btnHandler = handleEditClick;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        btnCaption = 'Save';
        btnHandler = handleSaveClick;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{initialSymbol}</span>
            </span>
            <button onClick={btnHandler}>{btnCaption}</button>
        </li>
    );
}
