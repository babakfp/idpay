<script>
	import { navigating } from '$app/stores'
	import OutClick from 'svelte-outclick'
	import { isMobileMenuOpen, navItems } from '$store/header.js'
	$: $navigating && ($isMobileMenuOpen = false)
</script>

<OutClick on:outclick={_=> $isMobileMenuOpen = false} excludeByQuerySelector={['#mobile-menu-toggle']}>
	<nav class="z-40 fixed top-14 -translate-y-full {$isMobileMenuOpen && 'translate-y-0'} inset-x-0 bg-gray-100 border-b border-gray-200 text-sm duration-300 ease-out">
		<ul class="py-2">
			{#each $navItems as item}
				<li>
					<a class="block py-2 px-4 duration-150 hover:bg-gray-200 focus:bg-gray-200" href={item.href} on:click={_=> $isMobileMenuOpen = false}>
						{item.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</OutClick>
