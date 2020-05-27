import React, {
    useContext,
    useEffect,
    useRef,
}                        from "react"
import { FabricContext } from "../context/FabricContext"

const FabricCanvas = () => {
    const { canvas, initCanvas, setActiveObject } = useContext(FabricContext)
    const canvasEl = useRef(null)

    useEffect(() => {
        initCanvas(canvasEl.current)
    }, [])

    const updateActiveObject = () => {
        console.log('<<<--- canvas clicked --- >>>')
        const active = canvas.getActiveObject()
        setActiveObject(active)
    }

    return (
        <div>
            <canvas ref={canvasEl}
                    id="fabric-canvas"
                    onClick={updateActiveObject}
                    width={800}
                    height={400}
                    style={{ border: "1px solid red" }}/>
        </div>
    )
}

export default FabricCanvas
