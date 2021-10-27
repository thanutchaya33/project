<template>
  <div >
    <main-header navsel="front"></main-header>
    <div class="center">
      <div class="jumbotron">
        <h1 class="display-4">จองคิวสำเร็จแล้ว</h1>
        <p class="lead">
          ข้อมูลของคุณถูกส่งไปยังแม่บ้านสำเร็จแล้ว กรุณาชำระค่าบริการ เพื่อทำการยืนยันการจองคิว
        </p>
        <p class="lead">
          โปรดชำระค่าบริการ
        </p>
        <hr class="my-4" />
        <button
          class="btn btn-outline-success"
          v-on:click="navigateTo('/bill/create')"
          role="button"
        >
          ชำระค่าบริการ
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

</style>