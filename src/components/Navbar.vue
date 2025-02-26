<script setup>

import Layout from "../Layouts/Layout.vue";
</script>

<template>
  <Layout class="hidden 1040px:block">
    <nav class="flex items-center justify-between py-[25px]">
      <img src="https://i.ibb.co.com/cwhd74L/logo-1-1.png" alt="logo/image" class="w-[216px]"/>

      <div class="flex items-center gap-4">
        <ul class="flex items-center gap-6">
          <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#about-us">About us</a></li>
<!--          <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#">Marketplace</a></li>-->
          <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#features">Features</a></li>
          <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#partnerships">Partnerships</a></li>
          <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#investor-relations">Investor Relations</a></li>
        </ul>

<!--        <button-->
<!--            class="py-[10px] hover:bg-[#757C88]/90 px-[15px] text-[14px] font-[600] text-[#F8FAFC] bg-[#757C88] underline ml-2">-->
<!--          Join Waitlist-->
<!--        </button>-->
        <a href="https://netcapital.com/companies/goatmoves" target="_blank"
            class="py-[10px] px-[15px] hover:bg-primary_main/90 text-[14px] font-[600] text-[#F8FAFC] bg-primary_main underline">
          Invest Now
        </a>
      </div>
    </nav>
  </Layout>
</template>
