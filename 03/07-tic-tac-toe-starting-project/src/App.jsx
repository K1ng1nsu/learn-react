import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const INITIAL_PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveAtivePlayer(gameTurns) {
    let activePlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';
    return activePlayer;
}

function deriveWinner(gameBoard, players) {
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (
            !!firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    const derivenGameBoard = JSON.parse(JSON.stringify(INITIAL_GAME_BOARD));

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        derivenGameBoard[row][col] = player;
    }

    return derivenGameBoard;
}

function App() {
    const [players, setPlayers] = useState(INITIAL_PLAYERS);
    const [gameTurns, setGameTurn] = useState([]);

    const activePlayer = deriveAtivePlayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);

    const winner = deriveWinner(gameBoard, players);
    let hasDraw = gameTurns.length === 9 && !winner;

    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurn((prev) => {
            // if (prev.find((turn) => turn.square.row === rowIndex && turn.square.col === colIndex)) return prev; => gameboard로 로직 옮겨감 버튼 클릭을 없애는게 더 효율적

            const currentPlayer = deriveAtivePlayer(prev);

            const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prev];

            return updateTurns;
        });
    };

    const handleRematch = () => {
        setGameTurn([]);
    };

    const handlePlayerNameChange = (symbol, newPlayerName) => {
        setPlayers((prev) => {
            const newPlayers = { ...prev, [symbol]: newPlayerName };

            return newPlayers;
        });
    };

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        initialName={INITIAL_PLAYERS.X}
                        initialSymbol="X"
                        isActive={activePlayer === 'X'}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        initialName={INITIAL_PLAYERS.Y}
                        initialSymbol="O"
                        isActive={activePlayer === 'O'}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}

                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    activePlayerSymbol={activePlayer}
                    gameBoard={gameBoard}
                    winner={winner}
                />
            </div>
            <Log turns={gameTurns} players={players} />
        </main>
    );
}

export default App;
