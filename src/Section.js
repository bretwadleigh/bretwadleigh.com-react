import React, { Component} from 'react';
import Area from './Area';

class Section extends Component {

  createArea = area => (
    <Area
    area={area}
    key={area}
    areasubsection={this.props.sectionarea[area]}
    />
  )

  createAreas = () => (
    //let sections = Object.keys(this.state.checkedAreas)
    //console.log(sections)
    Object.keys(this.props.sectionarea).map(this.createArea)
  )

  //const { initChecked } = this.props;

  render() {
    const {section} = this.props;
    const thisObject = this.props.sectionarea;
    console.log(thisObject);

    return (
    <div className="row">
      <div className="col-sm-12">
        <div className={section} id={section}>
          <h2 className="top-level">{section}</h2>
          {this.createAreas()}
        </div>
      </div>
    </div>
    );
  }
}

export default Section;
