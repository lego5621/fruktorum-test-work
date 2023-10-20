<template lang="pug">
.subscribe-form
  .subscribe-form__title
    | Подпишись на рассылку

  form.subscribe-form__form
    AppInput.subscribe-form__form-input(placeholder="Email")
    AppButton(mode="mode2") Подписаться
</template>

<style lang="scss">
.subscribe-form {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 27px 30px;
	border-radius: 2px;
	background: var(--background-black, #1b1b1b);

	&__title {
		display: flex;
		align-items: center;
		flex-basis: calc(50% - 20px);
		min-width: 100px;

		color: var(--text-white, #fefefe);
		font-size: 22px;
		font-style: normal;
		font-weight: 800;
		line-height: 30px;

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
		}
	}

	&__form {
		display: flex;
		flex-wrap: wrap;
		flex-basis: 50%;
		gap: 37px;

		@media screen and (max-width: 1340px) {
			flex-basis: 100%;
		}

		&-input {
			flex-grow: 1;

			@media screen and (max-width: 800px) {
				flex-basis: 100%;
			}
		}
	}
}
</style>
