import React, { Component } from 'react'

export class PropsClassComp extends Component {
  constructor(props) {
    super(props)
    console.log(props);
  }


  render() {
    return (
      <div>
        <h1>Props In Class Component</h1>
        <h3>Name = {this.props.name}</h3><br />
        <h3>Age = {this.props.Age}</h3>
      </div>
    )
  }
}

export default PropsClassComp