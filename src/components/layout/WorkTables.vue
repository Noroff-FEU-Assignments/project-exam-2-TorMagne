<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <div v-if="workAdded">
      <Alert message="No work added yet" :alertClass="'alert-info'" />
    </div>
    <div class="overflow-x-auto" v-else>
      <table class="table font-raleway">
        <!-- head -->
        <thead>
          <tr>
            <th>Date</th>
            <th>Start time</th>
            <th>End Time</th>
            <th>Details {{ tables }}</th>
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
// components
import Alert from "@/components/layout/Alert.vue";
// utillity
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  components: {
    Alert,
  },
  data() {
    return {
      tables: [],
      workAdded: false,
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
        if (response.data.work_tables.length === 0) {
          this.workAdded = true;
        } else {
          this.workAdded = false;
        }
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