<script>
  export let src
  export let text
  export let href
</script>

<a class="flex p-4 [ opacity-50 hover:opacity-100 ] [ duration-150 ease-in-out ]" {href} title="همکاری با شرکت {text}">
  <img class="w-12 max-h-12 lg:w-16 lg:max-h-16" {src} alt="همکاری با شرکت {text}" />
</a>
