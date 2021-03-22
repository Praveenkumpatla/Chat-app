import React from 'react';

function Contact(props){
    return (<button className="row text-light how p-3 " onClick={() => props.back(props.data)} style={{width:"100%"}}>
    <div className="col-3"><img src={props.data.userimg} style={{height:"50px",width:"50px",borderRadius:"90px"}}></img></div>
    <div className="col-9 text-left"><h5><span>{props.data.username}</span></h5><span className="pb-3">{props.data.conversation[props.data.conversation.length-1].slice(2,props.data.conversation[props.data.conversation.length-1].length)}</span></div>
    </button>
    )
}

export default Contact;