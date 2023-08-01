// import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Content from './content';

function App() {
  return (
    <div className="App">
      <NavBar />
      <hr />
      <Content />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <P />
        <MyBtn/>
      </header> */}
    </div>
  );
}
// function P(){
//   return(
//     <p>This is React Library</p>
//   )
// }
// function MyBtn(){ 
//   return(
//     <button>Press Here</button>
//   )
// }
export default App;
