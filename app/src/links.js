import { useNavigate } from "react-router-dom";
import bares from "./bares";
export default (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>Rotas</p>
        {bares.map((bar) => {
          return <button onClick={() => window.location.href = "/" + bar}>{bar}</button>;
        })}
      </div>
      <button onClick={() => window.location.href = "/"}>inicio</button>
    </div>
  );
};
