import { State } from "./components/State";

function App() {
  return (
    <>
      <State name="Primer componente (1+1)" incremento={1} />
      <State name="Segundo componente (10+10)" incremento={10} />
    </>
  );
}

export default App;
