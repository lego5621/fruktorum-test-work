export const toCamelCase = (name: string) =>
	name.replace(/_([a-z])/g, (_match, letter) => {
		return letter.toUpperCase();
	});
