<template>
  <div>
    <main-header navsel="front"></main-header>
    <div class="center bg-light">
        <h2>จองคิว</h2>
        <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
               <form v-on:submit.prevent = "createQueue">
                  <p class="left">ชื่อ : <input  class="form-control" type="text" v-model="queue.name"></p>
                  <p class="left">นามสกุล : <input class="form-control" type="text" v-model="queue.lastname"></p>
                  <p class="left">เบอร์โทร : <input class="form-control" type="text" v-model="queue.tel"></p>
                  <p class="left">ที่อยู่ : <input class="form-control" type="text" v-model="queue.address"></p>
                  <p class="left">สถานที่ : <input class="form-control" type="text" v-model="queue.location"></p>
                  <p class="left">บริการ : <input  class="form-control" type="text" v-model="queue.serve"></p>
                  <p class="left">เวลา : <input  class="form-control" type="text" v-model="queue.time"></p>
                  <p class="left">วันที่ : <input  class="form-control" type="date" v-model="queue.date"></p>
                  <p><button class="btn btn-outline-success" type="submit">จองเลย</button></p>
                </form>
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
    data(){
        return{
            queue:{
                name: '',
                lastname: '',
                tel: '',
                address: '',
                location: '',
                serve: '',
                time: '',
                date: ''
            }
        }
    },
    methods:{
        async createQueue(){
            try{
                await QueuesService.post(this.queue)
                this.$router.push({
                    name: 'queue1'
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

</style>