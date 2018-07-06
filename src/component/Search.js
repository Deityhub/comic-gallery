import React from 'react';
import { API_URL } from '../config';
import Loading from './Loading';
import { withRouter } from 'react-router-dom';
import './Search.css';

class Search extends React.Component {
	constructor(){
		super();

		this.state = {
			searchResults: [],
			searchQuery: '',
			loading: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.renderSearch = this.renderSearch.bind(this);
		this.handleRender = this.handleRender.bind(this);
	}

	componentWillReceiveProps(){
		//work on the search here
	}

	handleChange(e) {
		const searchQuery = e.target.value;

		this.setState({ 
			searchQuery, 
			loading: true 
		});

		if(!searchQuery){
			this.setState({
				loading: false
			})
			return '';
		}

		//implementing the search from the database
		fetch(`${API_URL}/book/find/${searchQuery}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				/*console.log(data);
				console.log(this.state.searchResults);*/
				this.setState({
					searchResults: data
				})
			})
			.catch((err) => {
				console.log(err);
			});

	}

	handleRender(id){
		this.setState({
			searchQuery: '',
			searchResults: []
		})

		this.props.history.push(`/comic/${id}`);
	}

	renderSearch(){
		const { searchResults, searchQuery, loading } = this.state;

		if(!searchQuery) {
			return '';
		}

		if(searchResults.length > 0){
			return (
				<div className='Search-result-container'>
					{searchResults.map((result) => {
						return (
							<div key={result._id} className='Search-result' onClick={() => { this.handleRender(result._id)}}>
								{result.title}
							</div>
						)
					})}
				</div>
			);
		}

		if(!loading){
			return (
				<div className='Search-result-container'>
					<div className='Search-no-result'>
						No results found.
					</div>
				</div>
			);
		}
	}

	render() {
		let { loading, searchQuery } = this.state;
		return (
			<form onSubmit={(e)=>e.preventDefault()} className='Search'>
				<span className='Search-icon' />
				<input className='Search-input' type='text' value={searchQuery} onChange={this.handleChange} placeholder='Comic name' />
				
				{this.renderSearch()}

				{loading && 
					<div className='Search-loading'>
						<Loading width='12px' height='12px' />
					</div>
				}
			</form>
		)
	}
}

export default withRouter(Search);