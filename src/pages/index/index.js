import React, { Component } from 'react'
import logo from './../../static/logo.png'
import styles from './style'

class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.index}>
        <ul style={styles.list}>
          {
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(item => {
              return (
                <li style={styles.listItem}>
                  <img src={logo} alt="avatar" style={styles.avatar} />
                  <div style={styles.info}>
                    <p>jack</p>
                    <p style={styles.grey}>hello world !</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <p style={styles.add}><i className="iconfont">&#xe6a7;</i></p>
      </div>
    )
  }
}

export default Index