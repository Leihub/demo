import React from 'react'
import { FooterWrapper, FooterItem } from './style'
import { BrowserRouter as Router, Route, NavLink  } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterWrapper>
      <NavLink to="/" exact activeClassName="active">
        <FooterItem >
          <i className="iconfont">&#xe677;</i>
          首页
        </FooterItem>
      </NavLink >
      <NavLink to="/my" exact activeClassName="active">
        <FooterItem>
          <i className="iconfont">&#xe606;</i>
          我的
        </FooterItem>
      </NavLink >
    </FooterWrapper>
  )
}
export default Footer