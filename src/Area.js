import React, { Component} from 'react';

class Area extends Component {

  createNode = node => (
    <div className="node {node}">
    <span>{this.props.areasubsection[node]}</span>
    </div>
  )

  createNodes = nodes => (
    Object.keys(nodes).map(this.createNode)
  )

  render() {
    const {area} = this.props;
    const thisObject = this.props.areasubsection;

    console.log(thisObject);

    return (
    <div className="row">
      <div className="col-sm-12">
        <div className="{area}" id="area_{section}">
          <span className="sub-level_{area}">
          <label>{area}:</label> {(typeof thisObject === 'object') ? this.createNodes(thisObject) : thisObject}
          </span>
        </div>
      </div>
    </div>
    );
  }
}

export default Area;
