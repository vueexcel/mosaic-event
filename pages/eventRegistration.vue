<template>
  <div class="text-center secondary eventRegistration px-sm-10 px-3">
    <v-snackbar v-model="snackbar" :timeout="timeout" :top="top" :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
    <div class="d-flex title">
      <v-divider class="mt-4 accent"></v-divider>
      <h3 class="px-md-4 px-1 accent--text text-uppercase">Create An Event</h3>
      <v-divider class="mt-4 accent"></v-divider>
    </div>
    <v-form class="text-left">
      <p class="mt-7 mb-2">Event Title</p>
      <input class="rounded" v-model="form.title" required />
      <p class="mt-7 mb-2">Event Description</p>
      <textarea class="rounded" v-model="form.description" required></textarea>
      <p class="mt-7 mb-2">Event Image</p>
      <div class="d-flex flex-column">
        <div class="preview d-flex primary px-3 rounded">
          <img class="preview_image" v-if="this.form.url" :src="form.url" />
        </div>
        <input
          class="fileInput d-none"
          ref="uploadImg"
          type="file"
          accept="image/*"
          @change="onChange"
        />
        <button
          @click.prevent="$refs.uploadImg.click()"
          class="accent white--text pa-4 rounded"
        >
          UPLOAD IMAGE
        </button>
      </div>
      <p class="mt-9 mb-0">Event Category</p>
      <div class="container">
        <v-item-group v-model="category_selected" multiple>
          <v-row no-gutters>
            <v-col
              class="pa-2"
              cols="6"
              sm="4"
              md="3"
              v-for="n in 8"
              :key="n"
            >
              <v-item v-slot="{ active, toggle }">
                <v-img
                  :src="image"
                  height="120"
                  class="text-left pa-1"
                  @click="toggle"
                >
                  <v-btn icon>
                    <v-icon size="30">
                      {{ active ? "mdi-check" : "mdi-circle-outline" }}
                    </v-icon>
                  </v-btn>
                </v-img>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </div>
      <div class="d-sm-flex justify-space-between">
        <div class="pa-sm-1 pl-sm-0">
          <p class="mt-3 mt-sm-5 mb-1">Event Date</p>
          <v-dialog
            ref="dialog_date"
            v-model="modal"
            :return-value.sync="form.date"
            persistent
            width="280px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.date"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="form.date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog_date.save(form.date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
        <div class="pa-sm-1">
          <p class="mt-sm-5 mb-1">Start Time</p>
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="form.start_time"
            persistent
            width="280px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.start_time"
                prepend-inner-icon="mdi-clock-time-four-outline"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker v-if="modal2" v-model="form.start_time" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(form.start_time)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </div>
        <div class="pa-sm-1">
          <p class="mt-sm-5 mb-1">Duration</p>
          <div class="d-flex">
            <div class="select_wrapper">
              <v-select
                v-model="form.durationtype"
                :items="durationtypes"
                label="Duration Type"
                class="mr-1"
                outlined
              ></v-select>
            </div>
            <div class="select_wrapper">
              <v-select
                v-model="form.durationperiod"
                :items="period"
                label="Duration Period"
                class="ml-1"
                outlined
              ></v-select>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-1 mb-1">Ticket Price</p>
      <div class="d-flex" style="height: 56px">
        <div class="select_wrapper">
          <v-select
            v-model="form.ticket.currency"
            :items="currency"
            label="Currency"
            outlined
          ></v-select>
        </div>
        <input
          class="rounded"
          v-model="form.ticket.price"
          placeholder="Please enter digits"
          type="number"
        />
      </div>
      <p class="mt-7 mb-0">Languages spoken during event</p>
      <div class="container pa-0">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="6"
            md="3"
            v-for="(language, n) in languages"
            :key="n"
          >
            <a class="d-flex align-center justify-center">
              <v-checkbox color="error" v-model="form.selectedLanguages" :value="language">
                <template v-slot:label>
                  <img width="80px" :src="require(`~/assets/languages/${language}.png`)" class="pa-1" />
                  <span class="pl-2">{{ language }} </span>
                </template>
              </v-checkbox>
            </a>
          </v-col>
        </v-row>
      </div>
      <p class="mt-3 mt-sm-5 mb-3">
        What do attendees need to do before the event? Any preparation,
        downloads or items to bring?
      </p>
      <input class="rounded" type="text" v-model="form.attendee_preparation" />
      <p class="mt-7 mt-sm-9 mb-2">Attendees</p>
      <input
        class="rounded"
        type="number"
        placeholder="No. of attendees"
        v-model="form.no_attendees"
      />
      <p class="mt-7 mt-sm-9 mb-2">Attendees can invite others</p>
      <v-select
        v-model="form.attendee_inviting"
        :items="options"
        outlined
      ></v-select>
      <p class="mt-2 mb-2">
        Display name/pic of registered attendees on event listing?
      </p>
      <v-select
        v-model="form.see_attendees_info"
        :items="options"
        outlined
      ></v-select>
      <p class="mt-1 mb-2">Co-hosts</p>
      <input type="text" class="rounded" v-model="form.co_host" />
      <p class="mt-8 mb-2">Event Keywords</p>
      <input
        class="rounded"
        placeholder="Set your keywords"
        type="text"
        v-model="form.event_keywords"
      />
      <p class="mt-8 mb-2">
        Any other question you would like to ask attendees
      </p>
      <textarea v-model="form.optional_question" class="rounded"></textarea>
    </v-form>
    <button
      class="accent submitButton white--text rounded-lg my-8 py-2 px-md-8"
      @click.prevent="submitForm"
    >
      JOIN
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  layout: "default",
  // middleware: "auth",
  data() {
    return {
      image: require("~/assets/isometric.jpg"),
      snackbar: false,
      top: "top",
      color: "error",
      timeout: 5000,
      priceFlag: false,
      category_selected: [],
      form: {
        title: "",
        description: "",
        url: null,
        file: null,
        category_selected: [],
        date: "",
        start_time: "",
        durationtype: "",
        durationperiod: "",
        ticket: {
          currency: "",
          price: "",
        },
        selectedLanguages: [],
        attendee_preparation: "",
        no_attendees: "",
        attendee_inviting: "",
        see_attendees_info: "",
        co_host: "",
        event_keywords: "",
        optional_question: "",
      },
      modal: false,
      modal2: false,
      currency: ["USD", "INR"],
      languages: [
        "English",
        "Spanish",
        "German",
        "Italian",
        "French",
        "Hindi",
        "Mandarin",
        "Russian",
      ],
      options: ["Yes", "No"],
      durationtypes: ["weekly", "hourly"],
      durationperiod: [],
    };
  },
  computed: {
    ...mapState("errorMessage", {
      text: (state) => state.handleMessage,
    }),
    period() {
      if (this.form.durationtype) {
        this.durationperiod = [];
        if (this.form.durationtype == "weekly") {
          for (let index = 1; index <= 7; index++) {
            if (index == 1) {
              this.durationperiod.push(`${index} day`);
            } else {
              this.durationperiod.push(`${index} days`);
            }
          }
        } else {
          for (let index = 1; index <= 23; index++) {
            if (index == 1) {
              this.durationperiod.push(`${index} hour`);
            } else {
              this.durationperiod.push(`${index} hours`);
            }
          }
        }
        return this.durationperiod;
      } else {
        return this.durationperiod;
      }
    },
  },
  methods: {
    ...mapActions("eventRegister", ["registerEvent"]),
    ...mapMutations("errorMessage", ["HANDLE_MESSAGE"]),
    onChange(event) {
      event.preventDefault();
      const file = event.target.files[0];
      this.form.file = file;
      this.form.url = URL.createObjectURL(file);
    },
    async submitForm() {
      if (!this.form.title) {
        this.HANDLE_MESSAGE("Please provide title for your event");
        return (this.snackbar = true);
      } else if (!this.form.description) {
        this.HANDLE_MESSAGE(
          "Please provide descrition about event for your visitors"
        );
        return (this.snackbar = true);
      } else if (!this.form.date) {
        this.HANDLE_MESSAGE("Please select a date for your event");
        return (this.snackbar = true);
      } else if (!this.form.start_time) {
        this.HANDLE_MESSAGE("Oops, No starting time for the event");
        return (this.snackbar = true);
      } else if (!this.form.ticket.price && !this.priceFlag) {
        this.HANDLE_MESSAGE(
          "Your event is free of cost. Please submit again to register."
        );
        this.priceFlag = true;
        return (this.snackbar = true);
      } else {
        if (this.category_selected.length) {
          for (let index = 0; index < this.category_selected.length; index++) {
            this.form.category_selected.push(this.category_selected[index]);
          }
        }
        const response = await this.registerEvent(this.form);
        if (response) {
          this.resetForm();
          this.HANDLE_MESSAGE("Sccessfully Registered !!!");
          return (this.snackbar = true);
        } else {
          this.HANDLE_MESSAGE();
          return (this.snackbar = true);
        }
      }
    },
    resetForm() {
      (this.category_selected = []),
        (this.form = {
          title: "",
          description: "",
          url: null,
          file: null,
          category_selected: [],
          date: "",
          start_time: "",
          durationtype: "",
          durationperiod: "",
          ticket: {
            currency: "",
            price: "",
          },
          selectedLanguages: [],
          attendee_preparation: "",
          no_attendees: "",
          attendee_inviting: "",
          see_attendees_info: "",
          co_host: "",
          event_keywords: "",
          optional_question: "",
        });
    },
  },
};
</script>

<style scoped>
.eventRegistration {
  padding-top: 30px;
  min-width: 80%;
  max-width: 1050px;
}
.title {
  justify-content: center;
}
input {
  height: 55px;
  padding: 4px;
  padding-left: 12px;
  width: 100%;
  border: 1px solid darkgray;
}
textarea {
  height: 100px;
  padding: 12px;
  width: 100%;
  border: 1px solid darkgray;
}
.select_wrapper {
  width: 20vw;
}

.submitButton {
  width: 100%;
}
.fileInput {
  cursor: pointer;
  overflow: hidden;
  width: 100vw;
  height: 200px;
  top: 0;
  right: 0;
  z-index: 99;
  opacity: 0;
  -moz-opacity: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}
.preview {
  margin-bottom: 10px;
  justify-content: center;
  height: 200px;
}
.preview_image {
  object-fit: contain;
  width: 100%;
}
button {
  outline: none;
}
@media screen and (max-width: 600px) {
  .select_wrapper {
    width: 50vw;
  }
}
</style>