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
      <div class="bg-white rounded-lg relative p-8 md:w-96">
        <h2 class="font-sora">DELETE</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>