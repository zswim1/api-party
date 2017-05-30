import React, { Component } from 'react'
import './Distance.css'

class Distance extends Component{
    
    state = {
        data: {
            'origin-addresses': '',
            'destination-addresses': '',
            elements: '',
        }
    }

    constructor(props){
        super(props)
        this.fetchUserData(props)
    }

    fetchUserData(props){
        //fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${props.match.params.from}&destinations=${props.match.params.to}&key=AIzaSyDDubFxsIXeKVGX2UkgDS7tYKD13IH8PkM`)
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Chicago,IL&destinations=Seattle,WA&key=AIzaSyDDubFxsIXeKVGX2UkgDS7tYKD13IH8PkM`)
        .then(response => response.json())
        .then(data => this.setState = () => { 
            data 
            debugger
            }
        )
            
        debugger
    }

    render(){
        return(
            <div>
                <label htmlFor="">Distance: </label>
            </div>
        )
    }
}
export default Distance