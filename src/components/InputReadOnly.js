import React, { Component } from 'react'

export default class InputReadOnly extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
          <input type="text" value={value} readOnly/>
      </div>
    )
  }
}
