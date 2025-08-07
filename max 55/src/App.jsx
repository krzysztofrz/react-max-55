import "./App.css";
import { Header } from "./components/Header.jsx";
import { CoreConcepts } from "./components/CoreConcpets/CoreConcepts.jsx";
import { TabButtons } from "./components/TabButtons/TabButtons.jsx";

function App() {
	return (
		<>
			<Header />
			<CoreConcepts />
			<TabButtons />
		</>
	);
}

export default App;
