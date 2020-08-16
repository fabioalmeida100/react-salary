import React, { Component } from 'react'
import css from "./progressBarSalary.module.css"

export default class ProgressBarSalary extends Component {
  render() {
    const { discountINSS, discountIRPF } = this.props;
    return (
      <div className={css.progressBar}>
          <div className={css.discountINSS} style={{width: `${discountINSS}%`}}>
            {
              (discountINSS) &&`${discountINSS}%`
            }
          </div>
          <div className={css.discountIRPF} style={{width: `${discountIRPF}%`}}>
            {
              (discountIRPF) && `${discountIRPF}%`
            }
          </div>
      </div>
    )
  }
}
