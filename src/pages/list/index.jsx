import React, { Component } from 'react'
import { Pagination } from 'antd';
import { post } from '@/utils/request'
import './style.less'

export default class List extends Component {
  state = {
    datalist: [],
    count: 0
  }

  componentDidMount () {
    post('https://blogs.zdldove.top/Home/Apis/listWithPage',{page: 1})
      .then(res => {
        this.setState({
          datalist: res.result.list,
          count:parseInt(res.result.count)
        })
      })
  }

  fn = (e) => {
    post('https://blogs.zdldove.top/Home/Apis/listWithPage',{page: e})
      .then(res => {
        this.setState({
          datalist: res.result.list
        })
      })
  }

  render() {
    const { datalist = [], count } = this.state;
    return (
      <div className="pages-list">
        <div>
          {
            datalist.map(v => {
              return (
                <dl key={v.id}>
                  <dt>{v.title}</dt>
                  <dd><span><img src={v.thumb} alt="" /></span><span>{v.tags}</span></dd>
                </dl>
              )
            })
          }
        </div>
        <div>
          <Pagination defaultCurrent={1} total={count} defaultPageSize={20} onChange={(e) => this.fn(e)} />
        </div>
      </div>
    )
  }
}
