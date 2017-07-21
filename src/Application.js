import React, { Component } from 'react';
import Checkbox from './Checkbox';

var contact = {
firstName:"Bret",
lastName:"Wadleigh",
age:48,
eyeColor:"blue",
addressDetails,
contactDetails,
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
iwtytbr = {
  companyName: 'I Will Teach You To Be Rich, Inc.',
},
marin = {
  companyName: 'Marin Software',
},
experience = {
  0: {
    iwtytbr
  },
  1: {
    marin
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

console.log(resume);

const items = Object.keys(resume),
checkedByDefaultArr = ['experience'];


class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: items,
      checkedByDefault: checkedByDefaultArr,
      //checkedAreas: [],
      checkedAreasObj: {},
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    for (const checkbox of this.state.checkedByDefault) {
      this.selectedCheckboxes.add(checkbox);
      this.setState((prevState) => ({
        //checkedAreas: prevState.checkedAreas.push(checkbox),
        checkedAreasObj: prevState.checkedAreasObj[checkbox] = resume[checkbox]
      }));
      console.log(this.state.checkedAreasObj);
    }
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
    console.log(this.selectedCheckboxes);
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
      if (!this.state.checkedAreasObj.hasOwnProperty(checkbox)){
        this.setState((prevState) => ({
          checkedAreasObj: prevState.checkedAreasObj[checkbox] = resume[checkbox]
        }));
      }
      console.log(this.state.checkedAreasObj);
      //console.log('checkedAreas', this.state.checkedAreas);
      // add to displayedAreas state
      //this.setState.displayedAreasObj[checkbox] = resume[checkbox];
      //if (this.state.checkedAreas.indexOf(checkbox) > -1) {
        //this.setState.checkedAreas[] = checkbox;
      //}
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      initChecked={this.state.checkedByDefault.indexOf(label) >= 0 ? true : false}
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

              <button className="btn btn-default" type="submit">Refresh</button>
            </form>

          </div>
        </div>
        <div className="row">
        <div className="col-sm-12">

        </div>
        </div>
      </div>
    );
  }
}

export default Application;
