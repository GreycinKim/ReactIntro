import TabButton from "./TabButton";
import React, {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [activeTab, setActiveTab] = useState();
    function handleSelect(selectedButton) {
        setActiveTab(selectedButton);
        console.log(activeTab);
    }

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
    return(
        <Section title = "Examples" id="examples">
            <Tabs buttons={
                <>
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
            </>
            }
            >
                {tabContent}
            </Tabs>
        </Section>

    );
}