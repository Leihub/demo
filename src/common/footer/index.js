import React from 'react'
import { FooterWrapper, FooterItem } from './style'
import { BrowserRouter as Router, Route, NavLink  } from 'react-router-dom'
import Index from '../../pages/index'
import My from '../../pages/my'
import Add from '../../pages/add'


const Footer = () => {
  return (
    <Router>
      <FooterWrapper>
        <NavLink to="/index" activeClassName="active">
          <FooterItem >
            <i className="iconfont">&#xe677;</i>
            首页
          </FooterItem>
        </NavLink >
        <NavLink  to="/my" activeClassName="active">
          <FooterItem>
            <i className="iconfont">&#xe606;</i>
            我的
          </FooterItem>
        </NavLink >
      </FooterWrapper>
      <Route path="/index" exact component={Index} />
      <Route path="/my" component={My} />
      <Route path="/add" component={Add} />
    </Router>
  )
}
export default Footer