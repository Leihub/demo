import styled from 'styled-components'

export const AddWrapper = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:25;
  background:#f5f5f5
`
export const InputWrapper = styled.div`
  padding:0 15px;
  color:#969696;
  background:#fff;
`

export const InputArea = styled.textarea.attrs({
})`
  height:280px;
  width:100%;
  padding-top:10px;
  font-size:15px;
  outline:none;
  border:none; 
  &.placeholder{
    color:#777;
  }
`

export const Input = styled.input.attrs({
  placeholder: '添加标题'
})`
  width:100%;
  font-size:18px;
  line-height:45px;
  outline:none;
  border:none;
  border-bottom:1px solid #cfcfcf;
  
`
export const ButtonWrapper = styled.div`
  display:flex;
  width:100%;
  padding:0 40px;
  margin-top:35px;
  box-sizing:border-box;
  justify-content:space-between;

`
export const Button = styled.button`
  height:40px;
  width:100px;
  border:none;
  border-radius:5px;
  color:#fff;
  font-size:15px;
  &.cancel{
    background:#acabab;
  }
  &.send{
    background:#0ab00a;
  }
`

