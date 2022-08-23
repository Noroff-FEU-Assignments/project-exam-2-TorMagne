<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <div class="overflow-x-auto">
      <table class="table font-raleway">
        <!-- head -->
        <thead>
          <tr>
            <th>Date</th>
            <th>Start time</th>
            <th>End Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody class="" v-for="table in tables" :key="table.id">
          <tr>
            <td class="whitespace-nowrap">{{ table.workDate }}</td>
            <td class="whitespace-nowrap">{{ table.workStartTime }}</td>
            <td class="whitespace-nowrap">{{ table.workEndTime }}</td>
            <td class="whitespace-nowrap">
              {{ table.workDetails }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      tables: null,
    };
  },
  mounted() {
    this.getUserWorkTable();
  },
  methods: {
    async getUserWorkTable() {
      try {
        const response = await axios.get(
          "users/" + this.user.id + "?populate=work_tables",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response);
        this.tables = response.data.work_tables.reverse();
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>