import { _useFetch } from '@/api/http';

export function getPageStructure(path = '') {
	return _useFetch(`page/`, {
		query: { path },
	});
}
