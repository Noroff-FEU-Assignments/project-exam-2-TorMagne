<template>
  <div class="container mx-auto px-4 mt-12 flex justify-center">
    <form action="" class="w-full max-w-md">
      <h1 class="font-sora font-bold text-3xl mb-5">Save work day</h1>
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
        />
      </div>
      <div class="form-control w-full max-w-md">
        <label class="label">
          <span class="label-text font-raleway">Work details</span>
        </label>
        <textarea
          class="textarea textarea-bordered font-raleway border-primary"
          placeholder="Work details"
        ></textarea>
      </div>
      <button class="btn btn-primary mt-5">Save</button>
    </form>
  </div>
</template>