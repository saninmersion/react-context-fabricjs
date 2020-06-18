import React, { useState, useContext, useEffect } from "react"
import { fabric }            from "fabric"
import { FabricContext }          from "../../context/FabricContext"
import {
    getActiveStyle,
    setActiveProp,
    setActiveStyle,
} from "../libs/utils"

const FabricLine = () => {
    const { canvas, activeObject } = useContext(FabricContext)
    const [showTools, setShowTools] = useState(false)
    const [options, setOptions] = useState({
        left: 100,
        top: 100,
        stroke: "black",
        hoverCursor: 'default',
        strokeWidth: 2,
    })

    const addLine = () => {
        const line = new fabric.Line([100, 100, 300, 100], options)
        canvas.add(line)
    }

    const updateStroke = (e) => {
        setOptions({
            ...options,
            stroke: e.target.value,
        })
        setActiveProp("stroke", e.target.value, activeObject)
    }

    const updateStrokeWidth = (e) => {
        setOptions({
            ...options,
            strokeWidth: e.target.value,
        })
        setActiveStyle('strokeWidth', parseInt(e.target.value, 10), activeObject);
    }


    useEffect(() => {
        setShowTools(activeObject ? activeObject.get("type") === "line" : false)
        if (activeObject) {
            const activeOptions = {
                stroke: getActiveStyle("stroke", activeObject),
                strokeWidth: getActiveStyle("strokeWidth", activeObject),
            }
            setOptions({ ...options, ...activeOptions })
        }
    }, [activeObject    ])

    return (
        <>
            <button onClick={addLine}>Add Line</button>
            {
                showTools &&
                <div>
                    <label htmlFor="strokeWidth">Stroke Width: </label>
                    <input type="number"
                           style={{ "width": "50px" }}
                           className="btn-object-action"
                           name="strokeWidth"
                           min="1"
                           value={options.strokeWidth}
                           onChange={updateStrokeWidth}
                    />
                    <br/>
                    <label htmlFor="color">Stroke: </label>
                    <input type="color" name="stroke" style={{ "width": "50px" }}
                           value={options.stroke}
                           onChange={updateStroke}
                           className="btn-object-action"/>
                    <br/>
                </div>
            }
            <hr/>
        </>
    )
}

export default FabricLine
