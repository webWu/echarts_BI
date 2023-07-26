<template>
  <div class="hello">
    <!-- 头部 -->
    <div class="header">
      <div class="headerLeft"></div>
      <div class="headerCenter">
        <img src="../assets/images/tc8.png" mode="widthFix" width="240px" />
        <h1>城市停车运营平台</h1>
      </div>
      <div class="headerRight"></div>
      <div class="boxLeft">
        <div class="place">
          <img
            style="width: 14px; height: 16px"
            src="../assets/images/位置.png"
            alt=""
          />
          <div style="margin-left: 12px; line-height: 20px">锡山区</div>
          <img
            style="width: 23px; height: 15px; margin-left: 8px"
            src="../assets/images/图层 32.png"
            alt=""
          />
        </div>
        <!-- <div class="weather"> -->
        <img
          style="
            width: 20px;
            height: 20px;
            position: absolute;
            top: 0;
            right: 140px;
          "
          src="../assets/images/图层 9.png"
          alt=""
        />
        <span
          style="
            position: absolute;
            top: 0;
            right: 42px;
            line-height: 20px;
            letter-spacing: 3px;
          "
          >{{tianqi}}°C</span
        >
        <!-- background-color:yellow; -->
        <!-- </div> -->
      </div>
      <div class="boxRight">
        <!-- letter-spacing:2px; -->
        <span>{{ nowTime || "加载中..." }}</span>
      </div>
    </div>
    <!-- 中心部分 -->
    <div class="center">
      <!-- 左边div -->
      <div class="floatLeft">
        <div class="total">
          <div class="group">
            <div
              style="width: 30px; height: 4px; background-color: #00caff"
            ></div>
            <div class="line"></div>
          </div>

          <div class="carNum">接入总车场数</div>
          <div class="totalCar">
            <div class="item">
              <div>路侧</div>
              <div class="num">150</div>
              <img src="../assets/images/图层 25.png" alt="" />
            </div>
            <div class="item">
              <div>场库</div>
              <div class="num">58</div>
              <img src="../assets/images/图层 25.png" alt="" />
            </div>
          </div>
          <div
            style="width: 30px; height: 4px; background-color: #00caff"
          ></div>
          <div class="carNum">接入总泊位数</div>
          <div class="totalCar">
            <div class="item">
              <div>路侧</div>
              <div class="num">1000</div>
              <img src="../assets/images/图层 26.png" alt="" />
            </div>
            <div class="item">
              <div>场库</div>
              <div class="num">1000</div>
              <img src="../assets/images/图层 26.png" alt="" />
            </div>
          </div>
          <div class="group">
            <div
              style="width: 30px; height: 4px; background-color: #00caff"
            ></div>
            <div class="line"></div>
          </div>

          <div class="carNum">
            收费数据
            <span
              style="
                width: 124px;
                height: 25px;
                font-family: FZHTK--GBK1-0;
                color: #ffffff;
                font-size: 13.58px;
              "
              >订单/营收</span
            >
          </div>
          <div class="chargeData">
            <!-- 订单 -->
            <div class="orderGoods" id="dd"></div>
            <!-- 营收 -->
            <div class="revenue" id="ys">
              <!-- 总金额统计 -->
            </div>
          </div>
          <div class="totalAmount">
            <div class="item" style="margin-left: 22px">
              <div class="piece" style="background-color: #dfc626"></div>
              <div style="margin-left: 16px">场库</div>
            </div>
            <div class="item">
              <div class="piece" style="background-color: #1bbbd6"></div>
              <div style="margin-left: 16px">路侧</div>
            </div>
            <div class="item" style="margin-right: 24px">
              <div class="piece" style="background-color: #06baf9"></div>
              <div style="margin-left: 16px">总金额</div>
            </div>
          </div>
          <div class="group">
            <div
              style="width: 30px; height: 4px; background-color: #00caff"
            ></div>
            <div class="line"></div>
          </div>
          <div class="carNum">车场营收排名/周转率排名</div>
          <div class="outside">
            <div class="list" v-for="item in toCarData" :key="item.index">
              <!-- :style="{ color: item.status === '进口' ? '#02c2f9' : '#FFD203' }" -->
              <div
                style="flex: 0.5"
                :style="{
                  color:
                    item.id === 0 ? '#fff' : item.id > 0 ? 'green' : 'yellow',
                }"
              >
                {{ item.id }}
              </div>
              <div style="flex: 1">{{ item.palce }}</div>
              <div class="schedule">
                <div
                  class="top"
                  style="
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                  "
                >
                  <div
                    class="today"
                    :style="`width:${(104.0 / 100) * item.today}px`"
                  ></div>
                  <span style="margin-left: 8px">{{ item.today }}</span>
                </div>
                <div
                  class="bottom"
                  style="display: flex; align-items: center; position: relative"
                >
                  <div
                    class="thisWeek"
                    :style="`width:${(104.0 / 100) * item.thisWeek}px`"
                  ></div>
                  <span style="position: absolute; right: 20px">{{
                    item.thisWeek
                  }}</span>
                </div>
              </div>
              <div style="flex: 1">
                <span :style="{ color: item.rise > 0 ? 'yellow' : 'green' }"
                  >{{ item.rise }}%</span
                >
                <img
                  style="width: 14px; height: 14px; margin-left: 5px"
                  v-if="item.rise > 0"
                  src="../assets/images/上升.png"
                  alt=""
                />
                <img
                  style="width: 14px; height: 14px; margin-left: 5px"
                  v-else
                  src="../assets/images/下降.png"
                  alt=""
                />
              </div>
            </div>
            <div class="change">
              <div class="item">
                <div class="coo" style="background-color: #02c2fa"></div>
                <span style="margin-left: 5px">当月</span>
              </div>
              <div class="item">
                <div class="coo" style="background-color: #53cee7"></div>
                <span style="margin-left: 5px">本月累计</span>
              </div>
              <div class="item">
                <div class="coo"></div>
                <span>排名浮动变化</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="floatCenter">
        <div class="number">
          <div style="color: #00c4fc">总服务次数</div>
          <span>1</span>
          <div style="margin-left: 4px">,</div>
          <span>7</span>
          <span>7</span>
          <span>2</span>
          <div style="margin-left: 4px">,</div>
          <span>1</span>
          <span>3</span>
          <span>8</span>
        </div>
        <div class="money">
          <div style="color: #fae186">总收入金额</div>
          <span>1</span>
          <div style="margin-left: 4px">,</div>
          <span>7</span>
          <span>7</span>
          <span>2</span>
          <div style="margin-left: 4px">,</div>
          <span>1</span>
          <span>3</span>
          <span>8</span>
        </div>
      </div>
      <!-- 右边div -->
      <div class="floatRight">
        <div class="total">
          <div class="group">
            <div
              style="width: 30px; height: 4px; background-color: #00caff"
            ></div>
            <div class="line"></div>
          </div>
          <div class="carNum">停车健康指数</div>
          <div class="healthIndex">
            <div class="escape">
              <div>逃单</div>
              <img
                src="../assets/images/图层 31 拷贝.png"
                alt=""
                width="73px"
                height="72px"
              />
            </div>
            <div class="service">
              <div>服务</div>
              <img
                src="../assets/images/图层 31 拷贝.png"
                alt=""
                width="73px"
                height="72px"
              />
            </div>
            <div class="index">
              <div>90%</div>
              <img
                src="../assets/images/图层 31.png"
                alt=""
                width="404px"
                height="228px"
                border="none"
              />
            </div>
            <div class="order">
              <div>订单</div>
              <img
                src="../assets/images/图层 31 拷贝.png"
                alt=""
                width="73px"
                height="72px"
              />
            </div>
            <div class="insert">
              <div>收入</div>
              <img
                src="../assets/images/图层 31 拷贝.png"
                alt=""
                width="73px"
                height="72px"
              />
            </div>
          </div>
          <div class="group">
            <div
              style="width: 30px; height: 4px; background-color: #00caff"
            ></div>
            <div class="line"></div>
          </div>

          <div class="carNum">实时进出数据</div>
          <div
            class="list"
            v-for="item in toChild"
            :key="item.index"
            :style="{
              background: item.status === '进口' ? '#06223C' : '#001E22',
            }"
          >
            <!-- :style="{
            #06223C
              background:
                item.status === '进口'
                  ? '#002836'
                  : 'linear-gradient(0deg,#DDC558 0%,#FFFFFF 100%)',
            }" -->
            <!-- :style="{ color: item.status === '进口' ? '#02c2f9' : '#FFD203' }" -->
            <div
              class="listLeft"
              :style="{
                background: item.status === '进口' ? '#062D4B' : '#DDC558',
              }"
            >
              <img
                src="../assets/images/car.jpg"
                alt=""
                width="88px"
                height="57px"
                style="margin-left: 10px"
              />
              <p
                style="
                font-family: FZHTK--GBK1-0;
                <!-- color: item.status == '进口'?'#FFD203':'#FFD203'; -->
                font-size: 11px;
                font-weight: 400;
                line-height: 27px;
                transform: rotate(360deg);
                writing-mode: vertical-rl;
              "
                :style="{
                  color: item.status === '进口' ? '#02c2f9' : '#FFD203',
                }"
              >
                {{ item.status }}
              </p>
            </div>
            <div class="message">
              <!-- 梯形竖条 -->
              <div
                class="trapezoid"
                :style="{
                  'background-color':
                    item.status === '进口' ? '#02c2f9' : '#FFD203',
                }"
              ></div>
              <div class="box">
                <div class="top">
                  <!-- 车牌号 -->
                  <div class="plateNum">{{ item.plateNum }}</div>
                  <!-- 日期 -->
                  <div class="date">{{ item.date }}</div>
                </div>
                <div class="bottom">
                  <!-- 停车点 -->
                  <div class="parking">{{ item.parking }}</div>
                  <!-- 已支付 -->
                  <div class="paid" v-if="item.status == '出口'">
                    {{ item.paid }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group">
            <div
              style="
                width: 30px;
                height: 4px;
                background-color: #00caff;
                margin-left: 20px;
              "
            ></div>
            <div class="line"></div>
          </div>

          <div class="carNum" style="margin-left: 45px">车流量/车位占用率</div>
          <!-- 曲线图 -->
          <div id="curve"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import echarts from 'echarts'
import { getTianqi } from '../utils/api'
export default {
  name: 'HelloWorld',
  props: {
    toChild: Array,
    toCarData: Array
  },
  data () {
    return {
      // 重新赋值，避免破坏原数据
      // dataTypesTemp: this.toChild
      time: '',
      nowTime: null,
      tianqi: ''
    }
  },
  methods: {

    showTime () {
      const date = new Date()
      const year = date.getFullYear()
      let month = date.getMonth() + 1
      // console.log('====', month)
      month = month < 10 ? `0${month}` : month
      let day = date.getDate()
      day = day < 10 ? `0${day}` : day
      // 获取今天是星期几，注意：0为星期天
      const days = date.getDay()
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const week = weeks[days]
      let hour = date.getHours()
      hour = hour < 10 ? `0${hour}` : hour // 用三目运算符调整数字显示格式
      let minute = date.getMinutes()
      minute = minute < 10 ? `0${minute}` : minute
      let second = date.getSeconds()
      second = second < 10 ? `0${second}` : second
      // 加载现在时间
      const current = `${year}年${month}月${day}日 ${week} ${hour}:${minute}:${second}`
      this.nowTime = current
    },
    // 饼图
    drawDD () {
      var myChart = this.$echarts.init(document.getElementById('dd'))
      // total 和 salary的数据就是各个环的数据
      var total = 100
      var salayry1 = 50
      var salayry2 = 30
      var salayry3 = 0
      // 设置饼状图颜色
      // const color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      //   {
      //     offset: 0,
      //     color: '#A0E5FF' // 0% 处的颜色
      //   },
      //   {
      //     offset: 0.05,
      //     color: '#84DDFF'
      //   },
      //   {
      //     offset: 0.13,
      //     color: '#61D3FF'
      //   },
      //   {
      //     offset: 0.22,
      //     color: '#42CBFF'
      //   },
      //   {
      //     offset: 0.31,
      //     color: '#2AC4FF'
      //   },
      //   {
      //     offset: 0.41,
      //     color: '#17BFFF'
      //   },
      //   {
      //     offset: 0.54,
      //     color: '#0ABBFF'
      //   },
      //   {
      //     offset: 0.69,
      //     color: '#02B9FF'
      //   },
      //   {
      //     offset: 1,
      //     color: '#00B9FF' // 100% 处的颜色
      //   }
      // ])
      var option = {
        color: ['#00FFFF', '#00B0FF', '#FFD300'],
        legend: {
          // 图例隐藏
          show: false,
          // orient: 'vertical',
          // left: '10%',
          // top: '20%',
          // itemHeight: 12, // 图例的高度
          // itemGap: 15, // 图例之间的间距
          data: [
            {
              name: 'A版块',
              icon: 'circle',
              textStyle: {
                color: '#D2D3D8' // 单独设置某一个图列的颜色
              }
            },
            {
              name: 'B版块',
              icon: 'circle',
              textStyle: {
                color: '#D2D3D8' // 单独设置某一个图列的颜色
              }
            },
            {
              name: 'C版块',
              icon: 'circle',
              textStyle: {
                color: '#FFD300' // 单独设置某一个图列的颜色
              }
            }
          ]
          // 图例的名字需要和饼图的name一致，才会显示图例
        },
        series: [
          // A版块
          {
            name: 'A版块',
            type: 'pie',
            radius: ['40%', '50%'], // 圆的内圆和外圆
            center: ['30%', '50%'], // x轴和y轴
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            z: 0,
            zlevel: 0,
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            // 线显不显示
            // labelLine: {
            //   normal: {
            //     // show: true,
            //     length: 40 // 第一段表示线
            //   }
            // },

            data: [
              {
                value: salayry1, // 需要显示的数据
                // name: 80 + '%',
                itemStyle: {
                  normal: {
                    color: '#3FBABC'
                  }
                }
              },
              {
                value: total - salayry1,
                // 不需要显示的数据，颜色设置成和背景一样
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#41494E'
                  }
                }
              }
            ]
          },
          // B版块
          {
            name: 'B版块',
            type: 'pie',
            radius: ['20%', '25%'],
            center: ['30%', '50%'],
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            // labelLine: {
            //   normal: {
            //     show: false
            //   }
            // },

            data: [
              {
                value: salayry2, // 需要显示的数据
                // name: salayry2 + '%',
                itemStyle: {
                  normal: {
                    color: '#FFC000'
                  }
                }
              },
              {
                value: total - salayry2,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#081A3C'
                  }
                }
              }
            ]
          },
          // C版块
          {
            name: 'C版块',
            type: 'pie',
            radius: ['0%', '8%'],
            center: ['30%', '50%'],
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: total, // 需要显示的数据
                // name: salayry3 + '%',
                itemStyle: {
                  normal: {
                    color: '#FFD300'
                  }
                }
              },
              {
                value: salayry3,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#081A3C'
                  }
                }
              }
            ]
          },
          // 仪表盘
          {
            name: '',
            type: 'gauge',
            radius: '40%',
            center: ['30%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            splitNumber: 40,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: -12,
              lineStyle: {
                width: 3,
                color: '#062340'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0,
                name: ''
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    // 饼图
    drawYS () {
      var myChart = this.$echarts.init(document.getElementById('ys'))
      // total 和 salary的数据就是各个环的数据
      var total = 100
      var salayry1 = 50
      var salayry2 = 30
      var salayry3 = 0
      var option = {
        color: ['#3FBABC', '#00FFFF', '#00B0FF', '#FFD300'],
        series: [
          // S版块
          {
            name: 'S版块',
            type: 'pie',
            radius: ['65%', '50%'], // 圆的内圆和外圆
            center: ['50%', '50%'], // x轴和y轴
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            // splitNumber: 20, // 分成20个小分隔
            z: 0,
            zlevel: 0,
            // 环的位置
            label: {
              // show: false,
              position: 'center'
            },
            // 线显不显示
            // labelLine: {
            //   normal: {
            //     length: 40 // 第一段表示线
            //   }
            // },

            data: [
              {
                value: total, // 需要显示的数据
                // name: 80 + '%',
                itemStyle: {
                  normal: {
                    color: '#00C7FF'
                  }
                }
              },
              {
                value: total - total,
                // 不需要显示的数据，颜色设置成和背景一样
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#41494E'
                  }
                }
              }
            ]
          },
          // A版块
          {
            name: 'A版块',
            type: 'pie',
            radius: ['30%', '40%'], // 圆的内圆和外圆
            center: ['50%', '50%'], // x轴和y轴
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            z: 0,
            zlevel: 0,
            // 环的位置
            label: {
              // show: false,
              position: 'center'
            },
            // 线显不显示
            labelLine: {
              normal: {
                length: 40 // 第一段表示线
              }
            },
            data: [
              {
                value: salayry1, // 需要显示的数据
                // name: 80 + '%',
                itemStyle: {
                  normal: {
                    color: '#3FBABC'
                  }
                }
              },
              {
                value: total - salayry1,
                // 不需要显示的数据，颜色设置成和背景一样
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#41494E'
                  }
                }
              }
            ]
          },
          // B版块
          {
            name: 'B版块',
            type: 'pie',
            radius: ['20%', '25%'],
            center: ['50%', '50%'],
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            z: 0,
            zlevel: 0,
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: salayry2, // 需要显示的数据
                // name: salayry2 + '%',
                itemStyle: {
                  normal: {
                    color: '#FFC000'
                  }
                }
              },
              {
                value: total - salayry2,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#081A3C'
                  }
                }
              }
            ]
          },
          // C版块
          {
            name: 'C版块',
            type: 'pie',
            radius: ['0%', '8%'],
            center: ['50%', '50%'],
            silent: true, // 点击图不变大
            clockwise: true, // 饼图的扇区是否是顺时针排布
            startAngle: 90, // 起始角度，支持范围[0, 360]
            z: 0,
            zlevel: 0,
            // 环的位置
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: total, // 需要显示的数据
                // name: salayry3 + '%',
                itemStyle: {
                  normal: {
                    color: '#FFD300'
                  }
                }
              },
              {
                value: salayry3,
                // 不需要显示的数据，颜色设置成和背景一样
                itemStyle: {
                  normal: {
                    color: '#081A3C'
                  }
                }
              }
            ]
          },
          // 仪表盘
          {
            name: '',
            type: 'gauge',
            radius: '65%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            splitNumber: 13,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 18,
              lineStyle: {
                width: 4,
                color: '#062340'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0,
                name: ''
              }
            ]
          },
          {
            name: '',
            type: 'gauge',
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            splitNumber: 60,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: -12,
              lineStyle: {
                width: 2,
                color: '#062340'
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0,
                name: ''
              }
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    // 曲线图
    drawChart () {
      var myEchart = this.$echarts.init(document.getElementById('curve'))
      var option = {
        // legend: { data: ['车流量', '占用率'] },
        legend: {
          orient: 'horizontal',
          show: true,
          x: 'right', // 可设定图例在左、右、居中
          y: 'top', // 可设定图例在上、下、居中
          padding: [0, 50, 0, 0], // 可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          textStyle: {
            color: ['#B1AF6A', '#5FB3C1']
          },
          icon: 'rect',
          itemHeight: 3,
          itemWidth: 15
          // data: ['车流量', '占用率']
        },
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisTick: {
            // x轴刻度线
            show: false
          },
          axisLine: {
            // y轴
            show: false
          },
          // 字体颜色
          axisLabel: {
            textStyle: {
              color: '#FFFFFF'
            }
          }
        },
        yAxis: {
          type: 'value',
          // 字体颜色
          axisLabel: {
            textStyle: {
              color: '#FFFFFF'
            }
          },
          axisTick: {
            // y轴刻度线
            show: false
          },
          axisLine: {
            // y轴
            show: false
          },
          // 网格线改成虚线
          splitLine: {
            lineStyle: {
              type: 'dashed', // 虚线
              color: '#425863'
            },
            show: true // 隐藏
          }
        },
        series: [
          //
          {
            name: '车流量',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            symbol: 'circle', // 主要是这里影响横线上的形状
            // stack: 'Total',//此处注释掉
            // 去掉小点
            showSymbol: false,
            // 线的颜色
            lineStyle: {
              color: '#B1AF6A'
            },
            // textStyle: {
            //   color: '#B1AF6A'
            // },
            color: '#B1AF6A',
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                // 三种由深及浅的颜色
                [
                  {
                    offset: 0,
                    color: '#B1AF6A'
                  },
                  {
                    offset: 1,
                    color: '#55A5A9'
                  }
                ]
              ),
              // color: "#B1AF6A",
              opacity: 0.8
            },
            emphasis: {
              focus: 'series'
            },
            data: [60, 50, 95, 99, 102, 130, 120, 140, 110, 105, 115, 149]
          },
          {
            name: ' 占用率',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            symbol: 'circle', // 主要是这里影响横线上的形状
            // 去掉小点
            showSymbol: false,
            // 线的颜色
            lineStyle: {
              color: '#5FB3C1'
            },
            color: '#5FB3C1',
            // stack: 'Total',//此处注释掉
            // textStyle: {
            //   color: '#5FB3C1'
            // },
            emphasis: {
              focus: 'series'
            },
            areaStyle: {
              // color: '#',
              color: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                // 三种由深及浅的颜色
                [
                  {
                    offset: 0,
                    color: '#5FB3C1'
                  },
                  {
                    offset: 1,
                    color: '#265E84'
                  }
                ]
              ),
              opacity: 0.8
            },
            // itemStyle: {
            //   normal: {
            //     label: {
            //       show: true,
            //       position: 'right'
            //     }
            //   }
            // },
            data: [15, 16, 155, 52, 50, 38, 70, 10, 55, 50, 38, 47]
          }
          // 车流量和占用率

          // type: 'line',
          // smooth: true, // 曲线(平滑的直线)
          // symbol: 'none',
          // stack: 'Total',
          // areaStyle: {
          //   color: '#344CE9',
          //   opacity: 0.5
          // }
        ]
      }
      myEchart.setOption(option)
    }
  },
  created () {
    // this.getTianqi()
    getTianqi().then(res => {
      console.log(res.data)
      var tem = res.data.tem
      console.log(tem, '111')
      var wea = res.data.wea
      console.log(wea, '222')
      this.tianqi = wea + '' + tem
    })
  },
  mounted () {
    this.drawChart()
    this.drawDD()
    this.drawYS()
    this.$nextTick(() => {
      setInterval(this.showTime, 1000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  // line-height: 1.15;
  background-color: black;
  z-index: 1;
  position: absolute;
  width: 120rem;
  height: 66.6875rem;
  top: 0;
  left: 0;
  width: 100%;
  .header {
    width: calc(100% - 113px);
    height: 7.8125rem;
    margin: 0 auto;
    display: flex;
    background: url("../assets/images/line.png") 50% 60% no-repeat;
    background-size: 112%;
    // background-color: red;
    position: relative;
    .headerLeft {
      flex: 3;
      // background-color: yellow;
      height: 3.75rem;
      // border-bottom: 1px solid #37C3EA;
    }
    .headerCenter {
      flex: 5;
      // background-color: blue;
      height: 90px;
      line-height: 90px;
      // background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      // border-bottom: 1px solid #37C3EA;
      h1 {
        font-family: FZHTK--GBK1-0;
        color: #fefefe;
        font-size: 2.375rem;
        letter-spacing: 0.3125rem;
        margin-left: 1rem;
      }
    }
    .headerRight {
      flex: 3;
      // background-color: blue;
      height: 3.75rem;
      // border-bottom: 1px solid #37C3EA;
    }
    // background-color: red;
    // header: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    .boxLeft {
      width: 25rem;
      height: 1.25rem;
      // background-color: red;
      position: absolute;
      bottom: 25px;
      left: 30px;
      // background-color: red;
      .place {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        // background-color: red;
        img {
          background-repeat: no-repeat;
        }
      }
    }
    .boxRight {
      width: 20rem;
      height: 1.25rem;
      position: absolute;
      right: 100px;
      bottom: 25px;
      // background-color: yellow;
    }
  }
  .center {
    width: 100%;
    height: 55.3125rem;
    z-index: 9999;
    .floatLeft {
      width: 27.6875rem;
      height: 885px;
      float: left;
      background-color: #040404;
      // z-index: 999;
      .total {
        margin-left: 3.4375rem;
        // background-color: yellow;
        .group {
          display: flex;
          align-items: center;
          position: relative;
          .line {
            width: 24.375rem;
            position: absolute;
            top: 50%;
            left: 30px;
            height: 2px;
            margin-left: 4px;
            // background-color: #aaa;
            background-color: #40484b;
          }
        }
        .carNum {
          // width: 204px;
          height: 1.4375rem;
          text-align: left;
          margin-left: 2rem;
          font-family: FZHTK--GBK1-0;
          font-weight: 400;
          color: #02c2fa;
          font-size: 1.1319rem;
        }
        .totalCar {
          margin: 0.875rem 0 0 0.8125rem;
          // background-color: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            .num {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            img {
              width: 7.8125rem;
              height: 4.4375rem;
              border: 0;
            }
          }
        }
        .chargeData {
          // height: 7.5rem;
          display: flex;
          justify-content: flex-start;
          // background-color: red;
          .orderGoods {
            width: 11.625rem;
            height: 9.8125rem;
            // background-color: red;
          }
          .revenue {
            width: 11.5625rem;
            height: 9.9375rem;
            // background-color: yellow;
          }
        }
        .totalAmount {
          width: calc(443 - 89) px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .item {
            // background-color:yellow;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 13.58px;
            .piece {
              width: 12px;
              height: 12px;
            }
          }
        }
        .outside {
          width: calc(443px - 70px);
          height: 17.0625rem;
          font-size: 0.875rem;
          // background-color: red;
          .list {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 3.125rem;
            .schedule {
              display: flex;
              flex-direction: column;
              flex: 2.5;
              // background-color: red;
              height: 2.5rem;
              justify-content: space-around;
              .today {
                // width: 100px;
                border-radius: 6px;
                height: 6px;
                background-color: #02c2fa;
              }
              .thisWeek {
                // width: 180px;
                border-radius: 6px;
                height: 6px;
                background-color: #53cee7;
              }
            }
          }
          .change {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 0 auto;
            margin-top: 20px;
            width: calc(443px - 160px);
            // background-color: #fff;
            .item {
              // background-color: #fff;
              flex: 1;
              display: flex;
              align-items: center;
              .coo {
                width: 7px;
                height: 7px;
              }
            }
          }
        }
      }
    }
    .floatCenter {
      width: 48rem;
      height: 5rem;
      // background-color: red;
      float: left;
      margin-left: 130px;
      display: flex;
      // background-color: red;
      letter-spacing: 2px;
      font-size: 18.11px;
      font-family: FZHei-B01;
      font-weight: 400;
      .number {
        display: flex;
        margin-left: 106px;
        // align-items: center;
        span {
          background: linear-gradient(
            0deg,
            #82e0fa 0%,
            #26bce6 48%,
            #8de1f8 100%
          );
          width: 18px;
          height: 26px;
          color: #000;
          margin-left: 4px;
          font-size: 23px;
          line-height: 26px;
        }
      }
      .money {
        display: flex;
        margin-left: 16px;
        span {
          background: linear-gradient(
            0deg,
            #f8f0cb 0%,
            #f9e496 16%,
            #fbe07c 100%
          );
          width: 18px;
          height: 26px;
          color: #000;
          margin-left: 4px;
          font-size: 23px;
          line-height: 26px;
        }
      }
    }
    .floatRight {
      width: 31.875rem;
      height: 55.3125rem;
      float: right;
      background-color: #040404;
      // background-color: red;
      .total {
        // background-color: yellow;
        .group {
          display: flex;
          align-items: center;
          position: relative;
          .line {
            top: 50%;
            width: 25rem;
            height: 2px;
            background-color: #40484b;
            // left: 52px;
          }
        }
        .carNum {
          // width: 204px;
          height: 2.125rem;
          text-align: left;
          margin-left: 1.875rem;
          font-family: FZHTK--GBK1-0;
          color: #02c2fa;
          font-size: 1.1319rem;
        }
        // 先不动
        .healthIndex {
          height: 17.5rem;
          // background-color: yellow;
          position: relative;
          .escape {
            position: absolute;
            left: 55px;
            top: 1.6875rem;
            div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2.0625rem;
              height: 1.0625rem;
              font-family: FZHTK--GBK1-0;
              color: #ffffff;
              font-size: 0.8488rem;
            }
          }
          .service {
            position: absolute;
            right: 150px;
            top: 0;
            div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2.0625rem;
              height: 1.0625rem;
              font-family: FZHTK--GBK1-0;
              color: #ffffff;
              font-size: 0.8488rem;
            }
          }
          .index {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 3rem;
            img {
              box-shadow: none;
            }
            div {
              position: absolute;
              top: 32%;
              left: 51%;
              transform: translate(-50%, -50%);
              width: 4.3125rem;
              height: 1.6875rem;
              font-family: FZHTK--GBK1-0;
              color: #95e2f9;
              font-size: 1.6981rem;
            }
          }
          .order {
            position: absolute;
            left: 52px;
            bottom: 2.0625rem;
            div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2.0625rem;
              height: 1.0625rem;
              font-family: FZHTK--GBK1-0;
              color: #ffffff;
              font-size: 0.8488rem;
            }
          }
          .insert {
            position: absolute;
            bottom: 4.875rem;
            right: 90px;
            div {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 2.0625rem;
              height: 1.0625rem;
              font-family: FZHTK--GBK1-0;
              color: #ffffff;
              font-size: 0.8488rem;
            }
          }
        }
        .list {
          width: 27.6875rem;
          // background-color: red;
          height: 4.9375rem;
          margin-left: 1.25rem;
          display: flex;
          align-items: center;
          margin-bottom: 11px;
          .listLeft {
            display: flex;
            height: 100%;
            align-items: center;
            opacity: 0.8;
          }
          .message {
            width: 20.75rem;
            height: 5.5625rem;
            // margin-right: 33px;
            display: flex;
            align-items: center;
            .trapezoid {
              width: 6px;
              height: 60px;
              margin-left: 1px;
              transform: perspective(0.5em) rotateY(12deg);
              // background-color: #02c2f9;
            }
            .box {
              display: flex;
              flex-direction: column;
              align-content: space-between;
              .top {
                // background-color: red;
                display: flex;
                justify-content: flex-start;
                font-size: 14px;
                font-family: FZHei-B01;
                font-weight: 400;
                color: #ffffff;
                .plateNum {
                  margin-left: 1.625rem;
                }
                .date {
                  margin-left: 3.0625rem;
                }
              }
              .bottom {
                font-size: 14px;
                font-family: FZHei-B01;
                font-weight: 400;
                color: #ffffff;
                margin-top: 0.6875rem;
                // background-color: yellow;
                display: flex;
                justify-content: flex-start;
                .parking {
                  margin-left: 1.625rem;
                }
                .paid {
                  margin-left: 2.0625rem;
                }
              }
            }
          }
        }
        #curve {
          width: 30.625rem;
          height: 14rem;
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
