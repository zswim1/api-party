import React, { Component } from 'react'
import './Distance.css'

class Distance extends Component{
    
    state = {
        data: {
            location: '',
            destination: '',
            distance: '',
            time: '',
            transport: '',
        }
    }

    componentWillMount = () => {
        this.fetchUserData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location;
        if (locationChanged) {
            this.fetchUserData(nextProps);
        }
    }

    fetchUserData(props){
        const that = this;
        console.log(that)
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${props.match.params.from}&destinations=${props.match.params.to}&mode=${props.match.params.trans}&key=AIzaSyDDubFxsIXeKVGX2UkgDS7tYKD13IH8PkM`)
        .then(response => response.json())
        .then(fromAPI => {
            const data = {
                location: fromAPI.origin_addresses[0],
                destination: fromAPI.destination_addresses[0],
                time: fromAPI.rows[0].elements[0].duration.text,
                distance: fromAPI.rows[0].elements[0].distance.text,
                transport: that.props.match.params.trans
            }
            that.setState({data})
        })
    }

    render(){
        const { location, destination, distance, time, transport} = this.state.data
        return(
            <div className= 'Maps distance'>
                <h3>{transport} from {location} to {destination}</h3>
                <h3>Distance: {distance} </h3>
                <h3>Time: {time}</h3>
            </div>
        )
    }
}
export default Distance