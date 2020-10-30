<template>
  <div class="text-center secondary details" v-if="eventDetails.date">
    <h2>{{ eventDetails.title }}</h2>
    <div class="titleImage_wrapper d-flex primary px-3">
      <img class="titleImage" src="~/assets/isometric.jpg" />
    </div>
    <div class="px-3">
      <p class="mb-0">{{ eventDetails.date.toDate() }}</p>
      <p class="mb-0">Event Cost</p>
      <p class="mb-0">Duration</p>
      <p class="mb-0">Language: English</p>
      <p class="mb-0">Time Left for Event</p>
      <div class="py-3">
        <v-icon class="px-1" medium :color="`${logo.color}`" v-for="(logo, item) in logos" :key="item">{{`mdi-${logo.name}`}}</v-icon>
        <v-icon medium class="px-1"> mdi-heart-outline </v-icon>
      </div>
      <button class="accent joinButton white--text my-4 py-1 px-md-8">
        JOIN
      </button>
    </div>
    <div class="container px-3 mb-2">
      <v-row no-gutters v-for="(item, index) in data" :key="index" class="mt-8">
        <v-col cols="12" sm="4">
          <div class="text-sm-left">
            <b>{{ item.question }}</b>
            <div v-if="index == 2">
              <p class="mb-0">{{ eventDetails.host }}</p>
              <img :src="image" width="130px" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="8">
          <div class="text-left">
            <p v-if="item.answer">{{ item.answer }}</p>
            <div v-if="item.question == 'Who else you meet'">
              <img
                v-for="n in 8"
                :key="n"
                :src="image"
                class="ml-3 AttendeeImage"
              />
            </div>
            <div class="container" v-if="item.question == 'Conversation'">
              <v-row v-for="n in 3" :key="n" no-gutters>
                <v-col cols="3" class="text-left">
                  <img :src="image" class="ConversationImage" />
                </v-col>
                <v-col cols="9" class="text-left"
                  >To create portfolio for your project, i just need screenshots
                  of important pages in proper resolutions.</v-col
                >
              </v-row>
            </div>
            <div class="container pa-0" v-if="item.question == 'Reviews'">
              <v-row v-for="(review, index) in reviews" :key="index" no-gutters>
                <v-col cols="12">
                  <div class="d-flex text-left reviewWrapper">
                    <v-icon class="profileIcon">mdi-account-circle</v-icon>
                    <v-card-text class="py-0">
                      <div class="mt-1 reviewData">
                        <span> {{ review.name }} - </span>
                        <span>{{ review.date }}</span>
                      </div>
                      <p>
                        <v-icon
                          v-for="n in 5"
                          :key="n"
                          class="reviewStar"
                          color="green darken-3"
                          >mdi-star</v-icon
                        >
                      </p>
                      <p class="reviewComment">{{ review.comment }}</p>
                    </v-card-text>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div
              v-if="
                item.question == 'Conversation' || item.question == 'Reviews'
              "
            >
              <button
                v-if="item.question == 'Conversation'"
                class="accent joinButton white--text py-1 px-md-8"
              >
                POST MESSAGE
              </button>
              <button
                v-if="item.question == 'Reviews'"
                class="accent joinButton white--text py-1 px-md-8"
              >
                POST YOUR REVIEW
              </button>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  layout: "default",
  data() {
    return {
      image: require("~/assets/isometric.jpg"),
      logos: [
        { name: "facebook", color: "blue darken-2" },
        { name: "twitter", color: "blue" },
        { name: "message-text", color: "yellow darken-2" },
        { name: "telegram", color: "blue-grey darken-2" },
        { name: "facebook-messenger", color: "blue darken-2" },
        { name: "whatsapp", color: "green darken-2" },
      ],
      data: [
        {
          question: "What we'll do together",
          answer:
            "Once done, upload them to your company google drive folder and share it with me. If you have hi res designs from like figma, pdf, phoshop, xd etc upload those as well in the drive folder.Open inspect element in the chrome and go the response mode option.From there select responsive in the size and put in the size as 1280x720 px for desktop and then next to screen size there is a menu option. Click on it to see capture full screenshot",
        },
        {
          question: "What to bring",
          answer:
            "Once done, upload them to your company google drive folder and share it with me. If you have hi res designs from like figma, pdf, phoshop, xd etc upload those as well in the drive folder.Open inspect element in the chrome and go the response mode option.From there select responsive in the size and put in the size as 1280x720 px for desktop and then next to screen size there is a menu option. Click on it to see capture full screenshot",
        },
        { question: "Your host", answer: "About host" },
        { question: "Who else you meet" },
        { question: "Conversation" },
        { question: "Reviews" },
        { question: "Things to keep in mind", answer: "PolicyURL" },
      ],
      reviews: [
        {
          image: require("~/assets/isometric.jpg"),
          name: "Maria Jose",
          date: "June 2020",
          comment:
            "Once done, upload them to your company google drive folder and share it with me. If you have hi res designs from like figma, pdf, phoshop, xd etc upload those as well in the drive folder.Open inspect element in the chrome and go the response mode option.From there select responsive in the size and put in the size as 1280x720 px for desktop and then next to screen size there is a menu option. Click on it to see capture full screenshot",
        },
        {
          image: require("~/assets/isometric.jpg"),
          name: "John",
          date: "June 2020",
          comment:
            "Once done, upload them to your company google drive folder and share it with me.",
        },
      ],
    };
  },
  async mounted() {
    await this.fetchEventDetails(this.$route.params);
  },
  methods: {
    ...mapActions("eventdetails", ["fetchEventDetails"]),
  },
  computed: {
    ...mapGetters("eventdetails", ["eventDetails"]),
  },
};
</script>

<style scoped>
.details {
  padding-top: 30px;
  max-width: 1050px;
}
.joinButton {
  width: 100%;
}
.question,
.answer {
  min-height: 350px;
  max-height: 600px;
}
.titleImage_wrapper {
  justify-content: center;
  width: 100vw;
  height: 200px;
}
.titleImage {
  object-fit: contain;
  width: 100%;
}
.AttendeeImage {
  width: 142px;
}
.ConversationImage {
  width: 50px;
}
.reviewWrapper {
  max-height: 150px;
}
.reviewData {
  font-size: 13px;
  line-height: initial;
}
.reviewStar {
  font-size: 18px;
}
.reviewComment {
  line-height: 1.5em;
  height: 4.5em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
}
.profileIcon {
  align-items: initial;
  font-size: 50px;
  padding: 0px;
}
@media screen and (min-width: 640px) {
  .ConversationImage {
    width: 80px;
  }
  .AttendeeImage {
    width: 150px;
    text-align: left;
  }
}
@media screen and (min-width: 1100px) {
  .titleImage_wrapper {
    width: 100%;
  }
}
</style>