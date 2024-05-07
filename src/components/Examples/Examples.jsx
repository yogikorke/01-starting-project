import { Fragment, useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <Fragment>
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        </Fragment>
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                TabsContainer="menu"
                buttons={
                    <Fragment>
                        <TabButton onSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                    </Fragment>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}