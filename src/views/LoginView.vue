<template>
  <div
    class="
      container
      mx-auto
      px-4
      flex flex-col
      items-center
      h-screen
      justify-center
    "
  >
    <template v-if="loginError">
      <LoginError />
    </template>
    <template v-if="isLoading">
      <Loader />
    </template>
    <template v-else>
      <LoginForm />
    </template>
  </div>
</template>

<script>
// components
import Loader from "@/components/layout/Loader.vue";
import LoginError from "@/components/utillity/LoginError.vue";
import LoginForm from "@/components/forms/LoginForm.vue";

export default {
  components: {
    Loader,
    LoginError,
    LoginForm,
  },
  data() {
    return {
      isLoading: false,
      loginError: false,
    };
  },
};
</script>