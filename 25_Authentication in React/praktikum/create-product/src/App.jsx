import "./App.css";
import Login from "./pages/Login";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-column text-center m-5 p-5 gap-3 ">
        <h1>Welcome Stranger!!</h1>
        <button onClick={handleClick} className="btn btn-primary btn-lg">
          Login
        </button>
      </div>
    </>
  );
}

export default App;
