<script setup>
import GoatmovesIcon from "../SvgIcons/GoatmovesIcon.vue";
import {Icon} from "@iconify/vue"
import BadgeIcon from "../SvgIcons/BadgeIcon.vue";
import DeliveryIcon from "../SvgIcons/DeliveryIcon.vue";

</script>

<template>
  <section class="bg-[#ecf7f8] w-full py-[60px] 400px:py-[100px]">

   <div class="mx-auto max-w-[1400px] px-[20px] 1660px:px-0 400px:px-[40px] 1300px:px-[70px]">
     <p class="text-[14px] font-[500] leading-[20px] text-primary_main text-center">What We Do</p>

     <h4 class="text-[39px] 400px:text-[48px] font-[600] leading-[50px] 400px:leading-[60px] text-heading text-center mt-4">Welcome to the Ultimate Digital Destination</h4>

     <div class="grid grid-cols-1 400px:grid-cols-2 1040px:grid-cols-3 mt-[40px] gap-[30px]">

       <div class="border border-[#C9C9C9] cursor-pointer hover:bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] py-[40px] px-[30px]">
         <GoatmovesIcon/>
         <h4 class="text-[24px] mt-[30px] font-[600] leading-[35px] text-heading mb-2">The Chameleon Feature</h4>
         <p class="text-[16px] font-[400] leading-[24px] text-paragraph">Seamlessly list and manage physical products, digital downloads, and services—all in one unified marketplace</p>

         <button class="text-[16px] group font-[600] leading-[24px] text-primary_main flex items-center gap-3 mt-[25px]">
           Shop Now
           <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-[24px] group-hover:ml-1.5 transition-all duration-300" />
         </button>
       </div>

       <div class="border border-[#C9C9C9] cursor-pointer hover:bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] py-[40px] px-[30px]">
         <BadgeIcon/>
         <h4 class="text-[24px] mt-[30px] font-[600] leading-[35px] text-heading mb-2">Exclusive Rewards Programs </h4>
         <p class="text-[16px] font-[400] leading-[24px] text-paragraph">Elevate your experience with unique incentives that benefit both buyers and sellers, creating unmatched value.</p>

         <button class="text-[16px] group font-[600] leading-[24px] text-primary_main flex items-center gap-3 mt-[25px]">
           Explore
           <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-[24px] group-hover:ml-1.5 transition-all duration-300" />
         </button>
       </div>

       <div class="border border-[#C9C9C9] cursor-pointer hover:bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0px_4px_64px_0px_rgba(35,40,105,0.08)] py-[40px] px-[30px]">
         <DeliveryIcon/>
         <h4 class="text-[24px] mt-[30px] font-[600] leading-[35px] text-heading mb-2">Logistics by UnieLogics</h4>
         <p class="text-[16px] font-[400] leading-[24px] text-paragraph">Our advanced logistics solution ensures hassle-free shipping and delivery, making commerce smoother and more reliable than ever.</p>

         <button class="text-[16px] group font-[600] leading-[24px] text-primary_main flex items-center gap-3 mt-[25px]">
           Explore
           <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-[24px] group-hover:ml-1.5 transition-all duration-300" />
         </button>
       </div>

     </div>
   </div>

  </section>
</template>
