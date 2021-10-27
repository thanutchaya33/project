import Api from '@/services/Api'

export default {
    index() {
        return Api().get('queues')
    },
    show(queueId){
        return Api().get('queue/'+queueId)
    },
    post(queue){
        return Api().post('queue', queue)
    },
    put(queue){
        return Api().put('queue/'+queue.id, queue)
    },
    delete(queue){
        return Api().delete('queue/'+queue.id, queue)
    },
}