import React, { Component } from 'react'
import { LoginWrapper,Input,LoginButton } from './style'
import {connect} from 'react-redux'
class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <h4>欢迎登录</h4>
        <Input placeholder="用户名/邮箱"></Input>
        <Input placeholder="登录密码"></Input>
        <p className="action">忘记密码</p>
        <LoginButton>
          立即登录
        </LoginButton>
      </LoginWrapper>        
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    // account: state.login.account
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)