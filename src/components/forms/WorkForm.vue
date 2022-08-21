<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <form action="" class="w-full max-w-md">
      <Heading class="mb-5" title="Save work day" />
      <!-- date -->
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Select work date</span>
          {{ newWorkInfo }}
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
          v-model="newWorkInfo.data.startTime"
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
          v-model="newWorkInfo.data.endTime"
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
  </div>
</template>

<script>
// components
import Heading from "@/components/layout/Heading.vue";
export default {
  components: {
    Heading,
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
    };
  },
  methods: {
    resetForm() {
      this.newWorkInfo.data.workStartTime = "";
      this.newWorkInfo.data.workEndTime = "";
      this.newWorkInfo.data.workDetails = "";
    },
    resetSearchDate() {
      this.searchDate = "";
    },
  },
};
</script>