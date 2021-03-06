import React, { Component } from 'react';
import '../../stylesheet/grid.css';

class Scoreboard extends Component {
	render() {
		const Scores = this.props.scoreboard;
		var ListScores;
		if(this.props.GameName === "Hearts"){
			ListScores = Scores.map((d) => <p>{d.name} score: {d.score} ({d.rdscore})</p>);
		}
		else {
			ListScores = Scores.map((d) => <p>{d.name} score: {d.score}</p>);
		}
		const ListHand = Scores.map((d) => <p> {d.name} cards left: {d.score}</p>);
		//const listItems = data.map((d) => <li key={d.name}>{d.name} Score: {d.score}</li>);

		if(ListScores.length) {
			if(this.props.GameName === "Cheat") {
				return (
					<div className = "Scoreboard">
						<h1>Player {this.props.player_index + 1}</h1>
						<p>Waiting on: Player {this.props.whoseTurn + 1}</p>
						{ListHand}
						<p>Number of cards in discard pile: {this.props.discard_pile}</p>
					</div>
				);
			}
			else if(this.props.GameName === "Taiti") {
				return (
					<div className = "Scoreboard">
						<h1>Player {this.props.player_index + 1}</h1>
						<p>Waiting on: Player {this.props.whoseTurn + 1}</p>
						{ListHand}
					</div>
				);
			}
			else if(this.props.GameName === "Hearts"){
				return (
					<div className = "Gridscoreboard">
						<h1>Player {this.props.player_index + 1}</h1>
						<p>Waiting on: Player {this.props.whoseTurn + 1}</p>
						{ListScores}
					</div>
				);
			}
			else if(this.props.GameName === "Bridge"){
				return(
					<div className = "Scoreboard">
						<h1>Player {this.props.player_index + 1}</h1>
						<p>Waiting on: Player {this.props.whoseTurn + 1}</p>
						<p hidden = {this.props.winning_diff === 0}>Bid: {this.props.winning_diff} {this.props.winning_trump.name} (Player {this.props.winning_player+1}) {this.props.sets}</p>
						<p hidden = {this.props.partner_card.length === 0}>Partner: {this.props.partner_card} </p>
						{ListScores}
					</div>
				);
			}
		}
		else {
			return(
				<div></div>
			);
		}
	}
}

export default Scoreboard;
