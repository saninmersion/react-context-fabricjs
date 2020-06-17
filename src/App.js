import React                     from 'react';
import FabricCanvas              from "./components/FabricCanvas"
import FabricToolbar             from "./components/FabricToolbar"
import { FabricContextProvider } from "./context/FabricContext"

function App() {
    return (
    <div style={{"padding": "100px 50px", 'height':'100vh' }}>
      <FabricContextProvider>
          <div style={{ "display": "flex", "alignItems": "stretch" }}>
              <div style={{ "width": "100px", "background": "gray", "padding": "20px 20px 0 20px" }}>
                  <FabricToolbar/>
              </div>
              <div style={{ "flex": "1" }}>
                  <FabricCanvas/>
              </div>
          </div>
      </FabricContextProvider>
    </div>
  );
}

export default App;
