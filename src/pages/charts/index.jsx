import React, { Component } from 'react'
import echarts from 'echarts'
import './style.less'

export default class Charts extends Component {
  componentDidMount() {
    var myChart = echarts.init(this.refs.box1);
    var myChart1 = echarts.init(this.refs.box2);
    var myChart2 = echarts.init(this.refs.box3);
    var myChart3 = echarts.init(this.refs.box4);
    var option = {
      title: {
        text: 'Line Chart'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    };
    var option1 = {

      title: {
        text: ' Bar Chart'
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    var option2 = {
      title: {
        text: 'Area Chart'
      },

      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };
    var option3 = {
      title: {
        text: 'Doughnut Chart'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    };
    myChart.setOption(option);
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
  }

  render() {
    return (
      <div className="pages-chart" ref="charts">
        <div className="chart-box" ref="box1"></div>
        <div className="chart-box" ref="box2"></div>
        <div className="chart-box" ref="box3"></div>
        <div className="chart-box" ref="box4"></div>
      </div>
    )
  }
}
