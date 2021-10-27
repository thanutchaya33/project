<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="center bg-light ">
      <h2>ข้อมูลการชำระบิลของผู้ใช้</h2>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <p class="left">ลำดับ : {{ bill.id }}</p>
              <p class="left">ชื่อ - นามสกุล : {{ bill.name }} - {{ bill.lastname }}</p>
              <p class="left">เบอร์โทร : {{ bill.tel }}</p>
              <p class="left">จำนวนชั่วโมงที่จอง : {{ bill.hours }} ชั่วโมง</p>
              <p class="left">ราคา : {{ bill.price }} บาท </p>
              <p class="left">ชื่อธนาคาร : {{ bill.namebank }}</p>
              <p class="left">เวลา : {{ bill.time }}</p>
              <p class="left">วันที่ : {{ bill.date }}</p>
              <p class="left">เลขบัญชี 4 หลักสุดท้าย : {{ bill.numberfour }}</p>
              <p class="left">จำนวนเงินที่โอน : {{ bill.amount }} บาท </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import BillsService from '@/services/BillsServices'
export default {
  data() {
    return {
      bill: null,
    };
  },
  async created() {
    try {
      let billId = this.$route.params.billId;
      this.bill = (await BillsService.show(billId)).data;
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