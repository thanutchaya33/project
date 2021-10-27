<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="center">
      <h2>บิลชำระค่าบริการ</h2>
        <div v-if="bills.length">
        <h4>จำนวนบิลทั้งหมด {{ bills.length }} คน </h4>
      
      <div v-for="bill in bills" v-bind:key="bill.id">
        <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">ลำดับที่ : {{ bill.id }}</h5>
                  <p>ชื่อ-นามสกุล : {{ bill.name }} - {{ bill.lastname }}</p>
                  <p>
                    <button class="btn btn-warning" v-on:click="navigateTo('/bill/' + bill.id)">
                      ดูบิล
                    </button>
                    <button class="btn btn-danger" v-on:click="deleteBill(bill)">
                      ลบบิล
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BillsService from "@/services/BillsServices";

export default {
  data() {
    return {
      bills: [],
    };
  },
  async created() {
    try {
      this.bills = (await BillsService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteQueue(queue){
      let result = confirm("Want to delete ?")
      if(result){
        try{
          await BillsService.delete(queue)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.queues = (await BillsService.index()).data
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
</style>