import { useState } from "react";
import TabButton from "./components/TabButton";
import CoreConcept from "./components/CoreConcepts.jsx";
import { EXAMPLES, CORE_CONCEPTS } from "./data.js";
import "./App.css";

function App() {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
		console.log(selectedButton);
	}

	return (
		<div>
			<header>
				<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
				<h1>React Essentials</h1>
				<p>
					Fundamental React concepts you will need for almost any app you are
					going to build!
				</p>
			</header>

			<main>
				<h2>Time to get started!</h2>
			</main>
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
			</main>
			<menu className="tab-buttons">
				<TabButton onSelect={() => handleSelect("components")}>
					Components
				</TabButton>
				<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
				<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
				<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
			</menu>
			{!selectedTopic ? (
				<p>Please select a topic</p>
			) : (
				<div id="tab-content">
					<h3>{EXAMPLES[selectedTopic].title}</h3>
					<p>{EXAMPLES[selectedTopic].description}</p>
					<pre>
						<code>{EXAMPLES[selectedTopic].code}</code>
					</pre>
				</div>
			)}
		</div>
	);
}

export default App;
