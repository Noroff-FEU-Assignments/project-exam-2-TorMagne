<template>
  <div>
    <WorkForm />
    <WorkTables />
  </div>
</template>

<script>
// components
import WorkForm from "@/components/forms/WorkForm.vue";
import WorkTables from "@/components/layout/WorkTables.vue";
export default {
  components: {
    WorkForm,
    WorkTables,
  },
};
</script>