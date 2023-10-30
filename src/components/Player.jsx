import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)

    function onEdit() {
        setIsEditing(editing => !editing)
    }

    let playerName = <span className="player-name">{name}</span>
    let action = "Edit"

    if (isEditing) {
        playerName = <input type="text" required value={name} />
        action = "Save"
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEdit}>{action}</button>
        </li>
    )
}