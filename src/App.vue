<script setup>
import BaseTable from '/src/components/BaseTable.vue'
import BaseSidebar from './components/sidebar/BaseSidebar.vue'
</script>

<template>
	<section class="main">
		<div class="container">
			<div class="main-header">
				<span class="main-header__title">
					Жилфонд
				</span>
				<span class="main-header__account">
					Пользователь
				</span>
			</div>
			<div class="main__wrapper">
				<BaseSidebar />
				<BaseTable />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.main {
	padding: 50px 0;
	height: 100%;

	&__wrapper {
		display: flex;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		min-height: 590px;
	}

	&-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		margin-bottom: 25px;

		&__title {
			font-weight: 700;
			font-size: 32px;
			color: #e31f24;
		}

		&__account {
			font-size: 16px;
			color: #333;
		}
	}
}
</style>