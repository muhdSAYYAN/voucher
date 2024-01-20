import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100vh"}}>
       <Header/>
       <Detail/>
    </div>
  );
}

export default App;
