import React, { Component } from 'react';

class TechList extends Component {
  render() {
    state = { techs: [], newTech: ''}

    return (
      <>
      <ul>
        <li>Nodejs</li>
        <li>Reactjs</li>
        <li>ReactNative</li>
      </ul>
      </>
    )
  }
}

export default TechList;