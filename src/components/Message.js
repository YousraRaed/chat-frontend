import React, { Component } from 'react';
import 'react-chat-elements/dist/main.css';
import Messages from './Messages';
// MessageBox component
import { MessageBox } from 'react-chat-elements';

class Message extends Component {

  state ={ messages: [] };





  componentWillMount() {
  this.setState({ messages:[{id:'1',name:'Yousra',text:'Hi Jack. What are you doing?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'2',name:'Yousra',text:'Hi Yousra. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'3',name:'Yousra',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'4',name:'Yousra',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'5',name:'Yousra',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'6',name:'Yousra',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'7',name:'Yousra',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'8',name:'Yousra',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'9',name:'Khety',text:'Hello,h r u?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'10',name:'Khety',text:'Hi khety. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'11',name:'Khety',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'12',name:'Khety',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'13',name:'Khety',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'14',name:'Khety',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'15',name:'Khety',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'16',name:'Khety',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'17',name:'Perto',text:'Hello Jack.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'18',name:'Perto',text:'Hi Perto. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'19',name:'Perto',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'20',name:'Perto',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'21',name:'Perto',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'22',name:'Perto',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'23',name:'Perto',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'24',name:'Perto',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'25',name:'JANA',text:' What are you doing?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'26',name:'JANA',text:'Hi JANA. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'27',name:'JANA',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'28',name:'JANA',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'29',name:'JANA',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'30',name:'JANA',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'31',name:'JANA',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'32',name:'JANA',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'33',name:'Fedrik',text:'Hello',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'34',name:'Fedrik',text:'Hi Fedrik. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'35',name:'Fedrik',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'36',name:'Fedrik',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'37',name:'Fedrik',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'38',name:'Fedrik',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'39',name:'Fedrik',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'40',name:'Fedrik',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'41',name:'Tonny',text:'Hi Jack.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'42',name:'Tonny',text:'Hi Tonny. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'43',name:'Tonny',text:'Are you finished with school already?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'44',name:'Tonny',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'45',name:'Tonny',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'46',name:'Tonny',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'47',name:'Tonny',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'48',name:'Tonny',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'},
{id:'49',name:'Dina',text:'Hi ',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'50',name:'Dina',text:'Hi Dina. I am filling out a job application.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'51',name:'Dina',text:'Are you finished with school already?',position:'box-receive received',date:'112:37 PM',
type:'text',titleColor:'#FF0000'},
{id:'52',name:'Dina',text:'No. I have one more semester, but it would be great to have a job lined up.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'53',name:'Dina',text:'How is your day going?',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'54',name:'Dina',text:'Quite busy. I am preparing for my presentation tomorrow on our marketing strategy. I am not even half done yet.',position:'box-sent sent',date:'12:37 PM',type:'text'}
,{id:'55',name:'Dina',text:'You must feel stressed out now.',position:'box-receive received',date:'12:37 PM',type:'text',titleColor:'#FF0000'},
{id:'56',name:'Dina',text:'That is an understatement.',position:'box-sent sent',date:'12:37 PM',type:'text'}
]});
  }

  componentDidMount() {
     this.props.fillMessages(this.state.messages);
  }

  renderMessages() {


  return this.state.messages.map(message => {
    if((this.props.name===message.name) || (this.props.name===null && message.name ==='Yousra'))
   {

  return  <Messages key={message.id} message={message} />


 };
}
  )

  }

 render() {

  return (
    <div className="message-list">

     {this.renderMessages()}
    </div>

  );
 }
}



export default Message
