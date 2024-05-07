import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <section id="examples">
            <h2> Examples </h2>
            <menu>
                <TabButton onSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton onSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        </section>
    );
}