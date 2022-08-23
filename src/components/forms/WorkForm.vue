<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <form action="" class="w-full max-w-md" @submit.prevent="createWorkTable">
      <Heading class="mb-5" title="Save work day" />
      <Success v-if="success" message="You successfully saved your work" />
      <!-- date -->
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Select work date</span>
        </label>
        <input
          type="date"
          placeholder="Select work date"
          class="
            input input-bordered
            border-primary
            w-full
            max-w-md
            font-raleway
            text-lg
          "
          v-model="newWorkInfo.data.workDate"
        />
      </div>
      <!-- start time -->
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Write start time</span>
        </label>
        <input
          type="time"
          placeholder="Select work date"
          class="
            input input-bordered
            border-primary
            w-full
            max-w-md
            font-raleway
            text-lg
          "
          v-model="newWorkInfo.data.workStartTime"
        />
      </div>
      <!-- end time -->
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Write end time</span>
        </label>
        <input
          type="time"
          placeholder="Select work date"
          class="
            input input-bordered
            border-primary
            w-full
            max-w-md
            font-raleway
            text-lg
          "
          v-model="newWorkInfo.data.workEndTime"
        />
      </div>
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Work details</span>
        </label>
        <textarea
          class="textarea textarea-bordered font-raleway border-primary"
          placeholder="Work details"
          v-model="newWorkInfo.data.workDetails"
        ></textarea>
      </div>
      <button class="btn btn-primary mt-5">Save</button>
    </form>
    <WorkTables ref="triggerGetUserWorkTable" />
  </div>
</template>

<script>
// components
import Heading from "@/components/layout/Heading.vue";
import Success from "@/components/layout/Success.vue";
import WorkTables from "@/components/layout/WorkTables.vue";
// utility
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: {
    Heading,
    Success,
    WorkTables,
  },
  data() {
    return {
      newWorkInfo: {
        data: {
          workDate: null,
          workStartTime: null,
          workEndTime: null,
          workDetails: "",
          user: null,
        },
      },
      success: false,
    };
  },
  methods: {
    // show success message when form i posted
    successFunc() {
      this.success = true;
      setTimeout(
        function () {
          this.success = false;
        }.bind(this),
        4000
      );
    },
    resetForm() {
      this.newWorkInfo.data.workStartTime = "";
      this.newWorkInfo.data.workEndTime = "";
      this.newWorkInfo.data.workDetails = "";
    },
    // resetSearchDate() {
    //   this.searchDate = "";
    // },
    async createWorkTable() {
      this.newWorkInfo.data.user = this.user.id;

      let config = {
        method: "post",
        url: "work-tables",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: this.newWorkInfo,
      };

      axios(config)
        .then((response) => {
          // this.getUserWorkTable();
          this.$refs.triggerGetUserWorkTable.getUserWorkTable();
          this.resetForm();
          this.successFunc();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>