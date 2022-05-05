<script>
  import Hero from '$lib/Home/Hero.svelte'
  import Features from '$lib/Home/Features.svelte'
  import Services from '$lib/Home/Services.svelte'
</script>

<Hero />
<Features />
<Services />

<section class="bg-brand bg-opacity-10">
  <div class="container px-8 py-12 lg:px-4">
    <div class="grid gap-4 lg:gap-8 lg:p-8 lg:rounded lg:border-2 lg:border-white">
      <h2 class="text-xl font-light xl:text-2xl">به آیدی‌پی بپیوندید</h2>
    
      <div class="grid gap-4 text-sm leading-7 lg:text-base lg:leading-8">
        <p>آیدی‌پی, بهترین و راحت‌ترین راه جهت دریافت پول, مناسب برای شرکت‌ها, نمایندگی‌های بیمه, صندوق‌های وام‌خانگی, مدیران ساختمان, کترینگ‌ها, فروشندگان کالا و خدمات و...</p>
        <p>شما با ایجاد یک حساب کاربری در آیدی‌پی و داشتن یک صفحه پرداخت شخصی با آدرس اینترنتی سفارشی, می‌توانید برای مشتریانتان لینک درگاه پرداخت خود را ارسال نمایید تا مشتری با کلیک بر آن به صفحه فروشگاه شما هدایت شده و بعد از پرداخت, وجه به حساب شما واریز و پیامکی برای طرفین ارسال می شود.</p>
        <p>برای مثال, من در هنگام ثبت‌نام در سایت نام‌کاربری babakfp را برای خودم انتخاب کردم. حال من دارای یک درگاه پرداخت شخصی به آدرس <a class="link" href="https://idpay.ir/babakfp">idpay.ir/babakfp</a> و یک فروشگاه اینترنتی به آدرس <a class="link" href="https://idpay.ir/babakfp/shop">idpay.ir/babakfp/shop</a> هستم که هر کسی با وارد شدن به این صفحه می‌تواند هر مبلغ دلخواه را به من پرداخت کند.</p>
        <p class="italic">درصورت داشتن هرگونه سوال می‌توانید با ما تماس بگیرید و همچنین میتوانید به صفحه پرسش‌های متداول مراجعه کنید.</p>
      </div>
      
      <a class="btn btn-brand text-xs justify-self-start lg:btn-big lg:hover:rotate-3" href="#">ساخت درگاه پرداخت</a>
    </div>
  </div>
</section>

<section class="container px-8 py-12 lg:px-4">
  <div class="flex flex-wrap justify-center gap-4">
    <a class="flex w-28 py-1 bg-gray-800 rounded hover:opacity-90" href="#">
      <img src="/apps/cafebazaar.png" alt="Get the app from Cafe Bazaar">
    </a>
    <a class="flex w-28 py-1 bg-gray-800 rounded hover:opacity-90" href="#">
      <img src="/apps/googleplay.png" alt="Get the app from Google Play">
    </a>
    <a class="flex w-28 py-1 bg-gray-800 rounded hover:opacity-90" href="#">
      <img src="/apps/iapps.png" alt="Get the app from I Apps">
    </a>
    <a class="flex w-28 py-1 bg-gray-800 rounded hover:opacity-90" href="#">
      <img src="/apps/myket.png" alt="Get the app from Myket">
    </a>
    <a class="flex w-28 py-1 bg-gray-800 rounded hover:opacity-90" href="#">
      <img src="/apps/sibapp.png" alt="Get the app from Sib App">
    </a>
  </div>
</section>
