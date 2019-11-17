// Libraries
import React, { Component } from 'react';
import axios from 'axios'

// Components
import Header from './Header'
import EmailInput from './EmailInput'
import Group from './Group'
import Footer from './Footer'
import GroupDropDown from './GroupDropDown'

// CSS
import './App.css';


export default class App extends Component  {
  constructor(props) {
    super(props)
    this.state = {
        members: [],
        errors: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:8000/api/groups/7')
      .then(res => this.setState({ members: res.data.members }))
      .catch(errors => this.setState({ errors: errors }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GroupDropDown />
        <EmailInput />
        <Group
          members={this.state.members}
        />
        <Footer />
      </div>
    );
  }
}
