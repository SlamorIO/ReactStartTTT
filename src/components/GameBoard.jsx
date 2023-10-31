import { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelect, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function onSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updateBoard[rowIndex][colIndex] = activePlayerSymbol
            return updateBoard
        })

        onSelect()
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}