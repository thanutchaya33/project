<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" active-class="active" to="/HomeUser">
        <span class="font1">Maid Siam</span>
      </router-link>
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
            <router-link class="nav-link" active-class="active" to="/MainUser"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-home"></i> หน้าหลัก</span
              ></router-link
            >
          </li>

          <li class="nav-item active" >
            <router-link class="nav-link" active-class="active" to="/queue/create"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-boxes"></i> จองคิว </span
              ></router-link
            >
          </li>
          <li class="nav-item active">
            <router-link
              class="nav-link"
              active-class="active"
              to="/maids"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-clipboard-list"></i> แม่บ้าน </span
              ></router-link
            >
          </li>
          <li class="nav-item active" >
            <router-link
              class="nav-link"
              active-class="active"
              to="/comments"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-list-ul"></i> ค่าบริการ </span
              ></router-link>
          </li>
          <li class="nav-item active" >
            <router-link
              class="nav-link"
              active-class="active"
              to="/bill/create"
              ><span class="font2" style="color: #fff"
                ><i class="fas fa-list-ul"></i> ชำระค่าบริการ </span
              ></router-link>
          </li>
        </ul>
      </div>
    </nav>
</div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
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