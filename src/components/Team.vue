<script setup>
import {ref} from "vue";
import Layout from "../Layouts/Layout.vue";

const data = [
  {
    image: "https://i.ibb.co.com/DQr4cmJ/366122122-256276297190895-1824857299118351198-n-1.png",
    name: "Rachel Reene",
    position: "CEO",
  },
  {
    image: "https://i.ibb.co.com/z6mcsrK/Image-29.png",
    name: "Rachel Reene",
    position: "CEO",
  },
  {
    image: "https://i.ibb.co.com/k3QKFrM/Image-30.png",
    name: "Rachel Reene",
    position: "CEO",
  },
  {
    image: "https://i.ibb.co.com/cyQ7ztr/Image-31.png",
    name: "Keoki Trask",
    position: "CSO",
  },
  {
    image: "https://i.ibb.co.com/5WGDFJv/Image-32.png",
    name: "Rachel Reene",
    position: "CEO",
  },
  {
    image: "https://i.ibb.co.com/Q8sfbqt/Image-33.png",
    name: "Rachel Reene",
    position: "CEO",
  },
];

const hoveredIndex = ref(null);
</script>

<template>
  <Layout>
    <section class="py-[60px] 400px:py-[100px] text-center 1040px:text-start">
      <p class="text-[14px] font-[500] leading-[20px] text-primary_main">Meet the team</p>
      <h4 class="text-[39px] 400px:text-[48px] font-[600] leading-[50px] 400px:leading-[60px] text-heading mt-4">C -Suite</h4>

      <div class="mt-[48px] flex items-center justify-center 400px:justify-start gap-[25px] flex-wrap">
        <div
            v-for="(person, index) in data"
            :key="index"
            class="cursor-pointer group relative w-max"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
        >
          <img
              alt="avtar/image"
              :src="person.image"
              class="w-[200px] transition-all duration-300"
              :class="[
              hoveredIndex === index ? 'z-[50] scale-[1.15] rotate-[8deg]' : 'z-[10]',
              'group-hover:z-[50]'
            ]"
          />

          <div
              class="bg-white px-4 py-3 absolute bottom-[5px] opacity-0 translate-y-[-20px] invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 ease-in transition-all duration-300 left-[50%] translate-x-[-60%] w-max text-center rotate-[9deg] max-w-[90%]"
          >
            <div
                class="w-[15px] h-[15px] bg-white rotate-[45deg] absolute bottom-[60px] left-[50%] translate-x-[-40%]"></div>
            <h3 class="text-[14px] font-[500] leading-[20px] text-heading">{{ person.name }}</h3>
            <p class="text-[14px] font-[600] leading-[20px] text-[#657790] mt-1">{{ person.position }}</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
