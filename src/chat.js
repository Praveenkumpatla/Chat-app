import React, { useState } from 'react';

function Chat(props){
    var count=0;
    var present = <div>{
        props.hell.map((item)=>{
        if(item.slice(0,2)=="o:")
        return (<div className="row text-left m-3"><div className="col"><span className="p-2" style={{borderRadius:"20px",backgroundColor:"white"}}>{item.slice(2,item.length)}</span><img className="mr-2" style={{height:"20px",width:"20px",borderRadius:"90px"}} src={props.data.userimg}></img></div></div>)
        else
        return (<div className="row text-right m-3"><div className="col"><img className="ml-2" style={{height:"20px",width:"20px",borderRadius:"90px"}} src="https://lh3.googleusercontent.com/ogw/ADGmqu_5AVdAJ-RxJJQqXrKrVnftaktClkAk7abO2RFH=s64-c-mo"></img><span className="p-2" style={{borderRadius:"20px",backgroundColor:"rgb(32, 32, 54)",color:"white"}}>{item.slice(2,item.length)}</span></div></div>)
        })}</div>

    console.log(present);
    var [init,refer] = useState();
    
    function fact(){
        count++;
        present = <div>{
            props.hell.map((item)=>{
            if(item.slice(0,2)=="o:")
            return (<div className="row text-left m-3"><div className="col"><span className="p-2" style={{borderRadius:"20px",backgroundColor:"white"}}>{item.slice(2,item.length)}</span><img className="mr-2" style={{height:"20px",width:"20px",borderRadius:"90px"}} src={props.data.userimg}></img></div></div>)
            else
            return (<div className="row text-right m-3"><div className="col"><img className="ml-2" style={{height:"20px",width:"20px",borderRadius:"90px"}} src="https://lh3.googleusercontent.com/ogw/ADGmqu_5AVdAJ-RxJJQqXrKrVnftaktClkAk7abO2RFH=s64-c-mo"></img><span className="p-2" style={{borderRadius:"20px",backgroundColor:"rgb(32, 32, 54)",color:"white"}}>{item.slice(2,item.length)}</span></div></div>)
            })}</div>
            refer(present);
    }

    function foo(){
        if(count==0)
        return present;
        else
        return init;
    }

    return (<><div className="row mt-1 mb-1">
        <div className="col-1"><img src={props.data.userimg} style={{height:"50px",width:"50px",borderRadius:"90px"}}></img></div>
        <h5 className="col-9 text-left mt-2"><span>{props.data.username}</span></h5>
        <div className="mt-2"><i class="fab fa-facebook-f ml-2"> </i><i class="fab fa-twitter ml-2"> </i><i class="fab fa-instagram ml-2"> </i></div>
        </div>
        <div className="row overflow-auto convt editscrolled" style={{height:"413px",backgroundColor:"rgb(228, 233, 238)"}}>
            <div className="col convts">
                <div>{foo()}</div>
            </div>
        </div>
        <div className="row"><input className="col-10 form-control" placeholder="Enter your message.."></input><button className="col-1 btn" style={{backgroundColor:"rgb(228, 233, 245)",color:"rgb(32, 32, 54)"}}><i class="fas fa-paperclip"></i></button>
        <button className="col-1 btn" style={{backgroundColor:"rgb(32, 32, 54)",color:"white"}} onClick={()=>{
            var msg = "s: " + document.getElementsByClassName("col-10")[0].value;
            props.data.conversation.push(msg);
            document.getElementsByClassName("col-10")[0].value ="";
            fact();
        }}><i class="fas fa-paper-plane"></i></button></div>
        </>
    )
}

export default Chat;