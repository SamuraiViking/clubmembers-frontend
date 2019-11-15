import React, { Component } from 'react'
import axios from 'axios'
import './App.css'


export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clubMembers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/clubmembers/')
        .then(res => this.setState({ clubMembers: res.data }))
    }

    render() {
        return (
            <div>
                {
                    this.state.clubMembers.map(clubMember => 
                        <div className="club-member" key={clubMember.id}>
                            <h2>{clubMember.display_name}</h2>
                            <p>{clubMember.email}</p>
                            <div className="photo-container">
                                <img src={clubMember.photo} alt="Club Member Image"/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}