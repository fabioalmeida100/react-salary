import React, { Component } from 'react';
import css from "./app.module.css";
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';
import { calculateSalaryFrom } from "./helpers/salary";

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
        let salary = parseFloat(event.target.value);
        const fullSalaryCalculated =  calculateSalaryFrom(salary);
        const discountINSSPercent = Math.round((fullSalaryCalculated.discountINSS/salary)*10000)/100;
        const discountIRPFPercent = Math.round((fullSalaryCalculated.discountIRPF/salary)*10000)/100;
        const netSalaryPercent = Math.round((fullSalaryCalculated.netSalary/salary)*10000)/100;

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
                            <InputReadOnly value={baseINSS}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto INSS:</label>
                            <InputReadOnly value={`${discountINSS} (${discountINSSPercent})%`} />
                        </div>
                        <div className="col m3">
                            <label>Base IRPF:</label>
                            <InputReadOnly value={baseIRPF}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto IRPF:</label>
                            <InputReadOnly value={`${discountIRPF} (${discountIRPFPercent})%`}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m4">
                            <label>Salário líquido:</label>
                            <InputReadOnly value={`${netSalary} (${netSalaryPercent})%`}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <ProgressBarSalary />
                        </div>
                    </div>
                </div>            
                );
        }
}
