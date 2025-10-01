export const Tab = ({ children, buttons }) => {
	return (
		<>
			<menu>{buttons}</menu>
			{children}
		</>
	);
};
