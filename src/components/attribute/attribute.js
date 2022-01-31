import React from "react";

import "./attribute.css";

export default class Attribute extends React.Component {
  renderItems = () => {
    const { type, values } = this.props;

    return values.map(value => {
      if (type !== 'swatch') {
        return <div key={value[0]} className="attribute-value text">{ value[1] }</div>
      } else if (type === 'swatch') {
        const style = {
          backgroundColor: `${value[1]}`
        }
        return <div key={value[0]} className="attribute-value swatch" style={style}> </div>
      }
    })
  }

  render() {
    const { name } = this.props;

    return (
      <div className="attribute-box">
        <span>{name}</span>

        <div className="attribute-values">
          { this.renderItems() }
        </div>
      </div>
    )
  }
}
