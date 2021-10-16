import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            message: 'welcome visitor'
        }
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage() {
        this.setState({
            message: 'Thanks Pranav'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={() => this.changeMessage()}>subscribe</button> */}
            {/* best way */}
                <button onClick={this.changeMessage}>subscribe</button>
            </div>
        )
    }
}

export default EventBind
