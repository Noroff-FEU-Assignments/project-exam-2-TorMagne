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
        <h2
          class="card-title font-sora"
          v-if="
            message.attributes.user.data &&
            message.attributes.user.data.attributes.username
          "
        >
          {{ message.attributes.user.data.attributes.username }}
        </h2>
        <h2 class="card-title font-sora text-red-400" v-else>Deleted user</h2>
        <p>Message: {{ message.attributes.message }}</p>
        <div class="card-actions">
          <button class="btn btn-warning" @click="deleteMessage(message.id)">
            Delete message
          </button>
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
          this.newMessages = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteMessage(messageId) {
      let config = {
        method: "delete",
        url: `messages/${messageId}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: this.editedData,
      };
      axios(config)
        .then((response) => {
          this.getAllNewMessages();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredNewMessages() {
      return this.newMessages.filter((messages) => {
        return messages.attributes.isRead;
      });
    },
  },
};
</script>