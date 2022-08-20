<template>
  <div id="app" class="bg-neutral">
    <nav class="container mx-auto h-[64px] w-full">
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <div class="navbar">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <router-link
                to="/"
                class="text-primary text-2xl font-bold font-sora"
                >SUNGA</router-link
              >
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal font-raleway">
                <!-- Navbar menu content here -->
                <template v-if="isLoggedIn">
                  <li><router-link to="/guide">Guide</router-link></li>
                  <li>
                    <router-link to="/about">About</router-link>
                  </li></template
                >

                <div v-if="isLoggedIn">
                  <button class="btn btn-primary" @click="logOut">
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <!-- Page content here -->
          <router-view />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 font-raleway">
            <!-- Sidebar content here -->
            <template v-if="isLoggedIn">
              <li><router-link to="/guide">Guide</router-link></li>
              <li>
                <router-link to="/about">About</router-link>
              </li></template
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// store
import { store } from "@/store/store";
export default {
  data() {
    return {
      user: store.state.userData,
    };
  },
  methods: {
    logOut() {
      store.state.isLoggedIn = false;
      localStorage.clear();
      this.$router.push("/");
    },
  },
  computed: {
    isLoggedIn() {
      return store.getters.getIsLog;
    },
  },
};
</script>