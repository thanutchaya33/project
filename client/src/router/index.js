import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import UserCreate from '@/components/User/CreateUser'

import CommentIndex from '@/components/Comments/Index'

import QueueIndex from '@/components/Queues/Index'
import QueueCreate1 from '@/components/Queues/CreateQ1'
import QueueCreate from '@/components/Queues/CreateQueue'
import QueueEdit from '@/components/Queues/EditQueue'
import QueueShow from '@/components/Queues/ShowQueue'

import MaidIndex from '@/components/Maid/Index'
import MaidShow1 from '@/components/Maid/MainMaid'

import BillIndex from '@/components/Bill/Index'
import BillCreate from '@/components/Bill/CreateBill'
import BillShow from '@/components/Bill/ShowBill'
import BillShow1 from '@/components/Bill/CreateB1'

import MainUser from '@/components/MainUser'
import HomeUser from '@/components/HomeUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user/create',
      name: 'user',
      component: UserCreate
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
  
    //queue
    {
      path: '/queue1',
      name: 'queue1',
      component: QueueCreate1
    },
    {
      path: '/queues',
      name: 'queues',
      component: QueueIndex
    },
    {
      path: '/queue/create',
      name: 'queue-create',
      component: QueueCreate
    },{
      path: '/queue/edit/:queueId',
      name: 'queue-edit',
      component: QueueEdit
    },
    {
      path: '/queue/:queueId',
      name: 'queue',
      component: QueueShow
    },
    //Maid
    {
      path: '/maids',
      name: 'maids',
      component: MaidIndex
    },
    {
      path: '/MainMaid',
      name: 'MainMaid',
      component: MaidShow1
    },

    //Bill
    {
      path: '/bill1',
      name: 'bill1',
      component: BillShow1
    },
    {
      path: '/bills',
      name: 'bills',
      component: BillIndex
    },
    {
      path: '/bill/create',
      name: 'bill-create',
      component: BillCreate
    },
    {
      path: '/bill/:billId',
      name: 'bill',
      component: BillShow
    },

    //MainUser
    {
      path: '/MainUser',
      name: 'MainUser',
      component: MainUser
    },

    //HomeUser
    {
      path: '/HomeUser',
      name: 'HomeUser',
      component: HomeUser
    },
  ]
})
