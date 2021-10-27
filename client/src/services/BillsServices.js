import Api from '@/services/Api'

export default {
    index() {
        return Api().get('bills')
    },
    show(billId){
        return Api().get('bill/'+billId)
    },
    post(bill){
        return Api().post('bill', bill)
    },
    put(bill){
        return Api().put('bill/'+bill.id, bill)
    },
    delete(bill){
        return Api().delete('bill/'+bill.id, bill)
    },
}