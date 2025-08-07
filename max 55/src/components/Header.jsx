export const Header = () => {
	const reactDescriptions = ["Fundamental", "Crucial", "Core", "essential"];

	function getRandomDescription() {
		const index = Math.floor(Math.random() * reactDescriptions.length);
		return reactDescriptions[index];
	}
	const description = getRandomDescription();

	return (
		<>
			<header>
				<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
				<h1>React Essentials</h1>
				<p>
					{description} React concepts you will need for almost any app you are
					going to build!
				</p>
			</header>

			<main>
				<h2>Time to get started!</h2>
			</main>
		</>
	);
};
