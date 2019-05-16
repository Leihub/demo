import React, { Component } from 'react'
import logo from './../../static/logo.png'
import styles from './style'
import * as constants from './store/constants'
import { connect } from 'react-redux'
import { getTieList } from './store/actionCreator'
import {NavLink} from 'react-router-dom'

class Index extends Component {
  constructor(props){
    super(props)
    this.props.getInitList()
  }
  render() {
    const { tieList } = this.props
    const listUI = tieList.length > 0 ? (
      tieList.map(item => {
        return (
          <li style={styles.listItem} key={item._id}>
            <img src={item.avatar} alt="avatar" style={styles.avatar} />
            <div style={styles.info}>
              <p>{item.nickname}</p>
              <p style={styles.grey}>{item.content}</p>
            </div>
          </li>
        )
      })
    ) : (
      <div style={styles.info}>
        没有数据哦
      </div>
    );
    return (
      <div style={styles.index}>
        <ul style={styles.list}>
          {listUI}
        </ul>
        <NavLink  to="/add"><p style={styles.add}><i className="iconfont">&#xe6a7;</i></p></NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tieList: state.index.tieList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInitList() {
      dispatch(getTieList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)