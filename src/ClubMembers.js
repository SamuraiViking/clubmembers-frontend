import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import ClubMember from './ClubMember'


export default class ClubMembers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clubMembers: [],
            errors: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/clubmembers/')
        .then(res => this.setState({ clubMembers: res.data }))
        .catch(errors => this.setState({ errors: errors }))
    }

    render() {
        return (
            <div className="club-members">
                {
                    this.state.clubMembers.map(clubMember => 
                        <ClubMember
                            key={clubMember.id}
                            display_name={clubMember.display_name}
                            email={clubMember.email}
                            photo={clubMember.photo}
                        />
                    )
                }
            </div>
        )
    }
}