import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  padding-top:30px;
  z-index:25;
  background:#f5f5f5;
  h4{
    margin-bottom:25px;
    text-align:center;
    font-size:25px;
    color:#0ab00a;
  }  
  .action{
    padding-right:25px;
    text-align:right;
    font-size:12px;
  }
  
`

export const Input = styled.input`
  display:block;
  width:325px;
  height:45px;
  margin:0 auto 15px;
  padding:0 15px;
  box-sizing:border-box;
  font-size:14px;
  border:none;
  border-radius:5px;
`
export const LoginButton = styled.button`
  display:block;
  width:325px;
  height:45px;
  margin:40px auto 0;
  padding:0 15px;
  box-sizing:border-box;
  font-size:16px;
  color:#fff;
  background:#0ab00a;
  border:none;
  border-radius:5px;
`