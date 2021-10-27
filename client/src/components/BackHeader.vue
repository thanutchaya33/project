<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" style="color: Back" > 
        <span class="font1">Maid Siam</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <router-link class="nav-link" active-class="active" to="/MainMaid"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-home"></i> หน้าหลัก</span
              ></router-link
            >
          </li>

          <li class="nav-item active" v-if="isUserLoggedIn">
            <router-link class="nav-link" active-class="active" to="/queues"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-boxes"></i> คิว </span
              ></router-link
            >
          </li>
          <li class="nav-item active"  v-if="isUserLoggedIn">
            <router-link
              class="nav-link"
              active-class="active"
              to="/bills"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-list-ul"></i> บิลชำระค่าบริการ </span
              ></router-link>
          </li>

           <li
            class="nav-item active"
            v-if="!isUserLoggedIn"
            role="presentation"
          >
            <router-link class="nav-link" active-class="active" to="/login"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-user"></i> เข้าสู่ระบบ</span
              ></router-link
            >
          </li>
          <li
            class="nav-item active"
            v-if="!isUserLoggedIn"
            role="presentation"
          >
            <router-link class="nav-link" active-class="active" to="/user/create"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-user"></i> สมัครสมาชิก</span
              ></router-link
            >
          </li>

          <li class="nav-item active" v-if="isUserLoggedIn" role="presentation">
            <a class="nav-link" href="#" v-on:click.prevent="logout"
              ><span class="font2" style="color: #fff"><i class="fas fa-sign-in-alt"></i> ออกจากระบบ</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"]),
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  text-align: center;
}
.bg-light {
  background-color: #589c21 !important;
  color: #fff !important;
}
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

</style>