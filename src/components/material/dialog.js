import React from 'react';

export default class Dialog extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			title: props.title,
			count: props.count
		}
	}

	render() {
		return (
			<aside id="my-mdc-dialog"
			  className="mdc-dialog"
			  aria-labelledby="my-mdc-dialog-label"
			  aria-describedby="my-mdc-dialog-description">
			  <div className="mdc-dialog__surface">
			    <header className="mdc-dialog__header">
			      <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
			        Edit
			      </h2>
			    </header>
			    <section className="mdc-dialog__body">
			    	<div className="mdc-textfield">
			    	  <input type="text" id="my-titlefield" className="mdc-textfield__input" required />
			    	  <label className="mdc-textfield__label" htmlFor="my-titlefield">Title</label>
			    	</div>
			    	<div className="mdc-textfield">
			    	  <input type="number" className="mdc-bunkfield__input" required />
			    	  <label className="mdc-textfield__label" htmlFor="my-bunkfield">Bunk Count</label>
			    	</div>
			    </section>
			    <footer className="mdc-dialog__footer">
			      <button type="button" onClick={this.props.handleCancel} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
			      <button type="submit" onClick={this.props.handleSubmit} className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--submit">Submit</button>
			    </footer>
			  </div>
			  <div className="mdc-dialog__backdrop"></div>
			</aside>
		);
	}

}