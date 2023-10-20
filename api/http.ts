export const _useFetch: typeof useFetch = (request, opts?) => {
	const runtimeConfig = useRuntimeConfig();

	return useFetch(request, {
		baseURL: runtimeConfig.public.apiURL,
		...opts,
	});
};
