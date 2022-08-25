<template>
  <div
    class="
      z-10
      bg-[#00000037]
      w-[100%]
      h-[100%]
      absolute
      top-1/2
      left-1/2
      transform
      -translate-x-1/2 -translate-y-1/2
    "
    v-if="modelOpen"
  >
    <div
      class="
        z-20
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
      "
      v-if="modelOpen"
    >
      <div class="bg-white rounded-lg relative p-8">
        <form action="" @submit.prevent="editUser">
          <button
            class="
              btn btn-warning btn-sm
              absolute
              right-2
              top-2
              hover:bg-[#fbbe23ce]
            "
            @click="closeDialog"
          >
            Close
          </button>
          <Alert
            message="You successfully edited this user"
            v-if="isAlertOpen"
            :alertClass="'alert-success'"
            class="mt-5"
          />
          <h3 class="text-lg font-bold font-sora mt-5">
            Edit user: {{ userData.username }}
          </h3>
          <div class="form-control w-full max-w-xs font-raleway">
            <label class="label">
              <span class="label-text">Change username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              class="border-primary input input-bordered w-full max-w-xs mb-3"
              v-model="userData.username"
            />
            <label class="label">
              <span class="label-text">Change user email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              class="border-primary input input-bordered w-full max-w-xs mb-3"
              v-model="userData.email"
            />
            <!-- toggle -->
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Is admin?</span>
                <input
                  type="checkbox"
                  checked="checked"
                  class="checkbox checkbox-primary mb-3"
                  v-model="editedUserData.isAdmin"
                />
              </label>
            </div>
            <!-- dropdown -->
            <div class="flex justify-between">
              <label class="label">
                <span class="label-text font-raleway mr-3">User role?</span>
              </label>
              <select
                class="select select-primary w-[10rem] font-raleway font-normal"
                v-model="userRole"
              >
                <option value="1" selected="selected">Authenticated</option>
                <option value="3">Admin</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-info w-full mt-5">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// components
import Alert from "@/components/layout/Alert.vue";
// utillity
import axios from "axios";
export default {
  components: {
    Alert,
  },
  data() {
    return {
      isAlertOpen: false,
      userData: null,
      modelOpen: false,
      userRole: 1,
      editedUserData: {
        username: "",
        email: "",
        confirmed: true,
        isAdmin: false,
        role: {
          id: null,
        },
      },
    };
  },
  methods: {
    alertFunc() {
      this.isAlertOpen = true;
      setTimeout(
        function () {
          this.isAlertOpen = false;
        }.bind(this),
        4000
      );
    },
    async editUser() {
      let data = this.editedUserData;
      let editedData = {
        username: this.userData.username,
        email: this.userData.email,
        confirmed: data.confirmed,
        isAdmin: data.isAdmin,
        role: {
          id: this.userRole,
        },
      };
      console.log("editedData", editedData);
      let config = {
        method: "put",
        url: `users/${this.userData.id}?populate=role`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: editedData,
      };

      axios(config)
        .then((response) => {
          this.alertFunc();
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openDialog(dataFromParent) {
      this.userData = dataFromParent;
      console.log("trigggggered", dataFromParent);
      this.modelOpen = true;
    },
    closeDialog() {
      this.modelOpen = false;
      this.userData = null;
    },
  },
  computed: {
    checkUserRole() {
      if (this.userRole == 1) {
        return (this.editedUserData.role.id = 1);
      } else if (this.userRole == 3) {
        return (this.editedUserData.role.id = 3);
      }
    },
  },
};
</script>