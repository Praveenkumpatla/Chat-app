import { useState } from 'react';
import Contact from './contact';
import Chat from './chat';

var owner = {username:"Praveen kumar kumpatla",userimg:"https://lh3.googleusercontent.com/ogw/ADGmqu_5AVdAJ-RxJJQqXrKrVnftaktClkAk7abO2RFH=s64-c-mo"}

var contactsdata = [{username:"Vijay Thalapathy",conversation:["o: Hey dude, what’s up","s: Nothing much buddy. How’s everything with you","o: All good. Yesterday I went to a 7-star Hotel restaurant.",
"s: Wow, that’s amazing buddy. I missed it.","o: when will you come chennai.","s: May be, soon",
"o: Anything, special","s: Nothing","o: Would you like to have a roll in my movie ",
"s: Yes.......,sounds exicting","o: I'll ping you later, it's time for shoot.  ","s: ok"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O6ISA_xEdXhum0HkAAxeoEATDgRdYhZd6w&usqp=CAU"},
  {username:"Pawan kalyan",conversation:["o: Hi Praveen, what's up","o: what are you doing now","s: I'm learning course","o: what course it is",
  "s: Full stact Development","o: ohh, nice"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsTbo84b3bDzGXDKjCE8iKWnxEsI4IzTb_g&usqp=CAU"},
  {username:"Keerthi",conversation:["o: Hi,Praveen","s: Hi keerthi, after a long time","o: Yeah dude, where do you live now"
  ,"s: With my parents","o: Where do your parents live","s: With me","o: Where do you all live"
  ,"s: Together","o: Dude don’t joke","s: I’m not joking dude","o: Ok, now tell me, where is your house","s: Next to my neighbor’s house"
  ,"o: Where is your neighbor’s house","s: Next to my house","o: Grrrrrrr"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuN4WEsRU44JwhD7e3Tv4Y058hEsn6CqNDw&usqp=CAU"},
  {username:"Mahesh babu",conversation:[ "o: Hi Praveen how are you","s: I’m doing well. How are you","o: I’m doing great","o: I just wanna ask you a question",
  "s: Sure buddy","o: My Girlfriend typed IDK and TTYL. What is that mean","s: I Don’t Know. Talk To You Later",
  "o: Ok, I will ask you whenever you are free"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaXwYNiGBECOpaNsa0nQAss3uRoVUThsLJA&usqp=CAU"},
  {username:"Ajith",conversation:["o: Hello, Praveen!","s: Hi, thala ji! ","o: Are you free this weekend","s: I think so, why"
  ,"o: Want to see a movie","s: Sure","o: Great!"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1GVMw1taR_y2O0kSPO8YWAxL6y1SYYdmpA&usqp=CAU"},
  {username:"Brahmanandam Ji",conversation:["o: Hi Praveen","s: Hello Sir","o: I need some help","s: oh..,sure what can i do for you","o: will you bring some medicine's for me","wait Sir, I'm coming to you"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9BUtnVQj_NcQwy25dJwxGTiWNUVk7l1AMA&usqp=CAU"},
  {username:"Yash",conversation:["o: Hi","s: hello","o: How are you bro","s: Im fine, what about you bro","o: good"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99gD0NAokMugSe1hV0vQmaa9FNiS0wUkzJA&usqp=CAU"},
  {username:"Surya",conversation:["o: Hi Praveen","s: Hello bro","o: I'm coming to vijayawada","s: when bro","o: I'm already started","I'm looking forword for you.."],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVfiSvViu-Kx9LAn8bEPdRsgEO1qAb9ia0A&usqp=CAU"},
  {username:"Trump",conversation:["o: Hi Praveen","s: Hello Sir","o: I'm looking forward for your visit","s: ohoo..","o: When will you come","s:soon"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlANgXYPU4fKnoT35388_IfnW7daWpxlm7Q&usqp=CAU"},
  {username:"Lisa Blink",conversation:["s: lisa, I have a bad news","o: Me too","s: What’s that"
  ,"o: Jung cheated on me","s: Oh, then I have a good news","o: What","s: I hit him with my car"],userimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOViTanp3lDbs2aKEgd_xIHtCT5kawd8-VMQ&usqp=CAU"},
];

var count =2;

function App() {
  const [present,modifie] = useState(<div className="text-center"><i><h3>Welcome to Guvi Chat's</h3></i></div>);
  const [pulled,pushed] = useState(<div></div>);
  const [arrowup,arrowdown] = useState(<i class="fas fa-angle-up text-secondary"></i>)
  function pushbar(){
    if(count%2==0){
    arrowdown(<i class="fas fa-angle-down text-secondary"></i>);
    count++;
    pushed(<><input className="mb-1 search" style={{width:"100%",color:"white"}}></input>
    <input className="mb-1 search" style={{width:"100%",color:"white"}}></input>
    <input className="mb-1 search" style={{width:"100%",color:"white"}}></input>
    </>)}
    else{
      arrowdown(<i class="fas fa-angle-up text-secondary"></i>);
    count++;
    pushed(<div></div>)
    }
  }

  function conv(strp){
    modifie(<Chat data={strp} hell={strp.conversation}></Chat>)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5" style={{backgroundColor:"rgb(32, 32, 54)"}}>
            <div className="row p-3 border-bottom border-dark text-light" style={{width:"100%",minWidth:"360px"}}>
              <div className="col-3"><img src={owner.userimg} style={{height:"50px",width:"50px",borderRadius:"90px",border:"3px solid green"}}></img></div>
              <h5 className="col-9 text-left"><span>{owner.username}</span><span className="float-right"><button id="havechange" onClick={()=>{pushbar()}}>{arrowup}</button></span></h5>
              {pulled}
              </div>
              <input className="mb-1 search" style={{width:"100%",color:"white"}} placeholder=" &#61442; Search Contact.."></input>
            <div className="overflow-auto editscroll" style={{height:"350px"}}>
            {
              contactsdata.map((item) => {
                return <Contact data={item} back={conv}></Contact>
              })
            }
            </div>
            <div className="row text-light pb-3">
              <div className="col-6 how"><i class="fas fa-user-plus"></i> Add Contact</div>
              <div className="col-6 how"><i class="fas fa-cog"></i> Settings</div>
            </div>
          </div>
          <div  className="col-8 mt-5" style={{backgroundColor:"white",minWidth:"360px"}}>
            {present}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

