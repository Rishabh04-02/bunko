import React from 'react';

export default class Card extends React.Component {

	render() {
		return (
			<div className="mdc-card" style={{margin:'20px'}}>
			  <section className="mdc-card__primary">
			    <span className="mdc-card__title" style={{fontSize:'32px', paddingTop:'30px'}}>{this.props.title} <div className="mdc-card mdc-card" style={{float: 'right', padding:'20px'}}>
			  		{this.props.count}
			  	</div></span>
			  </section>
			  <section className="mdc-card__actions">
			    <button onClick={this.props.handleIncrement} className="mdc-button mdc-button mdc-button--compact mdc-card__action">Increment</button>
			    <button onClick={this.props.handleEdit} className="mdc-button mdc-button mdc-button--compact mdc-card__action">Edit</button>
			    <button onClick={this.props.handleDelete} className="mdc-button mdc-button mdc-button--compact mdc-card__action">Delete</button>
			  </section>
			</div>
		);
	}

}