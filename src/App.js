// import './App.css'
import './App.css';
import Navbar from './components/Navbar.js';
import TextBox from './components/TextBox.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Welcome to Text Analyser!</strong> You can analyze your text on the basis of many functionalities present here!
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      {/* <div className="container my-3">
        <About/>
      </div> */}
      <div className="container">
        <TextBox heading="Enter your text here:" />
      </div>
    </>
  );
}

export default App;
