import React  from "react";

export default function Form() {
    return (
        <div className="form-container">
        <form  className="form">
            <input type="text" id="input1" placeholder="Shut up" />
            <input type="text" id="input2" placeholder="and take my money" />
            <button type="submit">Get a new meme image  🖼</button>
        </form>
        </div>
    )
}