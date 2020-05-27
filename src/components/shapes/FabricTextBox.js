import React, { useContext } from "react"
import { fabric }            from "fabric"
import { FabricContext }     from "../../context/FabricContext"

const FabricTextBox = () => {
    const { canvas } = useContext(FabricContext)

    const addTextBox = () => {
        const textBox = new fabric.Textbox("Add your text here", {
                top: 10,
                left: 10,
                fontSize: 16,
            },
        )
        canvas.add(textBox)
    }

    return (
        <button onClick={addTextBox}>Add Text Box</button>
    )
}

export default FabricTextBox
