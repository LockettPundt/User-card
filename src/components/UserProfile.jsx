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
    
    getUserData = async (num) => {
      const response = await fetch(`https://randomuser.me/api/?results=${num}`);
      const data = await response.json();
      return data.results[0];
    };
   
    async componentDidMount() {
      const { rando } = this.props;
      let street = '';
      Object.values(rando.location.street).map(item => {
        return street += item + ' ';
      })
      let locationInfo = '';
      Object.values(rando.location).map((item, index) => {
        return ![0, 5, 6].includes(index) ? locationInfo  += item + ' ' : '';
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
      console.log(rando);
    }
    
    render() {
      
      const {firstName, lastName, street, location, email, phone, photo} = this.state;
      return (
        <section className="profileBox">
          <div className="userName">
            <div className="userImage">
              <img src={photo} alt="users potrait"/>
            </div>
            <div className="nameBox">
              <p className="greeting">Hi, I'm</p>
              <h1>{firstName} {lastName}</h1>
            </div>
          </div>
          <div className="infoDisplay">
            <p>{street}</p>
            <p>{location}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
          </div>
        </section>
      );
    }
    
  }
  
  



export default UserProfile;