import React from 'react';
import { API_URL } from '../config';

import './Content.css';

class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchResults: [],
            available: false
        }

        this.renderCards = this.renderCards.bind(this);
    }

    componentDidMount(){

        fetch(`${API_URL}/book`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                this.setState({
                    searchResults: data,
                    available: true
                });

                console.log(this.state.searchResults);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    renderCards() {
        if(this.state.available){
            console.log(this.state.searchResults);

            let output = this.state.searchResults.map((card) => {
                return (<div key={card._id} className='content-container-card'>
                            
                            <div className='content-container-text'>
                                <h1>{card.title}</h1>
                                <p><strong>Writer:</strong> {card.writer}</p>
                            </div>
                        </div>
                )
            })

            return output;
        }else {
            return <div>Loading...</div>
        }
    }

    render() {

        //substitute and loop throught all the books in the database
        return (
            <div className='content-container'>
                <div className='content-container-holder'>
                    <this.renderCards />
                </div>
            </div>
        )
    }
}

export default Content;