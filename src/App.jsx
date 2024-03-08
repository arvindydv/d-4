import { Quotes } from "./pages/Quotes";
import data from "../src/data";

function App() {
  
  return (
    <>
      {data.map((result) => {
        return <Quotes name={result.name} quote={result.quote} />;
      })}
    </>
  );
}

export default App;
