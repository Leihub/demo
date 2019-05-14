import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display:flex;
  position:fixed;
  bottom:0;
  left:0;
  z-index:23;
  width:100%;
  height:45px;
  justify-content:space-between;
  align-content:center;
  background:#fff;
  a{
    display:block;
    flex:1;
    text-decoration:none;
    ouline:none;
    color:#777;
    &.active{
      color:#0ab00a;
    }
  }
`
export const FooterItem = styled.div`
  text-align:center;
  line-height:45px;
  font-size:14px;
  border-top:1px solid #eee;
  position:relative;
  .iconfont{
    margin-right:3px;
  }
  &:last-child::before{
    content:'';
    position:absolute;
    left:0;
    top:50%;
    width:1px;
    height:18px;
    margin-top:-9px;
    background:#ddd;
  }

`