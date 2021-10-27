<template>
  <div>
    <main-header navsel="back"></main-header>
    <div class="center">
      <h2>คิว</h2>
        <div v-if="queues.length">
        <h4>จำนวนคิวทั้งหมด {{ queues.length }} คน </h4>
      
      <div v-for="queue in queues" v-bind:key="queue.id">
        <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">ลำดับที่ : {{ queue.id }}</h5>
                  <p>ชื่อ-นามสกุล : {{ queue.name }} - {{ queue.lastname }}</p>
                  <p>
                    <button class="btn btn-warning" v-on:click="navigateTo('/queue/' + queue.id)">
                      ดูข้อมูลผู้ใช้
                    </button>
                    <button class="btn btn-success" v-on:click="navigateTo('/queue/edit/' + queue.id)">
                      แก้ไขข้อมูล
                    </button>
                    <button class="btn btn-danger" v-on:click="deleteQueue(queue)">
                      ลบข้อมูล
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
import QueuesService from "@/services/QueueService";

export default {
  data() {
    return {
      queues: [],
    };
  },
  async created() {
    try {
      this.queues = (await QueuesService.index()).data;
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
          await QueuesService.delete(queue)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.queues = (await QueuesService.index()).data
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