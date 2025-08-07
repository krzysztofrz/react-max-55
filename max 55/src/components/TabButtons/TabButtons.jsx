import { useState } from "react";
import { TabButton } from "./TabButton";
import { EXAMPLES } from "../../data";

export const TabButtons = () => {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
		console.log(selectedButton);
	}

	return (
		<>
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
		</>
	);
};
