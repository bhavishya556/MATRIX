import { useState,useEffect } from 'react';
import './compi.css';
import Editor from "@monaco-editor/react";
import Navbar from './Navbar';
import spinner from './spinner.svg';
import Cube from './Cube';


function Compi() {
  const [showCube, setShowCube] = useState(true);
  const [userCode, setUserCode] = useState('');
  const [userLang, setUserLang] = useState('python');
  const [userTheme, setUserTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState('');
  const [userOutput, setUserOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCube(false); // Hide the Cube component
    }, 1500);
  
    return () => clearTimeout(timer);
  }, []);
  

  async function compile() {
    setLoading(true);
    if (userCode === '') {
      return;
    }

    const compileOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-compile': 'rapidapi',
        'X-RapidAPI-Key': '4635e59648msh0dcb7cda7b14d24p1179f1jsn408887ef8d49',
        'X-RapidAPI-Host': 'code-compiler10.p.rapidapi.com'
      },
      body: JSON.stringify({

        lang: userLang,
        code: userCode,
        input: userInput
      })
    };

    try {
      const response = await fetch('https://code-compiler10.p.rapidapi.com/', compileOptions);
      if (response.ok) {
        const data = await response.json();
        setUserOutput(data.output);
        console.log("data is ", data);
      } else {
        console.error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function clearOutput() {
    setUserOutput('');
  }

  return (

    <div >
       {showCube ? (<Cube />) : (   <div className="App">
      

      
      <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />



      <div className="main">
        <div className="left-container">
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultValue="# Enter your code here"
            onChange={(value) => { setUserCode(value) }}
          />
          <button className="run-btn" onClick={() => compile()}>
            Run
          </button>
        </div>
        <div className="right-container">
          <h4>Input:</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange={(e) => setUserInput(e.target.value)}></textarea>
          </div>
          <h4>Output:</h4>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button onClick={() => { clearOutput() }} className="clear-btn">
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
      </div>)}
    </div>
  );
}

export default Compi;
