// Write your Color component here
const Color = (props) => {
  return <div className={props.color}></div>
}
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list"> 
          <Color color="red"/>
          <Color color="black"/>
          <Color color="blue"/>
      </div>
    </div>
  );
};

export default App;
