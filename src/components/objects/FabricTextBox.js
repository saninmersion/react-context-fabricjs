import React, {
    useState,
    useContext,
    useEffect,
}                        from "react"
import { fabric }        from "fabric"
import { FabricContext } from "../../context/FabricContext"
import {
    getActiveStyle,
    setActiveProp,
    setActiveStyle,
}                        from "../libs/utils"

const FabricTextBox = (props) => {
    const { canvas, activeObject } = useContext(FabricContext)
    const [showTools, setShowTools] = useState(false)
    const [options, setOptions] = useState({
        width: 200,
        top: 10,
        left: 10,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "left",
        fontFamily: "arial",
        textDecoration: "normal",
        fill: "#000000",
    })

    useEffect(() => {
        setShowTools(activeObject ? activeObject.get("type") === "textbox" : false)
        if (activeObject) {
            const activeOptions = {
                fontSize: getActiveStyle("fontSize", activeObject),
                fontWeight: getActiveStyle("fontWeight", activeObject),
                fontStyle: getActiveStyle("fontStyle", activeObject),
                textAlign: activeObject["textAlign"],
                fontFamily: getActiveStyle("fontFamily", activeObject),
                textDecoration: getActiveStyle("textDecoration", activeObject),
                fill: getActiveStyle("fill", activeObject),
            }
            setOptions({ ...options, ...activeOptions })
        }
    }, [activeObject])

    const addTextBox = () => {
        const textBox = new fabric.Textbox("Add your text here", options)
        canvas.add(textBox)
    }

    const updateFontSize = (e) => {
        setOptions({
            ...options,
            fontSize: e.target.value,
        })
        setActiveStyle("fontSize", parseInt(e.target.value, 10), activeObject)
    }

    const updateFill = (e) => {
        setOptions({
            ...options,
            fill: e.target.value,
        })
        setActiveProp("fill", e.target.value, activeObject)
    }

    const updateTextAlign = (e) => {
        setOptions({
            ...options,
            textAlign: e.currentTarget.value,
        })
        setActiveStyle("textAlign", e.currentTarget.value.toLowerCase(), activeObject)
    }

    const updateBold = (e) => {
        const value = options.fontWeight === "bold" ? "normal" : "bold"
        setOptions({
            ...options,
            fontWeight: value,
        })
        setActiveStyle("fontWeight", value, activeObject)
    }

    const updateItalic = (e) => {
        const value = options.fontStyle === "italic" ? "normal" : "italic"
        setOptions({
            ...options,
            fontStyle: value,
        })
        setActiveStyle("fontStyle", value, activeObject)
    }

    const updateUnderline = (e) => {
        const value = options.textDecoration === "underline" ? "" : "underline"

        setOptions({
            ...options,
            textDecoration: value,
        })
        setActiveStyle("textDecoration", value, activeObject)
        setActiveStyle("underline", !!value.length, activeObject)
    }

    return (
        <>
            <button onClick={addTextBox}>Add Text Box</button>
            {
                showTools &&
                <div>
                    <label htmlFor="fontSize">Font Size:</label>
                    <input type="number"
                           style={{ "width": "40px" }}
                           className="btn-object-action"
                           name="fontSize"
                           min="10"
                           value={options.fontSize}
                           onChange={updateFontSize}
                    />
                    <br/>
                    <label htmlFor="color">Fill:</label>
                    <input type="color" name="fill" style={{ "width": "50px" }}
                           value={options.fill}
                           onChange={updateFill}
                           className="btn-object-action"/>
                    <br/>
                    <label htmlFor="text-align" style={{ "display": "inline-block" }}>Text align:</label>
                    <select name="textAlign"
                            className="btn-object-action"
                            onChange={updateTextAlign}
                            value={options.textAlign}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                    <br/>
                    <div id="text-controls-additional">
                        <button type="button"
                                style={{'background': options.fontWeight === "bold" ? 'white' : 'gray'}}
                                onMouseUp={updateBold}
                                className="btn btn-object-action">
                            <strong>B</strong>
                        </button>
                        <button type="button"
                                style={{'background': options.fontStyle === "italic" ? 'white' : 'gray'}}
                                onMouseUp={updateItalic}
                                className="btn btn-object-action" id="text-cmd-italic">
                            <em>I</em>
                        </button>
                        <button type="button"
                                style={{'background': options.textDecoration === "underline" ? 'white' : 'gray'}}
                                onMouseUp={updateUnderline}
                                className="btn btn-object-action" id="text-cmd-underline">
                            <u>U</u>
                        </button>
                    </div>
                </div>
            }
            <hr/>
        </>
    )
}

export default FabricTextBox
