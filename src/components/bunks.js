import React from 'react';
import Card from './material/card'

export default class Bunks extends React.Component {

	constructor(props) {
		super(props);

		var data = localStorage.data ? JSON.parse(localStorage.data) : null;
		this.state = {
			data: data || [],
			showDialog: false,
			dialogState: '',
			title:'',
			count: 0
		};

		this.onIncrement = this.onIncrement.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onDialogSubmit = this.onDialogSubmit.bind(this);
		this.onDialogCancel = this.onDialogCancel.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onNew = this.onNew.bind(this);
	}

	onIncrement(i) {
		var data = this.state.data;

		data[i].count += 1;

		this.setState({
			data: data
		}, this.storeData);
	}

	onNew() {
		this.setState({
			showDialog: true,
			dialogState: 'new',
			title: '',
			count: 0
		}, this.storeData)
	}

	onEdit(i) {
		this.setState({
			showDialog: true,
			dialogState: 'edit',
			dataIndex: i,
			title: this.state.data[i].title,
			count: this.state.data[i].count
		}, this.storeData);
	}

	onDelete(i) {
		var data = this.state.data;
		data.splice(i, 1);

		this.setState({
    		data: data
		}, this.storeData)
	}

	onDialogSubmit() {
		var data = this.state.data;
		var cardData = {
			title: this.state.title,
			count: this.state.count
		}

		if(this.state.dialogState === 'edit'){
			data[this.state.dataIndex] = cardData;
		}else{
			data.push(cardData);
		}

		this.setState({
			data: data,
			showDialog: false,
			title: '',
			count: 0
		}, this.storeData);
	}

	onDialogCancel(){
		this.setState({
			showDialog: false,
			title: '',
			count: 0
		}, this.storeData);
	}

	onChange(e){
		var state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state, this.storeData);
	}

	storeData() {
		localStorage.setItem('data', JSON.stringify(this.state.data));
	}

	render() {
		return (
			<div>
				<nav id="basic-tab-bar" className="mdc-tab-bar">
				  <a className="mdc-tab mdc-tab--active" href="#home">Bunk-o-Meter</a>
				</nav>
				{this.state.showDialog ? this.renderDialog() : this.renderCards()}
			</div>
		);
	}

	renderDialog() {
		return (
			<div className="mdc-card" style={{margin:'20px'}}>


				<section className="mdc-card__primary">
					<h1>Edit Details</h1>
				</section>
				<section className="mdc-card__supporting-text">
					<label htmlFor="css-only-textfield-box">Subject title: </label>
					<div className="mdc-textfield mdc-textfield--box">
					  <input type="text" name="title" className="mdc-textfield__input" onChange={this.onChange} id="css-only-textfield-box" placeholder="Subject Title" value={this.state.title}/>
					</div><br/>
					<label htmlFor="css-only-textfield-box">Bunk Count: </label>
					<div className="mdc-textfield mdc-textfield--box">
					  <input type="number" name="count" className="mdc-textfield__input" onChange={this.onChange} id="css-only-textfield-box" placeholder="Bunk Count" value={this.state.count}/>
					</div>
				</section>
				<section className="mdc-card__actions">
			    	<button onClick={this.onDialogCancel} className="mdc-button mdc-button mdc-button--compact mdc-card__action">Cancel</button>
			    	<button onClick={this.onDialogSubmit} className="mdc-button mdc-button mdc-button--compact mdc-card__action">Submit</button>
			  </section>
			</div>
		)
	}

	renderCards() {

		const that = this;

		return (

				<div>
					{
					    this.state.data.map( function(item, i) {
					        return (
					            <Card  key={i}
					                   title={item.title}
					                   count={item.count}
					                   handleEdit={that.onEdit.bind(null, i)}
					                   handleIncrement={that.onIncrement.bind(null, i)}
					                   handleDelete={that.onDelete.bind(null, i)}
					                    />
					        );
					    })
					}
					<button style={{display:'flex', justifyContent: 'center', margin:'20px auto', width: '50%'}} className="mdc-button mdc-button--raised" onClick={this.onNew}>
					  ADD
					</button>
				</div>
		)
	}
}