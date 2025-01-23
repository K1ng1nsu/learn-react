export default function GameBoard({ onSelectSquare, gameBoard, winner }) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={`${rowIndex}_ ${colIndex}`}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={!!col || !!winner}>
                                    {col}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
