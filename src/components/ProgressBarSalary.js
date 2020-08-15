import React, { Component } from 'react'
import css from "./progressBarSalary.module.css"

export default class ProgressBarSalary extends Component {
  render() {
    return (
      <div className={css.progressBar}>
          <div className={css.discountIRPF}>
              INSS
          </div>
          <div className={css.discountINSS}>
              IRPF
          </div>
      </div>
    )
  }
}
