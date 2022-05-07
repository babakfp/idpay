<script>
  export let src
  export let text
</script>

<div class="group relative">
  <img class="flex w-12 max-h-12 opacity-50 duration-150 hover:opacity-100 lg:w-16 lg:max-h-16" src={src} alt="شرکت {text} از مشتریان ما">
  <p class="z-10 | absolute top-full right-0 | duration-150 ease-in-out -translate-y-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 | p-2 text-xs whitespace-nowrap bg-gray-200 text-gray-600 rounded | before:-z-1 before:w-4 before:h-4 before:bg-gray-200 before:absolute before:-top-0.5 before:right-6 before:rotate-45">
    همکاری با شرکت <strong>{text}</strong>
  </p>
</div>
