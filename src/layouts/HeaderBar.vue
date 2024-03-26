<script setup>
import { inject } from "vue";

// 🚀 Lifecycle


// 🚀 Data

const $global = inject("$global");
const isMobile = $global.tools.isMobile(); // 手機板

// 🚀 Method 
</script>

<template>
	<nav class="d-flex w-100 justify-content-center nav-bar">
		<div
			class="navbar navbar-expand-lg p-0 position-absolute top-0 z-3 mx-auto"
			style="width: -webkit-fill-available; background-color: transparent;max-width:1200px"
		>
			<div class="container-fluid  ">
				<a class="navbar-brand fs-20 text-white">
					HOTEL
				</a>
				<div v-if="isMobile">
					<button
						class="signUp-btn"
						style=""
					>SIGN UP</button>
					<svg-icon
						name="button_menu"
						width="48"
						height="48"
						alt="menu"
					></svg-icon>
				</div>
				<template v-else>
					<div class="nav-item text-white">
						About
					</div>
					<div class="nav-item text-white">
						Service
					</div>
					<div class="nav-item text-white">
						Rooms
					</div>
					<div class="nav-item text-white">
						Blog
					</div>
					<div class="nav-item text-white">
						Contact
					</div>
					<div class="nav-item">
						<button
							class="signUp-btn"
							style=""
						>SIGN UP</button>
					</div>
				</template>
			</div>
		</div>
	</nav>
</template>
<style scope></style>
