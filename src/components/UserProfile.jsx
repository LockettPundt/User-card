import React, { Component } from 'react';

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
    }
      
    }
    
    getUserData = async () => {
      const response = await fetch('https://randomuser.me/api/?results=1');
      const data = await response.json();
      return data.results[0];
    };
    
    displayInfo = (info) => {
      
      return true;
    };
    
    async componentDidMount() {
      const testData = await this.getUserData();
      let street = '';
      Object.values(testData.location.street).map(item => {
        street += item + ' ';
      })
      let locationInfo = '';
      Object.values(testData.location).map((item, index) => {
        return ![0, 5, 6].includes(index) ? locationInfo  += item + ' ' : '';
      })
      
      this.setState({
        gender: testData.gender,
        firstName: testData.name.first,
        lastName: testData.name.last,
        photo: testData.picture.large,
        phone: testData.phone,
        cell: testData.cell,
        email: testData.email,
        dob: testData.dob,
        street: street,
        location: locationInfo,
        
      });
      console.log(testData);
    }
    
    render() {
      const {gender, firstName, lastName, street, location, email, dob, phone, cell, photo} = this.state;
      return (
        <section className="profileBox">
          <div className="userImage">
            <img src={photo} alt="users potrait"/>
          </div>
          <div className="userName">
            <h1>{firstName} {lastName}</h1>
          </div>
          <div className="locationDisplay">
            {street}
            {location}
          </div>
          <div className="infoDisplay">
            
          </div>
          <div className="contactInfo">
            <a href="javascript(0): void" onFocus={this.displayInfo()}>Phone</a>
            <a href="javascript(0): void">Date of Birth</a>
            <a href="javascript(0): void">Location</a>
            <a href="javascript(0): void">Email</a>
          </div>
        </section>
      );
    }
    
  }
  
  



export default UserProfile;