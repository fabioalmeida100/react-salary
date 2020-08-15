import React, { Component } from 'react';
import css from "./app.module.css";
import InputFullSalary from './components/InputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary';

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
            }  
        };
    }

    render() {
        const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = this.state.fullSalary;
        return (
                <div className="container">
                    <div className={css.title}>
                        React Salary
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <InputFullSalary />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m3">
                            <label>Base INSS:</label>
                            <InputReadOnly value={baseINSS}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto INSS:</label>
                            <InputReadOnly value={discountINSS}/>
                        </div>
                        <div className="col m3">
                            <label>Base IRPF:</label>
                            <InputReadOnly value={baseIRPF}/>
                        </div>
                        <div className="col m3">
                            <label>Desconto IRPF:</label>
                            <InputReadOnly value={discountIRPF}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m3">
                            <label>Salário líquido:</label>
                            <InputReadOnly value={netSalary}/>
                        </div>
                    </div>
                    <div className="row">
                        <ProgressBarSalary />
                    </div>
                </div>            
                );
        }
}
