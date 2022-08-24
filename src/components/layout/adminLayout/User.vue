<template>
  <div
    class="
      md:container
      md:mx-auto
      md:px-4
      md:mt-5
      md:gap-5
      md:flex
      md:flex-row
      md:flex-wrap
    "
  >
    <div
      class="card bg-base-100 shadow-xl mb-5"
      v-for="user in users"
      :key="user.id"
    >
      <div class="card-body w-full">
        <span>User name: {{ user.username }}</span>
        <span>User email: {{ user.email }}</span>
        <span>is admin: {{ user.isAdmin }}</span>
        <!-- <input type="text" v-model="userId" /> -->
        <span>{{ user.id }}</span>
        <div class="card-actions">
          <button class="btn btn-info">Edit user</button>
          <button class="btn btn-error">Delete user</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: null,
    };
  },
  mounted() {
    this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      try {
        const response = await axios.get("users", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        this.users = response.data;
        this.users.reverse();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>