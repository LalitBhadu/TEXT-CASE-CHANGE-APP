import Alart from './Alart';
import './App.css';
// import About from './components/About';
import Navigation from './components/Navigation';
import Textform from './components/Textform';


function App() {
  return (
    <>
     <Navigation/>
     <Alart/>
     <div className="container my-7 m-5">
     <Textform heading="Enter your text hear"/>
     {/* <About/> */}
     </div>
    </>
  );
} 
export default App;
