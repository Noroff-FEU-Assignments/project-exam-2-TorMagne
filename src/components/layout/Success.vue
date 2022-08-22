<template>
  <div class="alert alert-success shadow-lg">
    <div>
      <span class="font-raleway">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>