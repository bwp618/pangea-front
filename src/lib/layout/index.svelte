<script lang="ts">
	import Navbar from './Navbar/index.svelte';
	import Sidebar from './Sidebar/index.svelte';
	import Breadcrumbs from './Breadcrumbs/index.svelte';
	import Cactus from '@svicons/remix-fill/cactus.svelte';

</script>

<div class="drawer drawer-mobile h-screen">
	<input id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<div class="navbar h-16 sticky top-0 border-b border-base-200 z-40 justify-between">
			<Navbar />
		</div>
		<div class="mx-4 mt-4">
			<Breadcrumbs />
		</div>
	</div>
	<div class="drawer-side">
		<label for="drawer" class="drawer-overlay" />
		<div class="w-64  bg-base-100 xl:bg-transparent">
			<div class="navbar h-16 sticky top-0 border-b border-base-200 z-50">
				<div class="flex-none hidden lg:block" />
				<div class="text-2xl font-extrabold text-primary">
					<Cactus class="w-8 h-8 text-accent mr-2" />
					<span>PANGEA</span>
				</div>
			</div>
			<div />
			<Sidebar />
		</div>
	</div>
</div>
