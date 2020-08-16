import React, { Component } from 'react';
import css from "./app.module.css";
import InputFullSalary from './components/input-fullsalary/InputFullSalary';
import InputReadOnly from './components/input-readonly/InputReadOnly';
import ProgressBarSalary from './components/input-progressbar/ProgressBarSalary';
import { calculateSalaryFrom } from "./helpers/salary";
import { formatNumber } from "./helpers/formatHelpers"

export default class App extends Component {
    constructor() {
        super();
        
        this.state = {
            fullSalary: {
                baseINSS: 0,
                discountINSS: 0,
                baseIRPF:0,
                discountIRPF: 0,
                netSalary: 0
            },
            discountINSSPercent: 0,
            discountIRPFPercent: 0,
            netSalaryPercent: 0 
        };
    }

    handleCalculateSalary = (event) => {
        let discountINSSPercent = 0;
        let discountIRPFPercent = 0;
        let netSalaryPercent = 0; 

        let salary = parseFloat(event.target.value);
        const fullSalaryCalculated =  calculateSalaryFrom(salary);
        if (salary > 0) {
            discountINSSPercent = Math.round((fullSalaryCalculated.discountINSS/salary)*10000)/100;
            discountIRPFPercent = Math.round((fullSalaryCalculated.discountIRPF/salary)*10000)/100;
            netSalaryPercent = Math.round((fullSalaryCalculated.netSalary/salary)*10000)/100;
        }

        this.setState({
            fullSalary: fullSalaryCalculated,
            discountINSSPercent,
            discountIRPFPercent,
            netSalaryPercent
        })
    }

    render() {
        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = this.state.fullSalary;
        const { discountINSSPercent, discountIRPFPercent, netSalaryPercent } = this.state;
        return (
                <div className="container">
                    <div className={css.title}>
                        React Salary
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <InputFullSalary onChangeValue={this.handleCalculateSalary}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m3">
                            <label>Base INSS:</label>
                            <InputReadOnly value={formatNumber(baseINSS)}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto INSS:</label>
                            <InputReadOnly value={`${formatNumber(discountINSS)} (${discountINSSPercent})%`} colorText="#e67e22"/>
                        </div>
                        <div className="col m3">
                            <label>Base IRPF:</label>
                            <InputReadOnly value={formatNumber(baseIRPF)}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto IRPF:</label>
                            <InputReadOnly value={`${formatNumber(discountIRPF)} (${discountIRPFPercent})%`} colorText="#c0392b"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m4">
                            <label>Salário líquido:</label>
                            <InputReadOnly value={`${formatNumber(netSalary)} (${netSalaryPercent})%`} colorText="#16a085"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <ProgressBarSalary discountINSS={discountINSSPercent} discountIRPF={discountIRPFPercent}/>
                        </div>
                    </div>
                </div>            
                );
        }
}
