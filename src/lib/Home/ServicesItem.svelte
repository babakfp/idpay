<script>
  export let title
  export let description
  export let imgSrc
  export let imgSizeClass
  export let primaryBtnText
  export let primaryBtnHref
  export let secondaryBtnText
  export let secondaryBtnHref
</script>

<div class="{imgSrc && 'lg:grid lg:gap-8 lg:items-center lg:justify-between lg:grid-cols-2'}">
  <div class="ServicesItem__content grid gap-4 {imgSrc && 'lg:gap-6'}">
    <h2 class="font-semibold {imgSrc && 'lg:text-lg xl:text-2xl'}">{title}</h2>
    <p class="-mt-2 text-sm leading-7 {imgSrc && 'lg:text-base lg:leading-8'}">{@html description}</p>
    
    {#if primaryBtnText && primaryBtnHref && secondaryBtnText && secondaryBtnHref}
      <div class="flex gap-4">
        <a class="btn btn-brand text-xs lg:btn-big lg:hover:rotate-3" href={primaryBtnHref}>{primaryBtnText}</a>
        <a class="btn btn-light text-xs lg:btn-big lg:hover:-rotate-3" href={secondaryBtnHref}>{secondaryBtnText}</a>
      </div>
    {/if}
  </div>

  <img class="ServicesItem__img hidden lg:block max-w-lg max-h-lg justify-self-end {imgSizeClass}" src={imgSrc} alt="" aria-hidden="true">
</div>
