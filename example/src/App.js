import "./App.css";
import { ReactScrollSlide } from "@mefaba/react-scroll-slide";

function App() {
  return (
    <div className="App">
      <ReactScrollSlide>
        <div id="page_1" className="page color1">
          <p>PAGE 1</p>
        </div>
        <div id="page_2" className="page color2">
          <p>PAGE 2</p>
        </div>
        <div id="page_3" className="page color3">
          <p>PAGE 3</p>
        </div>
        <div id="page_4" className="page color4">
          <p>PAGE 4</p>
        </div>
      </ReactScrollSlide>
    </div>
  );
}

export default App;
