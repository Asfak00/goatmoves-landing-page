<script setup>
import {ref} from "vue";
import axios from "axios";

const email = ref('');

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiY2NlNGMyMjRiYjVmOWQ5OTg2NzFmODE4ZGU3Y2E5MTdkNTgxOTE1OWI0MWZjYjEwZTE4Y2VhOGNmY2QwOWU4NjI1NDUxMTBiOTNiN2ZiNmQiLCJpYXQiOjE3NDA1ODk3MjAuNzc0MDMzLCJuYmYiOjE3NDA1ODk3MjAuNzc0MDM2LCJleHAiOjQ4OTYyNjMzMjAuNzY5MzA0LCJzdWIiOiI5ODU3MjkiLCJzY29wZXMiOltdfQ.DgqYT8QuZ4q5E-3Bv8Zu-zuR93UrGi_3Hdo1v2BUXkqJlebB5dvxj3WeQWd-A7eAMveJ5ztb0V5F_6CG_sw3bJYmwD-8GeTvHCXJPItVWekQE9PAhgMQQpDf_mzi_NfWQF82auKT0NFduFXVKTkw_5xdB-YWiOa-o-7TLzEscjbgRnvTq2TnErtEqN6OhoNK8_sYEwGyLsLk2sUUZ7rDF2uREO2WlpZefoZFfJrYZ_Hz4XFCwfaBTwc98tW3HH80uVEidgWWXB5FcaUc90xcfgMeCM_Q15A1jaMIbtT7oKlp34IlnDfDdzv-7Om2MtbQdpBNhTLVttlzQIovrPO2RI6-_ioBRNY422NZE3IOKBWPoQUMaxvkbPKUDcFq5vAr8lXpIZCO1uuZpPPIVy6P4WSyxafgTI0DIZ5cOqQf8W_o3uuoS80QhtW4OLqxFZ1FoohuJa2L_7yHoJkIwQnapgyV8w4cKBoDi2qR4LWek4JucW7eCBhgeKVEhhnKWts5K_j32bq6B8LQnOM4NSLDTdsDWOr6jba1HKS1LdDWTkjVMd91Gh0vinKxr7aNxYDXxKI5L8ApvrE2U3-3fLBmtA_B1cDl4FSzghKUMplCR_oFRfDZX9DSCP6cFu21hObENxirPdNfOI3dLvUfuIiegH28otSby2s69U5AZab-GQU';

async function addToWaitlist(e) {
  e.preventDefault();
  try {
    const response = await axios.post(
        "https://connect.mailerlite.com/api/subscribers",
        {
          email: email.value,
          groups: ["147421182589666407"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
    );
    alert("Waitlist subscription successful!");
    email.value = '';
  } catch (error) {
    console.error("Subscription failed:", error.response?.data || error);
  }
}

</script>

<template>
  <main id="home" class="bg-[#ecf7f8] pt-8 pb-[70px] 400px:pb-[100px]">

    <div
        class="max-w-[1400px] 1660px:px-0 400px:pt-10 1040px:pt-0 mx-auto px-[20px] 400px:px-[40px] 1300px:px-[70px] 1040px:flex-row flex-col flex 1040px:items-center 1040px:justify-between gap-[60px] 400px:gap-[90px] 1040px:gap-[30px]">
      <div class="w-full 1040px:w-[55%] text-center 1040px:text-start ">
        <h1 class="text-[2.5rem] 400px:text-[3rem] 1040px:text-[3.8rem] font-[600] leading-[50px] 400px:leading-[60px] 1040px:leading-[78px] text-heading">
          Welcome to the Virtual Village</h1>

        <p class="text-[16px] 1040px:text-justify font-[400] mx-auto 1040px:mx-0 w-full 400px:w-[85%] leading-[24px] mt-3">
          Welcome to the Virtual Village: A New Era of Digital Connection & Commerce. <span class="text-primary_main">We are preparing SMBs for Smart City Integration.</span>
        </p>

        <p class="text-[16px] 1040px:text-justify font-[400] mx-auto 1040px:mx-0 w-full 400px:w-[85%] leading-[24px] mt-3">
          GMi operates as a robust centralized and hybrid platform, seamlessly integrating a global digital presence
          with brick-and-mortar accessibility.</p>

        <h4 class="text-[36px] font-[600] leading-[46px] my-8">Join 8,000+ Netizens</h4>

        <p class="text-[16px] 1040px:text-justify font-[400] mx-auto 1040px:mx-0 w-full 400px:w-[85%] leading-[24px] mt-3">
          Over 8,000+ Netizens are already on the waitlist, securing early access to a groundbreaking ecosystem designed
          for the future.</p>

        <p class="text-[16px] 1040px:text-justify font-[400] mx-auto 1040px:mx-0 w-full 400px:w-[85%] leading-[24px] mt-3">
          Get in now and be among the first to experience exclusive onboarding, cutting-edge tools, and the power of a
          truly connected digital village.</p>

        <form @submit="addToWaitlist" class="mt-8 relative w-full 400px:w-max">
          <input type="email" v-model="email" required placeholder="Enter email address"
                 class="pl-4 pr-[80px] 400px:pr-[120px] py-2.5 bg-white outline-none border-none"/>
          <button type="submit" class="px-4 h-full absolute top-0 right-0 text-white bg-primary_main">Join Waitlist!
          </button>
        </form>

      </div>

      <div class="w-full 400px:w-[60%] mx-auto 1040px:mx-0 1040px:w-[50%]">

        <!-- main image -->
        <img src="https://i.ibb.co.com/p6nVw8BV/image-1.png" alt="image" class="w-full"/>

      </div>
    </div>

  </main>
</template>
