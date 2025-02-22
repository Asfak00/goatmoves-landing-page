<script setup>
import Layout from "../Layouts/Layout.vue";
import {Icon} from "@iconify/vue"
import {ref} from "vue";

const sidebarOpen = ref(false)
</script>

<template>
  <Layout class="1040px:hidden">
    <nav class="flex py-[20px] 400px:py-[25px] items-center justify-between">
      <img src="https://i.ibb.co.com/cwhd74L/logo-1-1.png" alt="logo/image" class="w-[160px] 400px:w-[200px]"/>

      <Icon @click="sidebarOpen = !sidebarOpen" icon="material-symbols:menu" class="text-gray-600 text-[2rem] 400px:text-[2.5rem]" />

      <Transition
          enter-active-class="transition-transform duration-300 ease-in-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300 ease-in-out"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
      >
        <div v-if="sidebarOpen" class="w-[90%] 400px:w-[50%] shadow-lg bg-white fixed right-0 top-0 py-6 z-[10000000000] h-screen">

          <div class="flex items-end justify-end px-6 mb-6">
            <Icon @click="sidebarOpen = false" icon="material-symbols:close" class="text-[24px] text-gray-700" />
          </div>

          <ul class="flex flex-col items-start px-10 gap-6">
            <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#about-us">About us</a></li>
<!--            <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#">Marketplace</a></li>-->
            <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#features">Features</a></li>
            <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#partnerships">Partnerships</a></li>
            <li class="text-[14px] font-[500] hover:text-heading text-paragraph"><a href="#investor-relations">Investor Relations</a></li>
          </ul>

          <div class="flex flex-col px-10 mt-6 gap-6">
            <button
                class="py-[10px] w-max hover:bg-[#757C88]/90 px-[15px] text-[14px] font-[600] text-[#F8FAFC] bg-[#757C88] underline">
              Join Waitlist
            </button>
            <a href="https://netcapital.com/companies/goatmoves" target="_blank"
                class="py-[10px] w-max px-[20px] hover:bg-primary_main/90 text-[14px] font-[600] text-[#F8FAFC] bg-primary_main underline">
              Invest Now
            </a>
          </div>
        </div>
      </Transition>

    </nav>
  </Layout>
</template>
