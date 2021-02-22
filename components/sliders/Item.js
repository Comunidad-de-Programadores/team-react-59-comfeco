import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return <div className={className}>{this.props.id}</div>;
  }
}

export default Item;
