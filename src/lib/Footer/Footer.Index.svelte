<script>
  import CustomerItem from './CustomerItem.svelte'
  import SocialLink from './SocialLink.svelte'
</script>

<div class="bg-gray-50 grid gap-4">
  <div class="container flex justify-evenly">
    <CustomerItem href="javascript:" src="/customers/behpardakht.svg" text="به پرداخت ملت" />
    <CustomerItem href="javascript:" src="/customers/pecco.svg" text="تجارت الکترونیک پارسیان" />
    <CustomerItem href="javascript:" src="/customers/sadad.png" text="تجارت الکترونیک سداد" />
    <CustomerItem href="javascript:" src="/customers/saman.svg" text="تجارت الکترونیک سامان کیش" />
  </div>
</div>

<footer class="bg-white text-sm">
  <div class="container px-8 grid gap-12 py-8 lg:px-4">

    <div class="grid gap-12 sm:flex sm:justify-between sm:items-end sm:border-b sm:border-gray-200 sm:pb-12">
      <div class="grid gap-4">
        <img class="w-20 xl:w-24" src="/logo.svg" alt="لوگوی آیدی‌پی">
        
        <div class="grid gap-3 font-black text-xs text-gray-600">
          <span>پشتیبانی ۲۴ ساعته، ۷ روز هفته</span>
          <div>
            <span>واحد پشتیبانی:</span>
            <a class="link inline-block font-dana-fn dir-ltr" href="tel:02143000050">021 43 0000 50</a>
          </div>
        </div>
      </div>
  
      <div class="grid gap-4 text-gray-600 text-xs font-black sm:text-left">
        <h6>آیدی‌پی در شبکه‌های اجتماعی:</h6>
        <div class="flex flex-wrap gap-2">
          <SocialLink href="javascript:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248 248-111.033 248-248S384.967 8 248 8Zm114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789 2.052-.034 6.639.474 9.61 2.885a10.452 10.452 0 0 1 3.53 6.716 43.765 43.765 0 0 1 .417 9.769Z"/></svg>
          </SocialLink>
          <SocialLink href="javascript:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </SocialLink>
          <SocialLink href="javascript:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
          </SocialLink>
          <SocialLink href="javascript:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          </SocialLink>
          <SocialLink href="javascript:">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </SocialLink>
        </div>
      </div>
    </div>

    <div class="grid gap-8 sm:grid-cols-3 sm:items-start sm:gap-8">
      <nav class="grid gap-3">
        <h6 class="font-black text-gray-600">محصولات</h6>
        <ul class="text-sm">
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="javascript:">درگاه شخصی و شرکتی</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="javascript:">درگاه فروشگاه آنلاین</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="javascript:">فروشگاه اینترنتی بساز</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="javascript:">کمپین جم‌آوری وجه</a></li>
        </ul>
      </nav>
      <nav class="grid gap-3">
        <h6 class="font-black text-gray-600">آشنایی با آیدی‌پی</h6>
        <ul class="text-sm">
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#pricing">تعرفه‌ها</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#about">درباره ما</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#faq">سوالات متداول</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#contact">تماس با ما</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#pricing">همکاری در فروش</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#terms">قوانین و مقررات</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#privacy">حریم خصوصی</a></li>
        </ul>
      </nav>
      <nav class="grid gap-3">
        <h6 class="font-black text-gray-600">منابع</h6>
        <ul class="text-sm">
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#blog">بلاگ</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#banks">دریافت شماره شبا</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#web-service">راهنمای API پرداخت</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#plugins">پلاگین و افزونه‌های پرداخت</a></li>
          <li><a class="inline-block py-1.5 hover:text-brand duration-150" href="/#app">دانلود اپلیکیشن</a></li>
          </ul>
      </nav>
    </div>

    <div class="grid justify-center justify-items-center gap-4 text-gray-600 text-xs font-black border-t border-gray-200 pt-8">
      <img class="w-12" src="/shaparak-logo.svg" alt="لوگوی شاپرک">
      <p>
        <span>آیدی‌پی, پرداخت یار</span> <a class="link" href="https://shaparak.ir/tips/%D8%B4%D8%B1%DA%A9%D8%AA-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA-%DB%8C%D8%A7%D8%B1" rel="nofollow" target="_blank">شاپرک بانک مرکزی</a>
      </p>
    </div>
  </div>

  <div class="bg-gray-800 text-gray-300 text-xs">
    <div class="container py-4 grid gap-4">
      <p class="text-center">تمامی حقوق مادی و معنوی این سایت متعلق به شرکت <a class="link" href="javascript:">آیدی‌پی</a> می‌باشد.</p>
    </div>
  </div>
</footer>
