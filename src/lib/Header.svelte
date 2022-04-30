<script>
	import { isMobileMenuOpen } from '$store/header.js'
	const navItems = [
		{
			title: 'درباره آیدی‌پی',
			href: '#',
		},
		{
			title: 'سوالات متداول',
			href: '#',
		},
		{
			title: 'تماس با ما',
			href: '#',
		},
		{
			title: 'اپلیکیشن',
			href: '#',
		},
		{
			title: 'مستندات API',
			href: '#',
		},
	]
</script>

<header class="relative z-50 bg-gray-50">
	<div class="container px-0 | flex items-center justify-between | h-14">
		
		<!-- Right Side -->
		<div class="flex items-center | h-full">
			
			<!-- Open Mobile Menu -->
			<button class="btn-base | h-full px-4" on:click={_=> $isMobileMenuOpen = !$isMobileMenuOpen}>
				<svg class="w-4 fill-gray-500" viewBox="0 0 448 512"><path d="M0 80c0-8.84 7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 96 0 88.84 0 80zm0 160c0-8.8 7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm432 176H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
			</button>
			
			<!-- Auth -->
			<a class="btn-base | h-full px-4 | text-xs | border-x border-gray-200" href="/auth">
				ورود به حساب
			</a>
		</div>
		
		<!-- Logo -->
		<a class="btn-base h-full px-4" href="/">
			<img class="w-20" src="/logo.svg" alt="Logo" />
		</a>
	</div>
</header>

<nav class="absolute top-14 {$isMobileMenuOpen && '-translate-y-full'} inset-x-0 bg-gray-100 border-t border-gray-200 text-sm duration-500 ease-in-out">
	<ul class="py-2">
		{#each navItems as item}
			<li>
				<a class="block py-2 px-4 duration-150 hover:bg-gray-200 focus:bg-gray-200" href={item.href}>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	/* nav li:first-child a {
		@apply pt-4;
	}
	nav li:last-child a {
		@apply pb-4;
	} */
</style>
