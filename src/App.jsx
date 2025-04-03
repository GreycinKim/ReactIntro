import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Header from './components/Header/Header.jsx';
import Examples from "./components/Examples.jsx";



function App() {

  return (
    <>
        <Header />
      <main>
          <CoreConcepts></CoreConcepts>
          <Examples />
      </main>
    </>
  );
}

export default App;
