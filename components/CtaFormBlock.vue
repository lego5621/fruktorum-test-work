<template lang="pug">
.cta-block
  .cta-block__image
    img(src="/img/cta_form.png", alt="cta form")

  form.cta-block__form
    h3.cta-block__form-title
      | Стань участником проекта

    .cta-block__form-input-group
      AppInput.cta-block__form-input(placeholder="Имя")
      AppInput.cta-block__form-input(placeholder="Телефон")
      AppInput.cta-block__form-input(placeholder="Email")

    AppButton.cta-block__form-button(mode="mode2")
      | Подписаться
</template>

<style lang="scss">
.cta-block {
	display: flex;
	flex-wrap: wrap;
	gap: 60px;
	padding: 60px;
	background: var(--background-black, #1b1b1b);

	&__image {
		flex-basis: calc(50% - 30px);
		overflow: hidden;
		object-fit: cover;

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
			max-height: 400px;
		}

		img {
			width: 100%;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex-basis: calc(50% - 30px);

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
		}

		&-title {
			color: var(--text-white, #fefefe);

			font-size: 34px;
			font-style: normal;
			font-weight: 800;
			line-height: 46px;
		}

		&-input-group {
			display: flex;
			flex-direction: column;
			gap: 7px;
		}

		&-button {
			margin-top: 10px;
			width: 260px;
		}

		&-input {
			width: 353px;

			@media screen and (max-width: 1340px) {
				width: 100%;
			}
		}
	}
}
</style>
