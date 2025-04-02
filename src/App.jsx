import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcept.jsx";
import {CORE_CONCEPTS} from "./data";
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';



function App() {
    const [activeTab, setActiveTab] = useState();
    function handleSelect(selectedButton) {
        setActiveTab(selectedButton);
        console.log(activeTab);
    }

    console.log("App component executing");

    let tabContent = <p>Please select a Button...</p>;
    if (activeTab){
        tabContent =
            <div id='tab-content'>
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
                      <code>{EXAMPLES[activeTab].code}</code>
                  </pre>
            </div>
    }
  return (
    <>
        <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>
                  {
                      CORE_CONCEPTS.map((item) => (<CoreConcept key = {item.title}{...item}/>))
                  }
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton isSelected = {activeTab === 'components'}
                             onClick={()=> handleSelect('components')}
                  >Components
                  </TabButton>
                  <TabButton isSelected = {activeTab === 'jsx'}
                             onClick={()=> handleSelect('jsx')}
                  >Jsx
                  </TabButton>
                  <TabButton isSelected = {activeTab === 'props'}
                             onClick={()=> handleSelect('props')}
                  >Props
                  </TabButton>
                  <TabButton isSelected = {activeTab === 'state'}
                             onClick={()=> handleSelect('state')}
                  >State
                  </TabButton>
              </menu>
              {tabContent}
          </section>
      </main>
    </>
  );
}

export default App;
