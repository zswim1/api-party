import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './Maps.css'
import Distance from './Distance'

class Maps extends Component{
    state = {
        from: '',
        to: '',
        combined: this.from + this.to,
    }

    handleFromChange = (ev) => {
        const from = ev.currentTarget.value
        this.setState({from})
    }

    handleToChange = (ev) => {
        const to = ev.currentTarget.value
        this.setState({to})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/maps/${this.state.from + this.state.to}`)
    }
    render(){
        return(
            <div className="maps">
                <img className="maps-logo" src="https://vignette2.wikia.nocookie.net/heman/images/3/36/Earth.jpg/revision/latest?cb=20130912205625" alt="google maps"/>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="">Location</label>
                        <input type="text"
                            value={this.state.from}
                            onChange={this.handleFromChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Destination</label>
                        <input type="text"
                                value={this.state.to}
                                onChange={this.handleToChange}
                        />
                    </div>
                    
                    
                </div>
                <div>
                    <button type="submit">Calculate Distance</button>
                </div>
                </form>

                <Route exact path='/maps' render={() => (
                <h4>Please enter a location and destination</h4> 
                )} />
                <Route path='/maps/:from:to' component={Distance} />
            </div>


        )
    }
}
export default Maps