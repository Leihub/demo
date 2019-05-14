const styles = {
    index:{
        position:'absolute',
        top:'0',
        bottom:'45px',
        left:0,
        right:0,
        background:'#f5f5f5',
    },
    list:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        overflow:'scroll'
    },
    listItem:{
        display:'flex',
        margin:'10px 0',
        padding:'15px 10px',
        alignContent:'center',
        background:'#fff',
    },
    avatar:{
        width:'50px',
        height:'50px',
        marginRight:'15px',
        borderRadius:'100px'
    },
    info:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
    },
    grey:{
        overFlow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace: 'nowrap',
        color:'#969696'
    },
    add:{
        position:'absolute',
        bottom:'40px',
        right:'20px',
        width:'40px',
        height:'40px',
        fontSize:'20px',
        background:'#0ab00a',
        color:'#fff',
        lineHeight:'38px',
        textAlign:'center',
        borderRadius:'50px'
    }
}
export default styles