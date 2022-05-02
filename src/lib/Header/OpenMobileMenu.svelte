<script>
	import { isMobileMenuOpen } from '$store/header.js'
</script>

<button id="mobile-menu-toggle" class="btn-base | h-full px-4 xl:hidden" on:click={_=> $isMobileMenuOpen = !$isMobileMenuOpen}>
  <svg class="fill-gray-500" aria-hidden="true" viewBox="0 0 448 512"><path d="M0 80c0-8.84 7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16H16C7.164 96 0 88.84 0 80zm0 160c0-8.8 7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16zm432 176H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h416c8.8 0 16 7.2 16 16s-7.2 16-16 16z"/></svg>
</button>
