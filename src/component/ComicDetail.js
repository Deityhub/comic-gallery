import React from 'react';
import { API_URL } from '../config';

import './ComicDetail.css';

class ComicDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			books: [],
			available: false
		}

		this.RenderDetail = this.RenderDetail.bind(this)
	}

	componentDidMount(){
		let { id } = this.props.match.params;
		console.log(id);

		fetch(`${API_URL}/book/search/${id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					book: data,
					available: true
				});
				console.log(this.state.book);
			})
			.catch((err) => {
				// console.log(err);
			})
	}

	RenderDetail() {

		if(this.state.available){
			let { title, image, bookBody, writer, time } = this.state.book;
			// console.log(this.state.books);
			console.log(this.state.book)

			return (<div className="container-house">
					    <img src={image} />
					    <div className="container-text">

					    	<h1>{title}</h1>
					    	<p><strong>Book Body:</strong> <span> {bookBody} </span></p>
					    	<p><strong>Writer:</strong> <span> {writer} </span></p>
					    	<p><strong>Time:</strong> <time> {time} </time></p>

					    </div>
				  </div>
			)
		}else {
			return <div className='detail.container' >Loading...</div>
		}
	}

	render() {
		return (
			<this.RenderDetail/>
		)
	}
}

export default ComicDetail;