// Libraries
import React, { Component } from 'react';
import axios from 'axios'

// Components
import Header from './Header'
import EmailInput from './EmailInput'
import ClubMembers from './ClubMembers'
import Footer from './Footer'

// CSS
import './App.css';


export default class App extends Component  {
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
      <div className="App">
        <Header />
        <EmailInput />
        <ClubMembers
          clubMembers={this.state.clubMembers}
        />
        <Footer />
      </div>
    );
  }
}
