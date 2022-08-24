<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <div v-if="workAdded">
      <Alert message="No work added yet" :alertClass="'alert-info'" />
    </div>
    <div class="overflow-x-auto" v-else>
      <!-- search -->
      <div class="md:flex md:items-center md:justify-center mb-3">
        <div class="form-control w-full max-w-x font-raleway">
          <label class="label">
            <span class="label-text font-raleway">Search date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs border-primary"
            v-model="searchDate"
          />
        </div>
        <!-- page select -->
        <div>
          <label class="label">
            <span class="label-text font-raleway">Page size</span>
          </label>
          <select class="select select-primary w-[5rem]" v-model="pageCount">
            <option v-for="(pageA, pageIndex) in pageArray" :key="pageIndex">
              {{ pageA }}
            </option>
          </select>
        </div>
      </div>
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

        <tbody class="" v-for="table in paginationArray" :key="table.id">
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
      <!-- pagiantion
         -->
      <div class="btn-group justify-center mb-10">
        <button class="btn text-primary" @click="movePaginationStep('back')">
          «
        </button>
        <button class="btn">{{ page }}</button>
        <button class="btn text-primary" @click="movePaginationStep('next')">
          »
        </button>
      </div>
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
      searchDate: "",
      page: 1,
      pageCount: 5,
      pageArray: [5, 10, 15, 20],
    };
  },
  mounted() {
    this.getUserWorkTable();
  },
  methods: {
    movePaginationStep(stepDirection) {
      if (stepDirection == "back") {
        if (this.page != 1) {
          this.page--;
        }
      } else {
        if (this.page * this.pageCount < this.sortedDateTables.length) {
          this.page++;
        }
      }
    },
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
    paginationArray() {
      let sliceStart = (this.page - 1) * this.pageCount;
      let sliceEnd = this.page * this.pageCount;
      return this.sortedDateTables.slice(sliceStart, sliceEnd);
    },
    ...mapGetters({
      user: "auth/user",
    }),
    sortedDateTables() {
      return this.tables
        .filter((table) => {
          return table.workDate.match(this.searchDate);
        })
        .filter((table) => {
          return table.workDetails.match(this.searchWorkDetails);
        });
    },
  },
};
</script>