<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="center bg-light ">
      <h2>ข้อมูลคิวของผู้ใช้</h2>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <p class="left">ลำดับ : {{ queue.id }}</p>
              <p class="left">ชื่อ - นามสกุล : {{ queue.name }} - {{ queue.lastname }}</p>
              <p class="left">เบอร์โทร : {{ queue.tel }}</p>
              <p class="left">ที่อยู่ : {{ queue.address }}</p>
              <p class="left">สถานที่ : {{ queue.location }}</p>
              <p class="left">เวลา : {{ queue.time }}</p>
              <p class="left">วันที่ : {{ queue.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import QueuesService from '@/services/QueueService'
export default {
  data() {
    return {
      queue: null,
    };
  },
  async created() {
    try {
      let queueId = this.$route.params.queueId;
      this.queue = (await QueuesService.show(queueId)).data;
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