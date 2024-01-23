import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alerts from "./Components/Alerts";
function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);

      }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled ","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled ","success")
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the test to Analize" mode={mode} />
      </div>
    </>
  );
}

export default App;
