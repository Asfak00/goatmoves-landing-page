<script setup>
import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Layout from "../Layouts/Layout.vue";

// Swiper breakpoints configuration
const swiperOptions = {
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
    1280: {
      spaceBetween: 60,
      slidesPerView: 1.5,
    }
  }
};
</script>

<template>
  <Layout>
    <section class="pb-[60px] 400px:pb-[100px]">
      <p class="text-[14px] text-center 1040px:text-start font-[500] leading-[20px] text-primary_main">Media & Streaming Partnerships</p>
      <h4 class="text-[39px] 400px:text-[48px] text-center 1040px:text-start font-[600] leading-[50px] 400px:leading-[60px] text-heading mt-4 mb-[40px]">Unleashing the Power of Collaboration</h4>

      <div class="relative">
        <Swiper
            v-bind="swiperOptions"
            :centeredSlides="false"
            :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
          }"
            :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
            :modules="[Autoplay, Pagination, Navigation]"
            class="mb-12"
        >
          <SwiperSlide v-for="(_, index) in 4" :key="index">
            <div class="bg-white w-full 400px:min-w-full 1040px:min-w-[800px] border-r 400px:border-r-none border-b border-t border-l border-gray-200 flex flex-col-reverse 400px:flex-row items-center justify-between">

              <div class="p-[20px] 400px:p-[30px]">
                <h3 class="text-[20px] sm:text-[24px] font-[600] leading-[30px] sm:leading-[35px] text-heading">Courtney Richardson II</h3>
                <p class="text-[14px] font-[400] leading-[20px] mt-[5px] text-paragraph">Actor · Producer · Additional Crew</p>
                <p class="text-[14px] font-[400] leading-[20px] text-paragraph mt-[20px] sm:mt-[30px]">Low platform fees and versatile listing options to maximize earnings and minimize hassle.</p>

                <ul class="text-[14px] mt-[10px] font-[400] leading-[20px] text-paragraph list-disc ml-6">
                  <li>In 2025, Courtney partnered with legendary actor/rapper Ice T to form OG Network</li>
                  <li class="mt-[10px]">In 2025, Courtney partnered with legendary actor/rapper Ice T to form OG Network</li>
                </ul>

                <button class="text-[14px] 400px:text-[16px] group font-[600] leading-[24px] text-[#00B5E2] flex items-center gap-3 mt-[30px]">
                  Read More
                  <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-[24px] group-hover:ml-1.5 transition-all duration-300" />
                </button>
              </div>

              <div class="w-full 400px:w-[500px]">
                <img src="https://i.ibb.co.com/L4B7Rv7/image-34.png" alt="picture" class="w-full h-[300px] sm:h-[365px] object-cover"/>
              </div>

            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom pagination container -->
        <div class="swiper-custom-pagination flex justify-center gap-2"></div>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
:deep(.swiper-custom-pagination .swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #D9D9D9;
  opacity: 1;
}

:deep(.swiper-custom-pagination .swiper-pagination-bullet-active) {
  background: #00B5E2;
}

:deep(.swiper-wrapper) {
  margin-left: 0;
}
</style>