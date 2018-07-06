import React from 'react';
import axios from 'axios';
import { API_URL } from '../config';

import './Subscription.css';

class Subscription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: ''
            },
            categories: []
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }

    componentDidMount(){

        fetch(`${API_URL}/categories`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            this.setState({
                categories: data
            })
        })
        .catch((err) => {
            console.log(err);
        });

        /*fetch('https://whispering-reaches-99821.herokuapp.com/subscribe/add', {
            method: 'post',
            body: opts
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });*/

        /*axios.post('https://whispering-reaches-99821.herokuapp.com/subscribe/add', opts)
        .then(res => {
            console.log(res);
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        });*/
    }

    handleEmail() {
        let { user } = this.state;

        axios.post(`${API_URL}/subscribe/add`, user)
        .then(res => {
            console.log(res);
            alert('Subscription successful')
        }).catch((err) => {
            console.log(err)
        });
    }

    emailChange(e) {
        this.setState({
            user: {
                email: e.target.value
            }
        })
    }

    render() {
        let { email, categories } = this.state.user;

        return (
            <div className='bg-img'>
                <div className='subscribe'>
                    <h2>Get Updates</h2>
                    <p>On your favorite comic book {categories}</p>

                    <input className='email' placeholder='jude@domain.com' value={email} onChange={this.emailChange} /><br/>
                    <label className='select'>Select categories</label><br/>
                    <input type='checkbox' value='Action' /> <label>Action</label><br/>
                    <input type='checkbox' value='Adventure' /> <label>Adventure</label><br/>
                    <input type='checkbox' value='Drama' /> <label>Drama</label><br/>
                    <input type='checkbox' value='Romance' /> <label>Romance</label><br/>
                    <input type='checkbox' value='Manga' /> <label>Manga</label><br/>
                    <input type='checkbox' value='Comedy' /> <label>Comedy</label><br/>
                    <input type='checkbox' value='Marvel comic' /> <label>Marvel comic</label><br/>
                    <input type='checkbox' value='DC comic' /> <label>DC comic</label><br/>

                    <button className='button' onClick={this.handleEmail} >Subscribe</button>
                </div>
            </div>
        )
    }

}

export default Subscription;