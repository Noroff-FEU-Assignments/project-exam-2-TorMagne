<template>
  <div
    class="
      font-raleway
      mb-3
      md:container md:mx-auto md:px-4 md:gap-5 md:flex md:flex-row md:flex-wrap
      mt-10
      md:mt-0
      px-4
    "
  >
    <div
      class="card bg-white shadow-md mb-5 md:w-96 md:mb-0"
      v-for="message in filteredNewMessages"
      :key="message.id"
    >
      <div class="card-body w-full">
        <h2 class="card-title font-sora">
          Sender: {{ message.attributes.user.data.attributes.username }}
        </h2>
        <p>Message: {{ message.attributes.message }}</p>
        <div class="card-actions">
          <button
            class="btn btn-warning"
            @click="markMessageAsArchived(message.id)"
          >
            Archive message
          </button>
          <button class="btn btn-info">Mark a read</button>
        </div>
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
      newMessages: [],
      editedData: {
        data: {
          isRead: true,
        },
      },
    };
  },
  mounted() {
    this.getAllNewMessages();
  },
  methods: {
    async markMessageAsArchived(messageId) {
      let config = {
        method: "put",
        url: `messages/${messageId}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: this.editedData,
      };
      axios(config)
        .then((response) => {
          console.log(response.data.data);
          this.getAllNewMessages();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAllNewMessages() {
      let config = {
        method: "get",
        url: "messages?populate=*",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      axios(config)
        .then((response) => {
          console.log(response.data.data);
          this.newMessages = response.data.data.reverse();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredNewMessages() {
      return this.newMessages.filter((messages) => {
        return !messages.attributes.isArchived;
      });
    },
  },
};
</script>