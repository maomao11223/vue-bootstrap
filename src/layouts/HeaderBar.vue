<script setup>
import { inject } from "vue";

// 🚀 Lifecycle


// 🚀 Data

const $global = inject("$global");
const isMobile = $global.tools.isMobile(); // 手機板

// 🚀 Method 
</script>

<template>
	<nav
		class="navbar navbar-expand-lg p-0 position-absolute top-0 z-3"
		style="width: -webkit-fill-available; background-color: transparent"
	>
		<div class="container-fluid">
			<a class="navbar-brand fs-20 text-white">
				HOTEL
			</a>
			<div v-if="isMobile">
				 
				<svg-icon
					name="logout"
					width="16"
					height="16"
					class="cursor-pointer"
					alt="登出"
				></svg-icon>
			</div>
			<div
				class="collapse navbar-collapse"
				id="navbarScroll"
				v-else
			>
				<ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll m-0">
					<!-- 首頁看不到 -->


					<li class="nav-item">

					</li>
					<li class="nav-item">
						<a
							class="nav-link px-3 py-3"
							aria-current="page"
							href="#"
						>登出</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
