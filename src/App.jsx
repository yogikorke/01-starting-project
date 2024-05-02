import reactImage from "./assets/react-core-concepts.png";
import componentImage from "./assets/components.png";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            <CoreConcepts title="Components" description="The core UI building block." image={componentImage}></CoreConcepts>
            <CoreConcepts></CoreConcepts>
            <CoreConcepts></CoreConcepts>
            <CoreConcepts></CoreConcepts>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
