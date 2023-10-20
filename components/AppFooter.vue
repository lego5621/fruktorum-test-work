<template lang="pug">
footer.app-footer
  .app-footer__border
  .app-footer__container
    .app-footer-description
      NuxtLink.app-footer-description__logo(to="/")
        img.header__logo(src="/img/logo.svg", alt="logo")

      .app-footer-description__text
        | Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности

    .app-footer-social
      .app-footer-social__label email

      NuxtLink.app-footer-social__email(to="mailto:testblogsupport@gmail.com")
        | testblogsupport@gmail.com

      .app-footer-social__icons
        AppIcon(v-for="icon in icons", :key="icon.href", :data="icon")

  .app-footer__subscribe-form-block
    SubscribeFormBlock
</template>

<script lang="ts" setup>
const icons = [
	{ href: "#", image: "/img/facebook.svg" },
	{ href: "#", image: "/img/instagram.svg" },
	{ href: "#", image: "/img/telegram.svg" },
	{ href: "#", image: "/img/vk.svg" },
];
</script>

<style lang="scss">
.app-footer {
	display: flex;
	flex-direction: column;

	&__border {
		border-top: 1px var(--border-gray, #8d959c) solid;
		width: 150vw;
    position: relative;
    left: -50vw;
	}

	&__container {
		display: flex;
		width: 100%;
		margin: 70px auto 70px auto;

		@media screen and (max-width: 800px) {
			flex-wrap: wrap;
		}
	}

	&__subscribe-form-block {
		width: 100%;
	}

	.app-footer-description {
		flex-basis: 70%;

		@media screen and (max-width: 800px) {
			flex-basis: 100%;
		}

		&__logo {
			display: block;
			margin-bottom: 20px;
		}

		&__text {
			max-width: 426px;
			color: var(--text-gray, #8d959c);
			font-family: Montserrat;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
		}
	}

	.app-footer-social {
		flex-basis: 30%;

		@media screen and (max-width: 800px) {
			margin-top: 20px;
			flex-basis: 100%;
		}

		&__label {
			color: var(--text-gray, #8d959c);
			font-family: Montserrat;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
			margin-bottom: 2px;
		}

		&__email {
			display: block;
			text-decoration: none;
			color: var(--text-black, #1b1b1b);
			// font-family: Ubuntu;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 22px;
			margin-bottom: 24px;
		}

		&__icons {
			display: flex;
			gap: 20px;
		}
	}
}
</style>
