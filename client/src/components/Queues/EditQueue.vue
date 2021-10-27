<template>
    <div>
        <main-header navsel="back"></main-header>
        <div class="center bg-light">
        <h2> แก้ไขข้อมูล</h2>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <form v-on:submit.prevent = "editQueue">
                            <p class="left">ชื่อ: <input class="form-control" type="text" v-model="queue.name"></p>
                            <p class="left">นามสกุล: <input class="form-control" type="text" v-model="queue.lastname"></p>
                            <p class="left">เบอร์โทร: <input class="form-control" type="text" v-model="queue.tel"></p>
                            <p class="left">ที่อยู่: <input class="form-control" type="text" v-model="queue.address"></p>
                            <p class="left">สถานที่ : <input class="form-control" type="text" v-model="queue.location"></p>
                            <p class="left">เวลา : <input class="form-control" type="text" v-model="queue.time"></p>
                            <p class="left">วันที่ : <input class="form-control" type="text" v-model="queue.date"></p>
                            <p><button class="btn btn-success" type="submit">บันทึก</button></p>
                        </form>
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
    data(){
        return{
            queue:{
                name: '',
                lastname: '',
                tel: '',
                address: '',
                location: '',
                time: '',
                date: ''
            }
        }
    },
    methods:{
        async editQueue(){
            try{
                await QueuesService.put(this.queue)
                this.$router.push({
                    name: 'queues'
                })

            }catch(error){
                console.log(error)
            }
        }
    }, 
    async created(){
        try{
            let queueId = this.$route.params.queueId
            this.queue = (await QueuesService.show(queueId)).data
        }catch(error){
            console.log(error)
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