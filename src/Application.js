import React, { Component } from 'react';
import Checkbox from './Checkbox';

var contact = {
firstName:"Bret",
lastName:"Wadleigh",
age:48,
eyeColor:"blue",
address: addressDetails,
contact: contactDetails,
},
addressDetails = {
street: "217 14th Ave",
city: "San Francisco",
state: "CA",
zipcode: "94118"
},
contactDetails = {
  email: "bretwadleigh@yahoo.com",
  phone: "415 378 5426",
  skype: "bret.wadleigh",
  twitter: "bret4dev",
},
experience = {
  0: {
    institution: ""
  }
},
education = {
  0: {
    institution: "California Polytechnic",
    city: "San Luis Obispo",
    state: "CA",
    degree: "Bachelor of Science",
    major: "Industrial Technology",
    year: "1994",
  }
},
resume = {contact,
experience,
education
};

const items = Object.keys(resume);

class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Application;
