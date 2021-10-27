<template>
  <div>
    <main-header navsel="front"></main-header>
    <div class="center bg-light">
        <h2>ชำระค่าบริการ</h2>
        <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
               <form v-on:submit.prevent = "createBill">
                  <p class="left">ชื่อ <input  class="form-control" type="text" v-model="bill.name"></p>
                  <p class="left">นามสกุล <input class="form-control" type="text" v-model="bill.lastname"></p>
                  <p class="left">เบอร์โทร <input class="form-control" type="text" v-model="bill.tel"></p>
                  <p class="left">จำนวนชั่วโมงที่จอง <input class="form-control" type="text" v-model="bill.hours"></p>
                  <p class="left">ราคา <input class="form-control" type="text" v-model="bill.price"></p>
                  <p class="left">ชื่อธนาคาร <input  class="form-control" type="text" v-model="bill.namebank"></p>
                  <p class="left">เวลา <input  class="form-control" type="text" v-model="bill.time"></p>
                  <p class="left">วันที่ <input  class="form-control" type="date" v-model="bill.date"></p>
                  <p class="left">เลขบัญชี 4 หลักสุดท้าย <input  class="form-control" type="text" v-model="bill.numberfour"></p>
                  <p class="left">จำนวนเงินที่โอน <input  class="form-control" type="text" v-model="bill.amount"></p>
                  <p><button class="btn btn-outline-success" type="submit">บันทึก</button></p>
                </form>
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
    data(){
        return{
            bill:{
                name: '',
                lastname: '',
                tel: '',
                hours: '',
                price: '',
                namebank: '',
                time: '',
                date: '',
                numberfour: '',
                amount: ''
            }
        }
    },
    methods:{
        async createBill(){
            try{
                await BillsService.post(this.bill)
                this.$router.push({
                    name: 'bill1'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: seagreen;
  color: white;
}
.hero-wrapper {
  margin-top: 80px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background: #a0d88e;
  height: 250px;
  color: #000000;
  padding: 20px;
}
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: seagreen;
  color: white;
}
</style>