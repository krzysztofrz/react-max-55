import { useState } from "react";
import { TabButton } from "./TabButton";
import { TabContent } from "./TabContent";
import { Tab } from "./Tab";

export const TabButtons = () => {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
		console.log(selectedButton);
	}

	return (
		<>
			<Tab
				buttons={
					<>
						<TabButton onSelect={() => handleSelect("components")}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
						<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
					</>
				}
			>
				<TabContent topic={selectedTopic} />
			</Tab>
		</>
	);
};
