import React, { Component } from 'react'
import css from "./inputFullSalary.module.css"

export default class InputFullSalary extends Component {
  render() {
    const { onChangeValue } = this.props;
    return (
      <div className={css.mt10}>
          <label>Salário bruto</label>
          <input type="number" onChange={onChangeValue}/>              
      </div>
    )
  }
}
