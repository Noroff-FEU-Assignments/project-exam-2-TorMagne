<template>
  <div class="container mx-auto px-4">
    <pre>{{ workTables }}</pre>
  </div>
</template>

<script>
// utility
import axios from "axios";
export default {
  data() {
    return {
      workTables: [],
    };
  },
  mounted() {
    this.getAllWorkTables();
  },
  methods: {
    async getAllWorkTables() {
      let config = {
        method: "get",
        url: "work-tables?populate=*",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };

      axios(config)
        .then((response) => {
          // this.$refs.triggerGetUserWorkTable.getUserWorkTable();
          console.log(response.data.data);
          this.workTables = response.data.data.reverse();
          // this.alertFunc();
          // this.resetForm();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>