<template>
  <div >
    <main-header navsel="front"></main-header>
    <div class="center">
      <div class="jumbotron">
        <h1 class="display-4">จองคิวแม่บ้านออนไลน์ได้แล้ว วันนี้ ที่นี่</h1>
        <p class="lead">
          จองวันนี้ลด 10% ไม่มีขั้นต่ำ !!!
        </p>
        <p class="lead">
          วันนี้ - 1 ธันวาคม 2564
        </p>
        <hr class="my-4" />
        <button
          class="btn btn-outline-success"
          v-on:click="navigateTo('/queue/create')"
          role="button"
        >
          จองเลย
        </button>
      </div>
    </div>
     <div class="container-fluid">
      <div class="container">
        <div class="blog-wrapper">
          <h4> ทำไมต้องเลือก Maid Siam </h4>
          <hr />
          <span class="font2"
            >1. สัมภาษณ์แม่บ้านก่อนจ้าง เราสัมภาษณ์แม่บ้านทุกคน ตรวจสอบความน่าเชื่อถือ คุณภาพในการให้บริการลูกค้า และประสบการณ์การทำความสะอาด
            <br />
            2. ปฏิเสธแม่บ้านที่มีประวัติอาชญากรรมทุกประเภท (บริษัท อื่น ๆ ทั้งหมดยอมรับแม่บ้านที่มีประวัติที่ไม่เกี่ยวกับการขโมยหรือทำร้ายร่างกาย ตัวอย่างเช่น เล่นการพนัน) เราตรวจสอบประวัติอาชญากรรมที่สำนักงานตำรวจแห่งชาติ<br />
            3. ผ่านโปรแกรมการฝึกทักษะการทำงานบ้านมาตรฐานจากประเทศญี่ปุ่น ซึ่งเป็นโปรแกรมที่ได้รับมาตรฐานระดับสูงของสมาคมแม่บ้านญี่ปุ่น<br />
            4. ผ่านโปรแกรมการฝึกทักษะแม่บ้านในระดับต่าง ๆ ที่บริษัทกำหนดไว้ กรณีที่แม่บ้านต้องการยกระดับมาตรฐานการบริการให้สูงขึ้น<br />
            </span>
        </div>
        <div class="footer"></div>
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