import React, { Component } from 'react';
import './homepage.css';
import Svrcreate from './svrcreate';
import JoinServer from './joinserver';
import Title from './title';
import Init from './Init';
import Taiti from './Games/taiti'

class Body extends Component {
  state = {
    server_PIN: "1729",
    create_server: false,
    join_server: false,
    server_created: false,
    Game: "Taiti",
  }
  handlecreate_server = (value) => {
        this.setState({create_server: value});
  }
  handlejoin_server = (value) => {
        this.setState({join_server: value});
  }
  handleserver_created = (value) => {
        this.setState({server_created: value});
  }
  handleselectGame= (value) => {
        this.setState({Game: value});
  }
  handlenum_players = (value) =>{
        this.setState({num_players: value});
  }

  render() {
    if(this.state.create_server === false && this.state.join_server === false){
    return (
      <div>
      <Title />
      <Init OnHandle_create_server = {this.handlecreate_server}
            OnHandle_join_server = {this.handlejoin_server}
       />
       </div>

    );
  }
  else if(this.state.create_server && this.state.server_created){
    return(
      <div>
      <Taiti num_players = {this.state.num_players}/>
      </div>
    );
  }
  else if(this.state.create_server && !this.state.server_created ){
    return(
      <div>
      <Title />
      <Svrcreate OnHandle_server_created = {this.handleserver_created }
                OnHandle_selectGame = {this.handleselectGame}
                OnHandle_num_players = {this.handlenum_players}
      />
      </div>
    )
  }

  else if(this.state.join_server){
    return(
      <div className="Init">
      <Title/>
      <JoinServer/>
      </div>
    );
  }
}
}
export default Body;