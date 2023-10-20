import { toCamelCase } from '@/utils';
export const getComponentName = (name: string) =>
	toCamelCase(name).replace(/^[a-z]/, function (letter) {
		return letter.toUpperCase();
	});
