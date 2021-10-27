<template>
  <div >
    <main-header navsel="front"></main-header>
    <div class="center">
      <div class="jumbotron">
        <h1 class="display-4">ชำระค่าบริการเสร็จสิ้น</h1>
        <p class="lead">
          โปรดรอแม่บ้านโทรกลับไปหาคุณ . . .
        </p>
        <hr class="my-4" />
        <button
          class="btn btn-outline-success"
          v-on:click="navigateTo('/MainUser')"
          role="button"
        >
          กลับสู่หน้าหลัก
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
.center {
  text-align: center;
  padding: 5%;
}
.footer {
  margin-top: 50px;
}
.blog-wrapper {
  margin-top: 20px;
  padding: 40px;
  height: 100%;
  background: #b5df8e;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  padding: 10px;
  position: relative;
  background-color: #ececec;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.1) inset;
  text-shadow: 1px 1px 1px #fff;
}
</style>