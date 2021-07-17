<script lang="ts">
import {link} from 'svelte-spa-router'

	import Home from '@svicons/remix-fill/home-3.svelte';
	import Team from '@svicons/remix-fill/team.svelte';
	import Game from '@svicons/remix-fill/game.svelte';
	import Community from '@svicons/remix-fill/community.svelte';
	import Support from '@svicons/remix-fill/question-answer.svelte';
	import Settlement from '@svicons/remix-fill/increase-decrease.svelte';
	import Settings from '@svicons/remix-fill/settings-2.svelte';
	const links: { name: string; url: string; icon?: object }[] = [
		{ name: 'Home', url: '/', icon: Home },
		{ name: 'Member', url: '/member', icon: Team },
		{ name: 'Game', url: '/game', icon: Game },
		{ name: 'Community', url: '/community', icon: Community },
		{ name: 'Support', url: '/support', icon: Support },
		{ name: 'Settlement', url: '/settlement', icon: Settlement },
		{ name: 'Settings', url: '/settings', icon: Settings }
	];
</script>

<nav>
	<ul class="overflow-y-auto p-4 -ml-4 space-y-1">
		{#each links as _link}
			<li
				class="rounded-r-full h-14 "
			>
				<a href={_link.url} use:link class="flex items-center ml-4 space-x-2 w-full h-full">
					{#if _link.icon}<svelte:component this={_link.icon} class="w-6 h-6 text-neutral" />{/if}
					<span>{_link.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
<svelte:head>
</svelte:head>
