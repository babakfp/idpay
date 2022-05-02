<script>
  export let title
  export let description
  export let bgColor
  export let className
</script>

<div class="grid gap-3 {className}">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 flex items-center justify-center {bgColor} bg-opacity-10 rounded-full">
      <slot />
    </div>
    <span class="text-sm xl:text-base">{title}</span>
  </div>
  <p class="text-sm leading-7 text-justify font-light text-gray-400">{description}</p>
</div>
