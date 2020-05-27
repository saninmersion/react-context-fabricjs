import React, {
    useCallback,
    createContext,
    useState,
}                 from "react"
import { fabric } from "fabric"

export const FabricContext = createContext([])

export const FabricContextProvider = ({ children }) => {
    const [canvas, setCanvas] = useState(null)
    const [activeObject, setActiveObject] = useState(null)

    // Actions
    const initCanvas = useCallback((c) => {
        setCanvas(new fabric.Canvas(c))
    }, [])

    return (
        <FabricContext.Provider
            value={{ canvas, activeObject, initCanvas, setActiveObject }}>
            {children}
        </FabricContext.Provider>
    )
}
