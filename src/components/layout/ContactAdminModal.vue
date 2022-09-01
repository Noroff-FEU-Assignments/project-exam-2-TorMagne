<template>
  <div class="mx-auto px-4 flex justify-end mb-10 md:mb-0">
    <!-- The button to open modal -->
    <label
      for="my-modal-3"
      class="btn modal-button btn-info font-raleway mt-5 md:mt-0"
      >Contact Admin</label
    >

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <Alert
          v-if="isAlertOpen"
          message="You successfully sendt message to an Admin"
          :alertClass="'alert-success'"
          class="my-5"
        />
        <h3 class="text-lg font-bold font-sora mb-3">
          Send message to an Admin
        </h3>
        <ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
          <form action="" @submit.prevent="handleSubmit(sendAdminMessage)">
            <div class="">
              <label class="label">
                <span class="label-text font-raleway">Message</span>
              </label>
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                class="form-control"
              >
                <textarea
                  id="admin message"
                  class="
                    textarea textarea-bordered
                    h-24
                    font-raleway
                    border-primary
                  "
                  v-model="messageToAdmin.data.message"
                  placeholder="Message"
                ></textarea>
                <span class="text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <button
              class="btn btn-success mt-5"
              type="submit"
              :disabled="invalid"
            >
              Send
            </button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
// components
import Alert from "@/components/layout/Alert.vue";
// utility
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: {
    Alert,
  },
  data() {
    return {
      messageToAdmin: {
        data: {
          message: "",
          user: null,
        },
      },
      isAlertOpen: false,
    };
  },
  methods: {
    // show success message when form i posted
    alertFunc() {
      this.isAlertOpen = true;
      setTimeout(
        function () {
          this.isAlertOpen = false;
        }.bind(this),
        4000
      );
    },
    async sendAdminMessage() {
      this.messageToAdmin.data.user = this.user.id;
      let config = {
        method: "post",
        url: "messages",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: this.messageToAdmin,
      };

      axios(config)
        .then((response) => {
          console.log(response.data);
          this.alertFunc();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>