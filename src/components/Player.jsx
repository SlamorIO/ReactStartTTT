import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function onEdit() {
        setIsEditing(editing => !editing)
    }

    function onEditName(event) {
        console.log(event)
        setPlayerName(event.target.value)
    }

    let playerNameControl = <span className="player-name">{playerName}</span>
    let action = "Edit"

    if (isEditing) {
        playerNameControl = <input type="text" required value={playerName} onChange={onEditName} />
        action = "Save"
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameControl}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEdit}>{action}</button>
        </li>
    )
}