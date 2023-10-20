// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/scss/index.scss'],
	runtimeConfig: {
		public: {
			apiURL: 'https://devtwit8.ru/api/v1/',
		},
	},
	imports: {
		dirs: ['api', 'constants'],
	},
	components: {
		global: true,
		dirs: ['~/components'],
	},
});
