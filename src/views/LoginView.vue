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
    <div>
      <label for="email" class="label"
        ><span class="label-text-alt">Email</span></label
      >
      <input
        id="email"
        type="email"
        placeholder="Email"
        class="
          input input-bordered
          w-full
          max-w-xs
          border-primary
          mb-4
          font-raleway
        "
        v-model="loginData.identifier"
      />
      <label for="password" class="label"
        ><span class="label-text-alt">Password</span></label
      >
      <input
        id="password"
        type="password"
        placeholder="Password"
        class="
          input input-bordered
          w-full
          max-w-xs
          border-primary
          mb-4
          font-raleway
        "
        v-model="loginData.password"
      />

      <button class="btn btn-primary font-sora block">Login</button>
      <pre>{{ loginData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        identifier: "",
        password: "",
      },
    };
  },
};
</script>