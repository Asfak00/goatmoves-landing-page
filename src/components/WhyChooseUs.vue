<script setup>
import HomeIcon from "../SvgIcons/HomeIcon.vue";
import {ref} from "vue"
import Layout from "../Layouts/Layout.vue";

const activeTab = ref(1)
</script>

<template>
  <Layout>
    <section id="features" class="pb-[60px] 400px:pb-[100px]">

      <h4 class="text-[39px] 400px:text-[48px] font-[600] leading-[50px] 400px:leading-[60px] text-heading text-center mt-4">Why <span class="text-primary_main">GMi?</span></h4>

      <div class="flex mt-[40px] flex-col 1040px:flex-row justify-center items-center gap-[50px]">

        <div class="w-full 400px:w-[80%] 1040px:w-[40%] flex flex-col gap-[30px]">

          <div class="border hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] border-[#E9E9E9] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Sellers</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">10% platform fees and versatile listing options to maximize earnings and minimize hassle. Tiered packages for logistics, marketing, analytics, IP monetization and more!</p>
            </div>
          </div>

          <div class="border border-[#E9E9E9] hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Buyers</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">A seamlessly curated shopping and booking experience, enhanced with exclusive rewards for every purchase and review</p>
            </div>
          </div>

          <div class="border border-[#E9E9E9] hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Investors</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">High-growth potential backed by patent-pending technology. Total addressable market narrows to <b>80m - 100M globally.</b>
                <span class="text-primary_main">GMi’s</span> unique platform consolidates these offerings, capturing a substantial portion of this tech-enabled segment.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  </Layout>
</template>
