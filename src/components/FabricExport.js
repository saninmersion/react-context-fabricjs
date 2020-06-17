import React, { useContext } from "react"
import { FabricContext }     from "../context/FabricContext"

const FabricExport = props => {
    const { canvas } = useContext(FabricContext)

    const handleSave = async () => {
        if (!canvas) { return null }
        const c = canvas

        const json = c.toJSON()
        let dataURL = c.toDataURL("image/jpeg", 1.0)
        console.log(json, dataURL)
    }

    return (
        <div>
            <button className="btn-primary" onMouseUp={handleSave}>Save</button>
        </div>
    )
}

export default FabricExport
