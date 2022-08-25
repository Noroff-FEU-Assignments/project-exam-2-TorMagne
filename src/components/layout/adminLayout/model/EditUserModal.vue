<template>
  <div
    class="
      z-10
      bg-[#00000037]
      w-[100%]
      h-[100%]
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
    "
    v-if="modelOpen"
  >
    <div
      class="
        z-20
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
      v-if="modelOpen"
    >
      <div class="bg-white rounded-lg relative p-8">
        <button
          class="
            btn btn-warning
            absolute
            right-2
            top-2
            text-lg
            hover:bg-[#fbbe23ce]
          "
          @click="closeDialog"
        >
          Close
        </button>
        <h3 class="text-lg font-bold font-sora">Edit user</h3>
        <pre>{{ userData }}</pre>
        <div class="form-control w-full max-w-xs font-raleway">
          <label class="label">
            <span class="label-text">Change username</span>
          </label>
          <input
            type="text"
            placeholder="Username"
            class="border-primary input input-bordered w-full max-w-xs"
          />
          <label class="Username">
            <span class="label-text">Change user email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            class="border-primary input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: null,
      modelOpen: false,
    };
  },
  methods: {
    openDialog(dataFromParent) {
      this.userData = dataFromParent;
      console.log("trigggggered", dataFromParent);
      this.modelOpen = true;
    },
    closeDialog() {
      this.modelOpen = false;
      this.userData = null;
    },
  },
};
</script>