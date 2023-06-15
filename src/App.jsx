import { useState } from 'react'
import './index.css'

// Write your Color component here
const Color = (props, setSelectedColor) => {

  return (
    <div 
      className={props.color}
      onClick={() => setSelectedColor(props)}
    ></div>
  )
}


const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  //if (selectedColor === setSelectedColor) 
  //setSelectedColor(selectedColor);
  //const navColor = (appColor) => {setSelectedColor(appColor)};

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list"> 
          <Color color="red" setSelectedColor={setSelectedColor}/>
          <Color color="black" setSelectedColor={setSelectedColor}/>
          <Color color="blue" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
