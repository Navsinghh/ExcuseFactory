import ExcuseContainer from "./ExcuseContainer";
import "../styles/excuses.css";
import { useContext } from "react";
import { AppContext } from "../utils/contextapi";

export default function Excuses() {
  const { data } = useContext(AppContext);
  return (
    <div className="all_excuses">
      {data.map((element, index) => (
        <ExcuseContainer key={index}>{element.excuse}</ExcuseContainer>
      ))}
    </div>
  );
}
