import './App.css';
import Drag1 from "./Components/Drag1"

const data = [
  {title: 'group 1', items: ['1', '2','3']},
  {title: 'group 2', items: ['4', '5']},
]

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Drag1 data={data}/>
      </div>
    </div>
  );
}

export default App;
