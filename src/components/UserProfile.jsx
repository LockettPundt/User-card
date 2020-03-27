/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card, CardImage, Container, Navbar, Icon } from 'bloomer';

import "../App.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      photo: '',
      location: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      cell: 0,
      dob: 0,
      info: '',
    }
      
    }
    displayLocation = () => {
      let info = `${this.state.street}, ${this.state.location}`;
      this.setState({
        info: info,
      })
    }
    
    displayInfo = item => {
      let info = item;
      this.setState({
        info: info,
      })
    }
    
    clearDisplay = () => {
      this.setState({
        info: '',
      })
    }
    
    async componentDidMount() {
      const { rando } = this.props;
      let street = '';
      Object.values(rando.location.street).map(item => {
        return street += item + ' ';
      })
      let locationInfo = '';
      Object.values(rando.location).map((item, index) => {
        return ![0, 5, 6].includes(index) ? locationInfo  += `${item} ` : '';
      })
      
      this.setState({
        gender: rando.gender,
        firstName: rando.name.first,
        lastName: rando.name.last,
        photo: rando.picture.large,
        phone: rando.phone,
        cell: rando.cell,
        email: rando.email,
        dob: rando.dob,
        street: street,
        location: locationInfo,
        
      });
    }
    
    render() {
      const {firstName, lastName, street, cell, email, phone, photo, info} = this.state;
      return (
        <Container className="App">
          <Card className="profileBox">
            <Container className="userName">
              <CardImage >
                <img src={photo} alt="users potrait"/>
              </CardImage>
              <div className="nameBox">
                <p className="greeting">Hi, I'm</p>
                <h1>{firstName} {lastName}</h1>
              </div>
            </Container>
            <Container className="infoDisplay">
              <Container className="info">
                <p>{info}</p>
              </Container>
              <Container className="hoverIconsContainer">
                <p><Icon isSize="medium" className="fas fa-map-marker-alt fa-2x" onMouseEnter={this.displayLocation} onMouseLeave={this.clearDisplay}/></p>
                <p><Icon isSize="medium" className="fas fa-phone fa-2x" onMouseEnter={this.displayInfo.bind(this, cell)} onMouseLeave={this.clearDisplay}/></p>
                <p><Icon isSize="medium" className="fas fa-mobile-alt fa-2x" onMouseEnter={this.displayInfo.bind(this, phone)} onMouseLeave={this.clearDisplay}/></p>
                <p><Icon isSize="medium" className="far fa-envelope fa-2x" onMouseEnter={this.displayInfo.bind(this, email)} onMouseLeave={this.clearDisplay}/></p>
              </Container>
              
              
            </Container>
          </Card>
        </Container>
        
      );
    }
    
  }
  
  



export default UserProfile;