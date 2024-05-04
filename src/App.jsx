import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please select a topic');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcepts>
            <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}></CoreConcepts>
            <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}></CoreConcepts>
            <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}></CoreConcepts>
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          <h2>{selectedTopic}</h2>
        </section>
      </main>
    </div >
  );
}

export default App;
