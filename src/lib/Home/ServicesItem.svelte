<script>
  export let title
  export let description
  export let primaryBtnText
  export let primaryBtnHref
  export let secondaryBtnText
  export let secondaryBtnHref
</script>

<div>
  <h2 class="font-semibold">{title}</h2>
  <p class="mt-2 text-sm leading-7">{@html description}</p>
  
  {#if primaryBtnText && primaryBtnHref && secondaryBtnText && secondaryBtnHref}
    <div class="mt-4 flex gap-4">
      <a class="btn btn-brand text-xs" href={primaryBtnHref}>{primaryBtnText}</a>
      <a class="btn btn-light text-xs" href={secondaryBtnHref}>{secondaryBtnText}</a>
    </div>
  {/if}
</div>
