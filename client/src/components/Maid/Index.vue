<template>
  <div>
    <main-header navsel="front"></main-header>
    <div class="center">
      <h2>ข้อมูลแม่บ้านทั้งหมด</h2>
        <div v-if="maids.length">
        <h4>จำนวนแม่บ้าน {{ maids.length }} คน </h4>
      <div v-for="maid in maids" v-bind:key="maid.id">
        <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
              <p class="left">ชื่อเล่น : {{ maid.nickname }}</p>
              <p class="left">ชื่อ - นามสกุล : {{ maid.name }} {{ maid.lastname }}</p>
              <p class="left">บริการ : {{ maid.serve }}</p>
              <p class="left">ภาษา  : {{ maid.language }}</p>
              <p class="left">อายุ : {{ maid.age }}</p>
              <p class="left">เบอร์โทร : {{ maid.tel }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import MaidsService from "@/services/MaidsService";

export default {
  data() {
    return {
      maids: [],
    };
  },
  async created() {
    try {
      this.maids = (await MaidsService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}

</style>