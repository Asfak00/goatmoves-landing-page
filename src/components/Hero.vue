<script setup>
import { Icon } from '@iconify/vue';

</script>

<template>
  <main id="home" class="bg-[#ecf7f8] px-[130px] pt-8 pb-[100px]">

    <div class="max-w-[1400px] mx-auto flex items-center justify-between gap-[30px]">
      <div class="w-[55%]">
        <h1 class="text-[3.8rem] font-[600] leading-[78px] text-heading">Experience the Future of E-Commerce</h1>
        <p class="text-[16px] font-[400] w-[85%] text-justify text-paragraph leading-[24px] mt-3">Immerse yourself in a dynamic and innovative e-commerce platform designed for buyers, sellers, and investors. From physical goods to digital products and services, we bring everything under one seamless roof.</p>

        <button class="py-[10px] mt-[32px] hover:bg-[#757C88]/90 px-[15px] text-[14px] font-[600] text-[#F8FAFC] bg-[#757C88] underline">Join Waitlist</button>

        <div class="mt-[30px] flex items-center gap-[1px]">
          <Icon icon="material-symbols:star" class="text-[24px] text-primary_main"/>
          <Icon icon="material-symbols:star" class="text-[24px] text-primary_main"/>
          <Icon icon="material-symbols:star" class="text-[24px] text-primary_main"/>
          <Icon icon="material-symbols:star" class="text-[24px] text-primary_main"/>
          <Icon icon="material-symbols:star" class="text-[24px] text-primary_main"/>
        </div>
        <p class="text-[14px] font-[400] leading-[21px] text-paragraph mt-2 w-[85%] text-justify">The Chameleon feature is a game-changer. I can list my physical products, services, and digital downloads all in one place. it’s so easy to manage everything!</p>

        <div class="flex items-center gap-[15px] mt-3">
          <img src="https://i.ibb.co.com/rHrsp1H/Ellipse-1.png" alt="avatar" class="w-[50px] h-[50px] rounded-full object-cover"/>

          <div>
            <p class="text-[18px] font-[700] leading-[24px] text-heading">Mike Rathan</p>
            <p class="text-[14px] font-[600] leading-[20px] text-paragraph">Designer</p>
          </div>
        </div>

      </div>

      <div class="w-[40%] relative">

        <img src="https://i.ibb.co.com/4mHVwtZ/Group-35276.png" alt="service/image" class="animated-bounce-one w-[170px] absolute top-[200px] left-[20px]"/>

        <img src="https://i.ibb.co.com/RC0FK6w/Group-35281.png" alt="company/image" class="animated-bounce-two w-[200px] absolute top-[70px] right-0"/>

        <img src="https://i.ibb.co.com/Kb51hT2/Group-35282.png" alt="download/image" class="animated-bounce-one w-[200px] absolute top-[370px] right-[50px]"/>

        <img src="https://i.ibb.co.com/3M6jKmn/Group-35283.png" alt="download/image" class="animated-bounce-two w-[200px] absolute top-[510px] left-[40px]"/>

        <!-- main image -->
        <img src="https://i.ibb.co.com/gRBFnLy/Group-3.png" alt="image" class="w-full"/>

      </div>
    </div>

  </main>
</template>
