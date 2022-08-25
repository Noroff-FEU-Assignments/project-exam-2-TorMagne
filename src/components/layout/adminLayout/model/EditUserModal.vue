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
      <div class="modal-box relative">
        <label
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="closeDialog"
          >✕</label
        >
        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
        <pre>{{ userData }}</pre>
        <p class="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
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