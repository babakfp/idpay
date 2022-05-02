<script>
	import { navItems } from '$store/header.js'
</script>

<nav class="hidden xl:flex h-full">
  <ul class="flex h-full">
    {#each $navItems as item}
      <li class="h-full">
        <a class="btn-base h-full px-4 text-sm duration-150 hover:bg-gray-100 focus:bg-gray-100" href={item.href}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>
