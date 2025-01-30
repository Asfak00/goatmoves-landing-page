<script setup>
import {computed} from "vue";
import DiscordIcon from "../SvgIcons/DiscordIcon.vue";
import TwitterIcon from "../SvgIcons/TwitterIcon.vue";
import TelegramIcon from "../SvgIcons/TelegramIcon.vue";
import YoutubeIcon from "../SvgIcons/YoutubeIcon.vue";

const currentYear = computed(() => new Date().getFullYear())

</script>

<template>
  <footer class="py-[60px] 400px:py-[100px] bg-[rgba(2,141,174,0.05)]">

    <div class="mx-auto px-[20px] 400px:px-[40px] 1300px:px-[70px] max-w-[1400px]">

      <div class="flex justify-between flex-col 400px:flex-row flex-wrap gap-y-[50px] 1040px:gap-y-0 1040px:gap-0 gap-[20px]">
        <div class="w-full 400px:max-w-[23%]">
          <img src="https://i.ibb.co.com/cwhd74L/logo-1-1.png" alt="logo/image" class="w-[216px]"/>
          <p class="text-[16px] font-[400] leading-[24px] text-paragraph mt-6">An all-in-one e-commerce platform for
            physical products, digital downloads, and services—designed to simplify and elevate your business.</p>
        </div>

        <div>
          <h4 class="text-[16px] font-[600] hover:text-primary_main transition-all duration-300 leading-[24px] text-heading mb-6">Quick links</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>
              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">About Us</a>
            </li>
            <li>
              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Partnerships</a>
            </li>
            <li>
              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Investors Relations</a>
            </li>
          </ul>

        </div>

        <div>
          <h4 class="text-[16px] font-[600] leading-[24px] text-heading mb-6">Help</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>
              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Privacy Policy</a>
            </li>
            <li>
              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Terms & Conditions</a>
            </li>
          </ul>

        </div>

        <div class="1040px:max-w-[30%]">
          <h4 class="text-[16px] font-[600] leading-[24px] text-heading mb-6">Subscribe to newsletter</h4>
          <p class="text-[16px] font-[400] leading-[24px] text-paragraph">Join our newsletter for exclusive offers, growth
            insights, and e-commerce updates!</p>

          <div class="relative mt-[30px]">
            <input type="email" class="px-4 w-full pr-[140px] py-[14px] bg-white border-l border-t border-b border-[#E9E9E9] outline-none text-heading" placeholder="Enter email address"/>
            <button class="bg-primary_main absolute h-full right-0 py-[15px] px-[30px] text-[14px] font-[600] leading-[20px] text-white hover:bg-primary_main/90">Subscribe</button>
          </div>

        </div>
      </div>

      <div class="mt-[33px] justify-center items-center flex-col 1040px:flex-row gap-y-[20px] 1040px:gap-y-0 flex 1040px:items-center 1040px:justify-between">
        <p class="text-[14px] font-[400] text-center 400px:text-start leading-[24px] text-heading">© Copyright {{ currentYear }}, All Rights Reserved by Goat Moves Inc</p>

        <div class="flex items-center gap-3">
          <p class="text-[14px] font-[400] leading-[24px] text-heading">Follow us on:</p>
          <DiscordIcon class="cursor-pointer"/>
          <TwitterIcon class="cursor-pointer"/>
          <TelegramIcon class="cursor-pointer"/>
          <YoutubeIcon class="cursor-pointer"/>
        </div>
      </div>

    </div>

  </footer>
</template>
