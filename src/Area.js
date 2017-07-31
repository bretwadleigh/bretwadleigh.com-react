import React, { Component} from 'react';

class Area extends Component {

  createNode = node => (
    <div className={node}>
    <span dangerouslySetInnerHTML={{__html: this.props.areasubsection[node]}} />
    </div>
  )

  createNodes = nodes => (
    Object.keys(nodes).map(this.createNode)
  )

  render() {
    const {area} = this.props;
    const thisObject = this.props.areasubsection;
    const thisClassNameArea = "area";

    console.log(thisObject);

    return (
    <div className="row">
      <div className="col-sm-12">
        <div className={area} id={thisClassNameArea + '_' + area}>
          <span className={area}>
          <label>{area}:</label> {(typeof thisObject === 'object') ? this.createNodes(thisObject) : thisObject}
          </span>
        </div>
      </div>
    </div>
    );
  }
}

export default Area;
