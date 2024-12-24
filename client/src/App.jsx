import Header from "./components/Header";
import Body from "./components/Body";

import Excuses from "./components/Excuses";
import { useContext } from "react";
import { AppContext } from "./utils/contextapi";

function App() {
  const { data } = useContext(AppContext);

  return (
    <>
      <Header />
      <Body />
      {data && <Excuses />}
    </>
  );
}

export default App;
