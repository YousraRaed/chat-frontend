import React, { Component } from 'react';
import RoomList from './RoomList';

class RoomDetails extends Component {
  state ={ albums: [],

   };

  componentWillMount() {
  this.setState({ albums:[{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'hidden',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'hidden',movement:'unmove'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]});
  }

  componentDidMount() {

  this.interval = setInterval(() => this.setState({ albums:[{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'appear',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'hidden',movement:'move'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]})
  , 6000);

    this.interval = setInterval(() => this.setState({ albums:[{name:'Yousra',image:require('../images/images (2).jpeg'),date:'12:37 PM',message:'hiiiii',flag:'appear',movement:'unmove'}
  ,{name:'Khety',image:require('../images/images (4).jpeg'),date:'12:37 PM',message:'hello',flag:'hidden',movement:'unmove'}
  ,{name:'Perto',image:require('../images/images (7).jpeg'),date:'12:37 PM',message:'welcome',flag:'hidden',movement:'move'}
  ,{name:'JANA',image:require('../images/images (8).jpeg'),date:'12:37 PM',message:'how r u ',flag:'hidden',movement:'unmove'}
  ,{name:'Fedrik',image:require('../images/images (5).jpeg'),date:'12:37 PM',message:'where u r',flag:'hidden',movement:'unmove'}
  ,{name:'Tonny',image:require('../images/images (3).jpeg'),date:'12:37 PM',message:'come early',flag:'hidden',movement:'unmove'}
  ,{name:'Dina',image:require('../images/images.jpeg'),date:'12:37 PM',message:'do not be late',flag:'hidden',movement:'unmove'}]})
  , 12000);

}

  renderAlbums() {
 if(this.props.name === undefined){
  return  this.state.albums.map(album =>{
      return <RoomList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
    })

  }
  else{
  return   this.state.albums.map(album => {if (this.props.name===album.name){
     return <RoomList key={album.name} album={album}  subscribeToRoom={this.props.subscribeToRoom}/>
   };
 })

  }


  }

 render() {

  return (
    <ul className="rooms-list">
     {this.renderAlbums()}
    </ul>

  );
 }
}

export default RoomDetails;
