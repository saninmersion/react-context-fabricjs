import React                     from 'react';
import FabricCanvas              from "./components/FabricCanvas"
import FabricToolbar             from "./components/FabricToolbar"
import FabricImage               from "./components/shapes/FabricImage"
import FabricTextBox             from "./components/shapes/FabricTextBox"
import { FabricContextProvider } from "./context/FabricContext"

function App() {
  return (
    <div style={{"padding": "100px 50px", 'height':'100vh' }}>
      <FabricContextProvider>
          <div style={{ "display": "flex" }}>
              <div style={{ "width": "30%", "background": "gray", "padding": "20px 20px 0 100px" }}>
                  <FabricTextBox/>
                  <hr/>
                  <br/>
                  <FabricImage/>
                  <hr/>
                  <FabricToolbar/>
              </div>
              <div style={{ "flex": "1", "overflow": "auto" }}>
                  <FabricCanvas/>
              </div>
          </div>
      </FabricContextProvider>
    </div>
  );
}

export default App;
