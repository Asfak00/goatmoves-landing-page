<script setup>
import {computed, ref} from "vue";
import YoutubeIcon from "../SvgIcons/YoutubeIcon.vue";
import FacebookIcon from "../SvgIcons/FacebookIcon.vue";
import Linkedln from "../SvgIcons/Linkedln.vue";
import InstaIcon from "../SvgIcons/InstaIcon.vue";
import axios from "axios";

const currentYear = computed(() => new Date().getFullYear())

const email = ref('');

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2NlNGMyMjRiYjVmOWQ5OTg2NzFmODE4ZGU3Y2E5MTdkNTgxOTE1OWI0MWZjYjEwZTE4Y2VhOGNmY2QwOWU4NjI1NDUxMTBiOTNiN2ZiNmQiLCJpYXQiOjE3NDA1ODk3MjAuNzc0MDMzLCJuYmYiOjE3NDA1ODk3MjAuNzc0MDM2LCJleHAiOjQ4OTYyNjMzMjAuNzY5MzA0LCJzdWIiOiI5ODU3MjkiLCJzY29wZXMiOltdfQ.DgqYT8QuZ4q5E-3Bv8Zu-zuR93UrGi_3Hdo1v2BUXkqJlebB5dvxj3WeQWd-A7eAMveJ5ztb0V5F_6CG_sw3bJYmwD-8GeTvHCXJPItVWekQE9PAhgMQQpDf_mzi_NfWQF82auKT0NFduFXVKTkw_5xdB-YWiOa-o-7TLzEscjbgRnvTq2TnErtEqN6OhoNK8_sYEwGyLsLk2sUUZ7rDF2uREO2WlpZefoZFfJrYZ_Hz4XFCwfaBTwc98tW3HH80uVEidgWWXB5FcaUc90xcfgMeCM_Q15A1jaMIbtT7oKlp34IlnDfDdzv-7Om2MtbQdpBNhTLVttlzQIovrPO2RI6-_ioBRNY422NZE3IOKBWPoQUMaxvkbPKUDcFq5vAr8lXpIZCO1uuZpPPIVy6P4WSyxafgTI0DIZ5cOqQf8W_o3uuoS80QhtW4OLqxFZ1FoohuJa2L_7yHoJkIwQnapgyV8w4cKBoDi2qR4LWek4JucW7eCBhgeKVEhhnKWts5K_j32bq6B8LQnOM4NSLDTdsDWOr6jba1HKS1LdDWTkjVMd91Gh0vinKxr7aNxYDXxKI5L8ApvrE2U3-3fLBmtA_B1cDl4FSzghKUMplCR_oFRfDZX9DSCP6cFu21hObENxirPdNfOI3dLvUfuIiegH28otSby2s69U5AZab-GQU';

async function subscribe(e) {
  e.preventDefault();
  try {
    const response = await axios.post(
        "https://connect.mailerlite.com/api/subscribers",
        {
          email: email.value,
          groups: ["147422041196201382"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
    );
    alert("Subscribed successfully!");
    email.value = '';
  } catch (error) {
    console.error("Subscription failed:", error.response?.data || error);
  }
}

</script>

<template>
  <footer class="py-[60px] mt-12 1040px:mt-0 400px:py-[100px] bg-[rgba(2,141,174,0.05)]">

    <div class="mx-auto px-[20px] 400px:px-[40px] 1300px:px-[70px] max-w-[1400px]">

      <div class="flex justify-between flex-col 400px:flex-row flex-wrap gap-y-[50px] 1040px:gap-y-0 1040px:gap-0 gap-[20px]">
        <div class="w-full 400px:max-w-[23%]">
          <img src="https://i.ibb.co.com/cwhd74L/logo-1-1.png" alt="logo/image" class="w-[216px]"/>
        </div>

        <div>
          <h4 class="text-[16px] font-[600] leading-[24px] text-heading mb-6">Quick links</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>
              <a href="#about-us" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">About Us</a>
            </li>
            <li>
              <a href="#partnerships" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Partnerships</a>
            </li>
            <li>
              <a href="#investor-relations" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Investors Relations</a>
            </li>
          </ul>

        </div>

<!--        <div>-->
<!--          <h4 class="text-[16px] font-[600] leading-[24px] text-heading mb-6">Help</h4>-->
<!--          <ul class="flex flex-col gap-[10px]">-->
<!--            <li>-->
<!--              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Privacy Policy</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="" class="text-[16px] hover:text-primary_main transition-all duration-300 font-[400] leading-[24px] text-paragraph">Terms & Conditions</a>-->
<!--            </li>-->
<!--          </ul>-->

<!--        </div>-->

        <div class="1040px:max-w-[30%]">
          <h4 class="text-[16px] font-[600] leading-[24px] text-heading mb-6">Subscribe to newsletter</h4>
          <p class="text-[16px] font-[400] leading-[24px] text-paragraph">Join our newsletter for exclusive offers, growth insights, and <span class="text-primary_main">GMi</span> updates!</p>

          <form @submit="subscribe" class="relative mt-[30px]">
            <input v-model="email" required type="email" class="px-4 w-full pr-[140px] py-[14px] bg-white border-l border-t border-b border-[#E9E9E9] outline-none text-heading" placeholder="Enter email address"/>
            <button type="submit" class="bg-primary_main absolute h-full right-0 py-[15px] px-[30px] text-[14px] font-[600] leading-[20px] text-white hover:bg-primary_main/90">Subscribe</button>
          </form>

        </div>
      </div>

      <div class="mt-[33px] justify-center items-center flex-col 1040px:flex-row gap-y-[20px] 1040px:gap-y-0 flex 1040px:items-center 1040px:justify-between">
        <p class="text-[14px] font-[400] text-center 400px:text-start leading-[24px] text-heading">© Copyright {{ currentYear }}, All Rights Reserved by Goat Moves Inc</p>

        <div class="flex items-center gap-3">
          <p class="text-[14px] font-[400] leading-[24px] text-heading">Follow us on:</p>
          <FacebookIcon class="cursor-pointer fill-[transparent] stroke-[#657791]"/>
          <Linkedln class="cursor-pointer fill-[transparent] stroke-[#657791]"/>
          <InstaIcon class="cursor-pointer fill-[transparent] stroke-[#657791]"/>
          <YoutubeIcon class="cursor-pointer fill-[transparent] stroke-[#657791]"/>
        </div>
      </div>

    </div>

  </footer>
</template>
