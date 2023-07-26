<template>
  <div class="home">
    <HelloWorld :toChild="childData" :toCarData="carData"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      childData: [
        {
          status: '进口',
          plateNum: '苏B087KS',
          date: '2023.2.23 12:15',
          parking: '张泾锡港路南（全家福）停车场'
        },
        {
          status: '出口',
          plateNum: '苏B77UJK',
          date: '2023..2.23 13:56',
          parking: '春合路停车点',
          paid: '已支付10元'
        },
        {
          status: '进口',
          plateNum: '苏B88MJ8',
          date: '2023..2.23 12:18 ',
          parking: '泾声路大戏院停车场'
        }
      ],
      carData: [
        {
          id: +1,
          palce: '东亭',
          today: 50.4,
          thisWeek: 102.9,
          rise: -2.6
        },
        {
          id: -1,
          palce: '东北塘',
          today: 40.3,
          thisWeek: 104.0,
          rise: 3.9
        },
        {
          id: 0,
          palce: '锡北',
          today: 20.1,
          thisWeek: 81.6,
          rise: 0.3
        },
        {
          id: +2,
          palce: '羊尖',
          today: 15.6,
          thisWeek: 74.8,
          rise: 3.9
        },
        {
          id: -4,
          palce: '鹅湖',
          today: 16.7,
          thisWeek: 30.0,
          rise: -2.6
        }
      ]

    }
  }
}
</script>
