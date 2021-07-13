<script lang="ts">
	import Menu from '@svicons/remix-fill/menu.svelte';
	import User from '@svicons/remix-fill/user-6.svelte';
	import Discord from '@svicons/remix-fill/discord.svelte';
	import Google from '@svicons/remix-fill/google.svelte';
	import Telegram from '@svicons/remix-fill/telegram.svelte';
	import Notification from '@svicons/remix-fill/notification-2.svelte';
</script>

<div class="flex-none lg:hidden">
	<label for="drawer" class="btn">
		<Menu class="w-8 h-8" />
	</label>
</div>
<div class="flex-1 lg:flex-none">
	<div class="form-control">
		<input type="text" placeholder="Search" class="input input-ghost" />
	</div>
</div>
<div class="flex-none">
	<button class="btn btn-circle btn-ghost">
		<Notification class="w-6 h-6" />
	</button>
	<div class="dropdown dropdown-end">
		<div tabindex="0" class="btn btn-circle btn-ghost">
			<User class="w-6 h-6" />
		</div>
		<ul class="dropdown-content menu bg-base-100 shadow-lg rounded whitespace-nowrap font-semibold">
			<li class="hover-bordered">
				<a href="/" style="color:#7289DA;">
					<Discord class="w-8 h-8 inline-block mr-2" />
					디스코드로 로그인
				</a>
			</li>
			<li class="hover-bordered">
				<a href="/" style="color:#ea4335;">
					<Google class="w-8 h-8 inline-block mr-2" />구글로 로그인</a
				>
			</li>
			<li class="hover-bordered">
				<a href="/" style="color:#0088cc;">
					<Telegram class="w-8 h-8 inline-block mr-2" />텔레그램으로 로그인</a
				>
			</li>
		</ul>
	</div>
</div>
