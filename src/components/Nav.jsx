import React from "react";

export default function Nav({ changeUsername }) {
    const newName = "Sharm"
    return(
        <div>
            <button onClick={() => changeUsername(newName)}>
                Change Username
            </button>
        </div>
    )
}