import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.item.fruit}</b> - {this.props.index}
        {/* <b>{item.fruit}</b> - {i} */}
        <div>컨텐츠 </div>
        <div>컨텐츠 1</div>
        <div>컨텐츠 2</div>
        <div>컨텐츠 3</div>
      </li>
    );
  }
}

export default Try;
