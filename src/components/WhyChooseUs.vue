<script setup>
import HomeIcon from "../SvgIcons/HomeIcon.vue";
import {ref} from "vue"
import Layout from "../Layouts/Layout.vue";

const activeTab = ref(1)
</script>

<template>
  <Layout>
    <section class="py-[60px] 400px:py-[100px]">

      <p class="text-[14px] font-[500] leading-[20px] text-primary_main text-center">Why Choose Goat Moves?</p>

      <h4 class="text-[39px] 400px:text-[48px] font-[600] leading-[50px] 400px:leading-[60px] text-heading text-center mt-4">Simplifying Commerce, Amplifying
        Opportunity</h4>

      <div class="flex mt-[40px] flex-col 1040px:flex-row justify-center items-center gap-[50px]">
        <div>
          <img v-if="activeTab == 1" src="https://i.ibb.co.com/WGczgz3/image-2.png" alt="image" class="w-full 400px:w-[480px]"/>
          <img v-if="activeTab == 2"
               src="https://img.freepik.com/free-vector/design-inspiration-concept-illustration_114360-3957.jpg?t=st=1738082533~exp=1738086133~hmac=060c6152db0ed2cdd67018668b16a740ce967c569de05476390ee26eb27b18e7&w=740"
               alt="image" class="w-full 400px:w-[480px]"/>
          <img v-if="activeTab == 3"
               src="https://img.freepik.com/free-vector/teenager-concept-illustration_114360-2249.jpg?t=st=1738082585~exp=1738086185~hmac=15586647b63074797ceb57931d121722ba5761bdf01f745003f83e4318b99ddd&w=740"
               alt="image" class="w-full 400px:w-[480px]"/>
        </div>

        <div class="w-full 400px:w-[80%] 1040px:w-[40%] flex flex-col gap-[30px]">

          <div @click="activeTab = 1"
               :class="activeTab == 1 && 'border-transparent shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)]'"
               class="border border-[#E9E9E9] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Buyers</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">A seamless shopping experience enriched
                with exclusive rewards for every purchase</p>
            </div>
          </div>

          <div @click="activeTab = 2"
               :class="activeTab == 2 && 'border-transparent shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)]'"
               class="border border-[#E9E9E9] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Buyers</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">A seamless shopping experience enriched
                with exclusive rewards for every purchase</p>
            </div>
          </div>

          <div @click="activeTab = 3"
               :class="activeTab == 3 && 'border-transparent shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)]'"
               class="border border-[#E9E9E9] p-[25px] flex items-start cursor-pointer transition-all duration-300 gap-5">

            <div class="p-[13px] bg-primary_main rounded-full w-max">
              <HomeIcon/>
            </div>

            <div>
              <h4 class="text-[24px] font-[600] leading-[35px] text-heading">For Buyers</h4>
              <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-2">A seamless shopping experience enriched
                with exclusive rewards for every purchase</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  </Layout>
</template>
