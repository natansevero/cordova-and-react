import 'modules/font-awesome/css/font-awesome.min.css'
// import './cordova-style.css'
import './style.css'

import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { number: 0 }
    }
    
    acao(sum) {
        this.setState({ number: this.state.number + sum })
    }

    render() {
        return (
            <div>
                <button className="sum" onClick={ () => this.acao(1) }>SUM</button>

                <h1>{ this.state.number }</h1>
            </div>
        )
    }
}