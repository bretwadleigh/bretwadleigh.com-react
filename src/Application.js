import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Section from './Section';

require('../scss/styles.scss');

var addressDetails = {
street: "217 14th Ave",
city: "San Francisco",
state: "CA",
zipcode: "94118"
},
contactDetails = {
  email: "bretwadleigh@yahoo.com",
  phone: "(415) 378-5426",
  skype: '<a href=\"skype:bret.wadleigh\">Skype: bret.wadleigh</a>',
  twitter: '<a href=\"https://twitter.com/bret4dev\">Twitter: @bret4dev</a>',
},
contact = {
firstName:"Bret",
lastName:"Wadleigh",
age:48,
eyeColor:"blue",
addressDetails,
contactDetails
},
marin = {
  companyName: 'Marin Software',
  jobTitle: 'Learning Engineer',
  duration: 'March thru November 2015, July 2017 to Present',
  stack: 'Mindtouch, JavaScript, REST, DigitalChalk API, Salesforce',
},
iwtytbr = {
  companyName: 'I Will Teach You To Be Rich, Inc.',
  jobTitle: 'Senior Fullstack Engineer',
  duration: 'November 2015 to July 2017',
  stack: 'Infusionsoft API, CakePHP, Javascript',
  //endDate: '',
},
techbargains = {
  companyName: 'TechBargains.com',
  jobTitle: 'Senior UI Developer',
  duration: 'August 2013 to January 2015',
  stack: 'HTML5, jQuery, CSS3, SEAM template development on J2EE/Amazon Web Services',
},
experience = {
  marin,
  iwtytbr,
  techbargains
},
calpoly = {
  institution: "California Polytechnic",
  city: "San Luis Obispo",
  state: "CA",
  degree: "Bachelor of Science",
  major: "Industrial Technology",
  year: "1994",
},
education = {
  calpoly
},
github = {
  //main: 'https://github.com/bretwadleigh',
  'This Page': 'https://github.com/bretwadleigh/bretwadleigh.com-react',
  Uses: 'React, SASS, Webpack',


},
resume = {contact,
experience,
education,
github
},
header = {
  h1: 'Bret Wadleigh - Front-End Web Developer & PHP Fullstack Engineer'
}

console.log(resume);

const items = Object.keys(resume),
checkedByDefaultArr = ['experience'];


class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //allItems: items,
      checkedByDefault: checkedByDefaultArr,
      checkedAreas: {},
      //checkedAreasObj: {},
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    let initChecked = {};
    for (const check of this.state.checkedByDefault) {
      this.selectedCheckboxes.add(check);
      initChecked[check] = check;
      //console.log('checkedAreas: ', this.state.checkedAreas);
      //console.log('checkedAreasType: ', typeof this.state.checkedAreas); */
    }
    this.setState({
      checkedAreas: initChecked,
      //checkedAreasObj: prevState.checkedAreasObj[checkbox] = resume[checkbox]
    });
    console.log('checkedAreas: ', this.state.checkedAreas);
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
    console.log('toggleCheckbox: ', this.selectedCheckboxes);
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    console.log(this.selectedCheckboxes);
    let newCheckedAreas = {};
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
      /* if (!this.state.checkedAreas.hasOwnProperty(checkbox)){ */
      newCheckedAreas[checkbox] = checkbox;
    }
    this.setState({
      checkedAreas: newCheckedAreas,
    });

  }

  checkboxIsChecked = (label) => {
    return this.state.checkedAreas.hasOwnProperty(label);
  }

  createCheckbox = label => (
    //console.log(typeof this.state.checkedAreas)
    //let checkboxIsChecked = (this.state.checkedAreas.indexOf(label) >= 0) ? true : false;
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      initChecked={this.checkboxIsChecked(label)}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  createSection = section => (
    <Section
    section={section}
    key={section}
    sectionarea={resume[section]}
    />
  )

  createSections = () => (
    //let sections = Object.keys(this.state.checkedAreas)
    //console.log(sections)
    Object.keys(this.state.checkedAreas).map(this.createSection)
  )

  createHeader = () => (
    <header>
    <h1>{header['h1']}</h1>
    </header>
  )

  showCheckedCheckboxes = () => {
    let theseChecked = '';
    for (const checkbox of this.selectedCheckboxes) {
      theseChecked = theseChecked + ' ' + checkbox;
    }
    return theseChecked
  }

  render() {
    return (
    <div className="main-app">
      <div className="container">
      <div className="row">
      <div className="col-sm-12 header">
      {this.createHeader()}
      </div>
      </div>
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
              <div className="btn-wrapper">
              <button className="btn btn-default" type="submit">Show Bret&#39;s: {this.showCheckedCheckboxes()} </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    <div className="container">
    {this.createSections()}
    </div>
    </div>
    );
  }
}

export default Application;
