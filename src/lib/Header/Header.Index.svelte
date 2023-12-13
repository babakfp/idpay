<script>
	import { isLoggedIn } from '$store/auth.js'
  import MobileMenu from './MobileMenu.svelte'
  import OpenMobileMenu from './OpenMobileMenu.svelte'
  import DesktopMenu from './DesktopMenu.svelte'
</script>

<header class="z-50 sticky top-0 bg-gray-50 border-b border-gray-200">
	<div class="container px-0 | flex items-center justify-between | h-14">
		
		<!-- Right Side -->
		<div class="flex items-center | h-full">
			
			<OpenMobileMenu />
			
			<!-- Auth -->
			<div class="h-full border-x border-gray-200 xl:border-r-0">
				<a class="btn-base | h-full px-4 | text-xs | xl:text-sm xl:hover:bg-gray-100 xl:focus:bg-gray-100" href="javascript:">
					{#if $isLoggedIn}
						مشاهده حساب
					{:else}
						ورود به حساب
					{/if}
				</a>
			</div>

      <DesktopMenu />
		</div>
		
		<!-- Logo -->
		<a class="btn-base h-full px-4 | xl:hover:bg-gray-100 xl:focus:bg-gray-100" href="/">
			<img class="w-20 xl:w-24" src="/logo.svg" alt="لوگوی آیدی‌پی">
		</a>
	</div>
</header>

<MobileMenu />
