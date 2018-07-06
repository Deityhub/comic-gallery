import React from 'react';
import { API_URL } from '../config';

import './Categories.css';

class Categories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			categories: [],
			available: false
		}

		this.renderCategory = this.renderCategory.bind(this);
	}

	componentDidMount() {

		fetch(`${API_URL}/categories`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				this.setState({
					categories: data,
					available: true
				})
			})
			.catch((err) => {
				console.log(err);
			})
	}

	renderCategory() {
		if(this.state.available){
			let data = this.state.categories;
			return data.map((category) => {
				return (
				       <div key={category._id} className="cards">
			                <img />
			                <div className="label">
				                <span>{category.categoryName}</span>
				            </div>
					   </div>
				)
			})
		}else {
			return <div>Loading...</div>
		}
	}

	render() {
		return (
			 <section className="category">
		       <this.renderCategory />
		    </section>
		)
	}
}

export default Categories;