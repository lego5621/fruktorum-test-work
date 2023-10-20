<template lang="pug">
//- уязвимость  XSS, но парсить data не хочу
.text-block(v-html="data")
</template>

<script lang="ts" setup>
defineProps({
	data: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss">
.text-block {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-self: center;
	max-width: 884px;

	h2 {
		color: var(--text-black, #1b1b1b);
		font-size: 34px;
		font-style: normal;
		font-weight: 800;
		line-height: 46px;
		margin-bottom: 30px;
	}

	p {
		color: var(--text-black, #1b1b1b);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
		margin: 20px 0;
	}

	blockquote {
		padding-left: 116px;
		position: relative;
		margin-top: 40px;

		p {
			color: var(--text-black, #1b1b1b);
			font-size: 18px;
			font-style: italic;
			font-weight: 300;
			line-height: 26px;
		}

		footer {
			color: var(--text-gray, #8d959c);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;
			margin-top: 15px;
		}

		&::before {
			content: "";
			display: inline-block;
			width: clamp(20px, 80px, 80px);
			height: clamp(20px, 64px, 64px);
			background-image: url("/img/quotes.svg");
			background-size: cover;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	ul {
		list-style: none;

		li {
			margin-left: 136px;

			@media screen and (max-width: 800px) {
				margin-left: 40px;
			}

			color: #000;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;

			&::before {
				content: "\25C6";
				color: #000;
				margin-right: 5px;
			}
		}
	}
}
</style>
