import React, {
    useCallback,
    createContext,
    useReducer,
}                     from "react"
import { fabric }     from "fabric"

const initialState = {
    canvas: null,
    activeObject: null,
}

function reducer(state, action) {
    switch (action.type) {
        case "INIT_CANVAS":
            return {
                ...state,
                canvas: new fabric.Canvas(action.payload),
            }
        case "SET_ACTIVE_OBJECT":
            return {
                ...state,
                activeObject: state.canvas._activeObject,
            }
        default:
            return state

    }
}

export const FabricContext = createContext([])

export const FabricContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // Actions
    const initCanvas = useCallback((c) => {
        dispatch({
            type: "INIT_CANVAS",
            payload: c,
        })
    }, [])

    const setActiveObject = useCallback(() => {
        dispatch({
            type: "SET_ACTIVE_OBJECT",
            payload: null,
        })
    }, [])

    return (
        <FabricContext.Provider
            value={{ canvas: state.canvas, activeObject: state.activeObject, initCanvas, setActiveObject }}>
            {children}
        </FabricContext.Provider>
    )
}
