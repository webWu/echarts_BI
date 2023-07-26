<!--
 * @Author: mat
 * @Date: 2019-12-04 14:56:07
 * @LastEditTime: 2019-12-04 16:31:52
 * @LastEditors: Please set LastEditors
 * @Description: 实现数字翻牌动态效果，css 属性 writing-mode: vertical-lr，使数字竖直排版，
        2d移动 transform: translate(-50%, -40%); y值控制移动至哪个数字，transition
        控制transform属性有动画效果
 -->
 <template>
  <div class="chartNum">
    <div class="box-item">
      <li
        :class="{ 'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
        v-for="(item, index) in orderNum"
        :key="index"
      >
        <span v-if="!isNaN(item)">
          <i ref="numberItem">0123456789</i>
        </span>
        <span class="comma" v-else>{{ item }}</span>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderNum: ['0', '0', '0', '0', '0', '0', '0', '0'] // 默认订单总数
    }
  },
  mounted () {
    let val = 12654
    setInterval(() => {
      this.toOrderNum(val) // 这里输入数字即可调用
      val = val + 10
    }, 1000)
  },
  methods: {
    // 设置文字滚动
    setNumberTransform () {
      const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter((item) => !isNaN(item))
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    },
    // 处理总订单数字
    toOrderNum (num) {
      num = num.toString()
      // 把订单数变成字符串
      if (num.length < 8) {
        num = '0' + num // 如未满八位数，添加"0"补位
        this.toOrderNum(num) // 递归添加"0"补位
      } else if (num.length === 8) {
        // 订单数中加入逗号
        num = num.slice(0, 2) + ',' + num.slice(2, 5) + ',' + num.slice(5, 8)
        this.orderNum = num.split('') // 将其便变成数据，渲染至滚动数组
      } else {
        // 订单总量数字超过八位显示异常
        this.$message.warning('总量数字过大')
      }
      this.setNumberTransform()
    }
  }
}
</script>
  <style scoped lang='scss'>
/*订单总量滚动数字设置*/
.box-item {
  position: relative;
  font-size: 25px;
  font-weight: 600;
  font-family: FZHei-B01;
  text-align: center;
  list-style: none;
  color: #000;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
  /* overflow: hidden; */
}
/* 默认逗号设置 */
.mark-item {
  width: 1px;
  height: 2px;
  margin-top: 46px;
  line-height: 10px;
  font-size: 23px;
  color: #fff;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
/*滚动数字设置*/
.number-item {
  width: 20px;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;
  /* 背景图片 */
  background: url(/images/text-bg-blue.png) no-repeat center center;
  background-size: 100% 100%;
  // background: #ccc;
  background: linear-gradient(0deg, #82e0fa 0%, #26bce6 48%, #8de1f8 100%);
  list-style: none;
  // background:rgba(250,250,250,1);
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 1s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>
