import React from 'react';
import { API_URL } from '../config';
import Loading from './Loading';
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

	}

	handleRender(currentId){
		this.setState({
			searchQuery: '',
			searchResults: []
		})

		this.props.history.push(`/currency/${currentId}`)
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
							<div key={result.id} className='Search-result' onClick={() => { this.handleRender(result.id)}}>
								{result.name} ({result.symbol})
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

export default Search;