import Api from '@/services/Api'

export default {
    index() {
        return Api().get('maids')
    },
    show(maidId){
        return Api().get('maid/'+maidId)
    },
    post(maid){
        return Api().post('maid', maid)
    },
    put(maid){
        return Api().put('maid/'+maid.id, maid)
    },
    delete(maid){
        return Api().delete('maid/'+maid.id, maid)
    },
}