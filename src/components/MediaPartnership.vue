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

const data = [
  {
    picture: 'https://i.ibb.co.com/L4B7Rv7/image-34.png',
    name: 'Courtney "Big Court" Richardson ll',
    text: 'Formerly known as "Court Dog," a rapper recognized in Kansas City during the late 1990s and signed to No Limit Records, he expanded his influence beyond music into media and entertainment, shaping public conversations through his podcast, Holdin\' Court, which was picked up by Revolt TV in 2022.',
    link:'https://iambigcourt.com/'
  },
  {
    picture: 'https://i.ibb.co.com/G4cNJMHR/image-36.png',
    name: 'Tracy "Ice T" Marrow',
    text: 'Ice-T, a pioneer of gangster rap who introduced hardcore elements into mainstream hip-hop, is also a renowned actor known for his long-running role as Detective OdafinTutuola on NBC\'s Law & Order: SVU since 2000, and an entrepreneur with diverse business ventures',
    link: 'https://en.wikipedia.org/wiki/Ice-T'
  },
  {
    picture: 'https://i.ibb.co.com/N6z3tdkB/photo-5021640088941081446-y-1.png',
    name: 'John Franco',
    text: 'John, a pioneer in AI-driven e-commerce solutions and \n' +
        'the developer of Unielogics, an advanced software optimizing\n' +
        ' market growth for small and medium sellers, combines his\n' +
        ' expertise in business development and marketing to help \n' +
        'entrepreneurs and small businesses scale in the competitive \n' +
        'digital landscape.',
    link: 'https://www.linkedin.com/in/realfrancoamerica/'
  },
  {
    picture: 'https://i.ibb.co.com/20PmKbn5/image-2-1.png',
    name: 'Chris Stumph',
    text: 'Chris, an experienced Vice President of Strategic Partnerships with over 20 years in marketing and advertising, specializes in digital strategy, SEO, sales management, and programmatic advertising, including Connected TV and OTT, with a proven track record of driving digital growth .',
    link: 'https://www.linkedin.com/in/digitalmedia/'
  },
]

</script>

<template>
  <Layout>
    <section id="partnerships" class="pb-[60px] 400px:pb-[100px]">
      <p class="text-[14px] text-center 1040px:text-start font-[500] leading-[20px] text-primary_main">Media, Streaming & Logistics Partnerships</p>
      <h4 class="text-[39px] 400px:text-[48px] text-center 1040px:text-start font-[600] leading-[50px] 400px:leading-[60px] text-heading mt-4 mb-[40px]">Unleashing the Power of Collaboration</h4>

      <div class="relative">
        <Swiper
            v-bind="swiperOptions"
            :centeredSlides="false"
            :pagination="{
            clickable: true,
            el: '.swiper-custom-pagination'
          }"

            :modules="[Autoplay, Pagination, Navigation]"
            class="mb-12"
        >
          <SwiperSlide class="cursor-pointer" v-for="(data, index) in data" :key="index">
            <div class="bg-white w-full 400px:min-w-full 1040px:min-w-[800px] border-r 400px:border-r-none border-b border-t border-l border-gray-200 flex flex-col-reverse 400px:flex-row items-center justify-between">

              <div class="p-[20px] 400px:p-[30px]">
                <h3 class="text-[20px] font-[400] leading-[20px] mt-[5px] text-primary_main">{{data.name}}</h3>
                <p class="text-[14px] font-[400] leading-[20px] text-paragraph mt-[20px] sm:mt-[30px]">{{data.text}}</p>

<!--                <ul class="text-[14px] mt-[10px] font-[400] leading-[20px] text-paragraph list-disc ml-6">-->
<!--                  <li>In 2025, Courtney partnered with legendary actor/rapper Ice T to form OG Network</li>-->
<!--                  <li class="mt-[10px]">In 2025, Courtney partnered with legendary actor/rapper Ice T to form OG Network</li>-->
<!--                </ul>-->

<!--                <a :href="data.link" class="text-[14px] 400px:text-[16px] group font-[600] leading-[24px] text-[#00B5E2] flex items-center gap-3 mt-[30px]">-->
<!--                  Read More-->
<!--                  <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-[24px] group-hover:ml-1.5 transition-all duration-300" />-->
<!--                </a>-->
              </div>

              <div class="w-full 400px:w-[500px]">
                <img :src="data.picture" alt="picture" class="w-full min-w-[300px] h-[300px] sm:h-[365px] object-cover"/>
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