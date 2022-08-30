<template>
  <div class="container mx-auto px-4 flex justify-end mb-10 md:mb-0">
    <!-- The button to open modal -->
    <label for="my-modal-3" class="btn modal-button btn-info font-raleway"
      >Contact Admin</label
    >

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label
          for="my-modal-3"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-lg font-bold font-sora mb-3">
          Send message to an Admin
        </h3>
        <form action="">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-raleway">Message</span>
            </label>
            <textarea
              class="
                textarea textarea-bordered
                h-24
                font-raleway
                border-primary
              "
              placeholder="Bio"
            ></textarea>
          </div>
          <button class="btn btn-success mt-5" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>