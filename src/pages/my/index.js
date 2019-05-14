import React, { Component } from 'react'
import styles from './style'
import logo from './../../static/logo.png'

class My extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div style={styles.my_wrapper}>
        <div style={styles.my_top}>
            <img src={logo} alt="" style={styles.avatar}/>
            <div style={styles.info_wrapper}>
                <div style={styles.info}>
                    <p style={styles.name}>jack</p>
                    <div>
                        <span>关注 0</span>
                        <span>被关注 0</span>
                    </div>
                </div>
                <div style={styles.module}>
                    <div style={styles.moduleItem}>
                        <i className="iconfont" style={{fontSize:'20px'}}>&#xe667;</i>
                        <span style={styles.bot}>2</span>
                    </div>
                    <div style={styles.moduleItem}>
                        <i className="iconfont" style={{fontSize:'20px'}}>&#xe667;</i>
                        <span style={styles.bot}>2</span>
                    </div>
                    <div style={styles.moduleItem}>
                        <i className="iconfont" style={{fontSize:'20px'}}>&#xe667;</i>
                        <span style={styles.bot}>2</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={styles.list}>
            <div style={styles.listItem}>
                <i className="iconfont" style={{color:'#9c27b0',marginRight:'10px',fontSize:'18px'}}>&#xe61c;</i>
                看电影
            </div>
        </div>
        <div style={styles.list}>
            <div style={styles.listItem}>
                <i className="iconfont" style={{color:'#777',marginRight:'10px',fontSize:'17px'}}>&#xe615;</i>
                我的发布
            </div>
            <div style={styles.listItem}>
                <i className="iconfont" style={{color:'#777',marginRight:'10px',fontSize:'17px'}}>&#xe64d;</i>
                我的日记
            </div>
        </div>
        <div style={styles.list}>
            <div style={styles.listItem}>
                <i className="iconfont" style={{color:'#777',marginRight:'10px',fontSize:'17px'}}>&#xe64d;</i>
                我的日记
            </div>
        </div>
      </div>
    )
  }
}

export default My