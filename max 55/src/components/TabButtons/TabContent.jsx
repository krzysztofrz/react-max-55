import { EXAMPLES } from "../../data";
export const TabContent = ({ topic }) => {
	return (
		<>
			{!topic ? (
				<p>Please select a topic</p>
			) : (
				<div id="tab-content">
					<h3>{EXAMPLES[topic].title}</h3>
					<p>{EXAMPLES[topic].description}</p>
					<pre>
						<code>{EXAMPLES[topic].code}</code>
					</pre>
				</div>
			)}
		</>
	);
};
