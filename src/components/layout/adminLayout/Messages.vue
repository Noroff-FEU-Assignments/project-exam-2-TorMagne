<template>
  <div
    class="
      font-raleway
      mb-3
      md:container
      md:mx-auto
      md:px-4
      md:gap-5
      md:flex
      md:flex-row
      md:flex-wrap
      md:ml-5
      mt-10
      md:mt-0
    "
  >
    <div
      class="card bg-white shadow-md mb-5 md:w-96 md:mb-0"
      v-for="message in newMessages"
      :key="message.id"
    >
      <div class="card-body w-full">
        <h2 class="card-title">
          Sender: {{ message.attributes.user.data.attributes.username }}
        </h2>
        <p>Message: {{ message.attributes.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// utillity
import axios from "axios";
export default {
  data() {
    return {
      newMessages: {},
    };
  },
  mounted() {
    this.getAllNewMessages();
  },
  methods: {
    async getAllNewMessages() {
      let config = {
        method: "get",
        url: "http://localhost:1337/api/messages?populate=*",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          this.newMessages = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>