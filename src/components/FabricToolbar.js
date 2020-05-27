import React from "react"

const FabricToolbar = props => {

    return (
        <>
            <label htmlFor="color">Font Size:</label>
            <input type="number" style={{ "width": "40px" }} className="btn-object-action"/>
            <br/>
            <label htmlFor="color">Fill:</label>
            <input type="color" style={{ "width": "40px" }} className="btn-object-action"/>
            <br/>
            <label htmlFor="text-align" style={{ "display": "inline-block" }}>Text align:</label>
            <select id="text-align" className="btn-object-action">
                <option>Left</option>
                <option>Center</option>
                <option>Right</option>
            </select>
            <br/>
            <div id="text-controls-additional">
                <button type="button" className="btn btn-object-action">
                    Bold
                </button>
                <button type="button" className="btn btn-object-action" id="text-cmd-italic">
                    Italic
                </button>
                <button type="button" className="btn btn-object-action" id="text-cmd-underline">
                    Underline
                </button>
            </div>
        </>
    )
}

export default FabricToolbar
