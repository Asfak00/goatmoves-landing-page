<script setup>
import Layout from "../Layouts/Layout.vue";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },{
    id: 1,
    name: "Jennifer Anderson",
    username: "@jennifer.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Really impressed with the attention to detail.",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    role: "Product Designer"
  },
  {
    id: 2,
    name: "James Cron",
    username: "@jamescron",
    testimonial: "I just love how these people build this system. The documentation is crystal clear.",
    avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    role: "Senior Developer"
  },
  {
    id: 3,
    name: "Cameron Di",
    username: "@camerondi",
    testimonial: "A must-have UI kit for building my landing pages. Saved me countless hours of work.",
    avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    role: "UI/UX Designer"
  },
  {
    id: 4,
    name: "Alex Borm",
    username: "@alexborm",
    testimonial: "A must have UI kit for building my landing pages. The components are incredibly flexible.",
    avatar: "https://img.freepik.com/free-photo/young-man-with-beard-wearing-casual-clothes_273609-5938.jpg",
    role: "Frontend Developer"
  },
  {
    id: 5,
    name: "Martin A",
    username: "@martin.a",
    testimonial: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Great work by the team!",
    avatar: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg",
    role: "Product Manager"
  },
  {
    id: 6,
    name: "Christian James",
    username: "@christian.ja",
    testimonial: "I just love how these people build this system. Everything is so well thought out.",
    avatar: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor_273609-16869.jpg",
    role: "Software Engineer"
  }
];

</script>

<template>
  <Layout>
    <section class="pb-[100px]">

      <p class="text-[14px] font-[500] leading-[20px] text-primary_main text-center">Testimonials</p>
      <h4 class="text-[39px] 400px:text-[48px] font-[600] leading-[50px] 400px:leading-[60px] text-heading text-center mt-4">Our Happy Users Say About us</h4>

      <div class='w-full mt-[40px] relative'>

        <div class="w-full h-full bg-gray-100 absolute top-0 left-0 blur-[50px]"></div>

        <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            class="w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-300px),transparent_100%)]"
        >
          <ul x-ref="logos"
              class="flex items-center gap-[30px] slidingLeft">

            <li v-for="testimonial in testimonials" :key="testimonial?.id" class="bg-white flex items-center gap-[14px] p-5 rounded-full w-[450px]">
              <img :alt="testimonial.name" :src="testimonial.avatar" class="w-[52px] h-[52px] rounded-full object-cover"/>
              <div>
                <p class="text-[14px] font-[400[ leading-[30px] text-paragraph">{{testimonial.testimonial}}</p>
              </div>
            </li>

          </ul>
        </div>

        <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            class="w-full inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-300px),transparent_100%)] mt-[30px]"
        >
          <ul x-ref="logos"
              class="flex items-center gap-[30px] slidingRight">

            <li v-for="testimonial in testimonials" :key="testimonial?.id" class="bg-white flex items-center gap-[14px] p-5 rounded-full w-[450px]">
              <img :alt="testimonial.name" :src="testimonial.avatar" class="w-[52px] h-[52px] rounded-full object-cover"/>
              <div>
                <p class="text-[14px] font-[400[ leading-[30px] text-paragraph">{{testimonial.testimonial}}</p>
              </div>
            </li>

          </ul>
        </div>
      </div>

    </section>
  </Layout>
</template>
