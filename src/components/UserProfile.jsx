import React, { Component } from 'react';

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
    
    async componentDidMount() {
      const testData = await this.getUserData();
      this.setState({
        gender: testData.gender,
        firstName: testData.name.first,
        lastName: testData.name.last,
        photo: testData.picture.large,
      });
      console.log(testData);
    }
    
    render() {
      const {gender, firstName, lastName, location, email, dob, phone, cell, photo} = this.state;
      return (
        <section>
          <div className="userImage">
            <img src={photo} alt="user image"/>
          </div>
          <div className="userName">
            <h1>{firstName} {lastName}</h1>
            
          </div>
        </section>
      );
    }
    
  }
  
  



export default UserProfile;