import React, { Component } from 'react'

export default class InputReadOnly extends Component {
  render() {
    const { value, colorText } = this.props;
    return (
      <div>
          <input type="text" value={value} style={{color: colorText, fontWeight: '500'}} readOnly/>
      </div>
    )
  }
}
