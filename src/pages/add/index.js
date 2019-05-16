import React, { Component } from 'react'
import { AddWrapper,InputArea,Input,InputWrapper,ButtonWrapper,Button } from './style'
import {connect} from 'react-redux'
import {setTitle, setContent} from './store/actionCreator'
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css'
import Modal from 'antd-mobile/lib/modal';
import 'antd-mobile/lib/modal/style/css'
import axios from 'axios'
class Add extends Component {
  constructor(props){
    super(props)
    this.postData = this.postData.bind(this)
    this.cancel = this.cancel.bind(this)
  }
  render() {
    const {title,content,handleTitleChange,handleContentChange} = this.props
    return (
      <AddWrapper>
        <InputWrapper>
          <Input onChange={(e) => {handleTitleChange(e)}} value={title}></Input>
          <InputArea className="placeholder" value={content} onChange={(e) => {handleContentChange(e)}}></InputArea>
        </InputWrapper>
        <ButtonWrapper>
          <Button className="cancel" onClick={this.cancel}>取消</Button>
          <Button className="send" onClick={this.postData}>发表</Button>
        </ButtonWrapper>
      </AddWrapper>
    )
  }
  cancel(){
    this.props.history.go(-1)
  }
  postData(){
    const {title,content} = this.props
    if(!title) {Toast.info('请输入标题', 1);return}
    if(!content) {Toast.info('请输入内容', 1);return}
    axios.post('http://localhost:3001/api/add',JSON.stringify({content,title}),{
      headers:{
        "Content-Type":"text/plain"
      }
    })
    .then(res => {
      console.log(res);
      Toast.success('发表成功', 1,()=>{
        window.location.href = '/index'
      });
    })
    .catch(err => {
      alert(err)
    })
  }
}
const mapStateToProps = (state) => {
  return {
    title:state.add.title,
    content:state.add.content
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTitleChange(e){
      dispatch(setTitle(e.target.value))
    },
    handleContentChange(e){
      dispatch(setContent(e.target.value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add)