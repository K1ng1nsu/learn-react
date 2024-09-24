import React, { Component } from 'react'
import DateAndTime from 'date-and-time'
type Props = {
    formatString: string;
}

type State = {
    currentTime: Date;
}

export default class Clock extends Component<Props, State> {
    state = {
        currentTime: new Date()
    }

    componentDidMount = (): void => {
        setInterval(() => {
            this.setState({ currentTime: new Date() })
        }, 1000);
    }


    render() {
        const { currentTime } = this.state;
        return (
            <div>{DateAndTime.format(currentTime, this.props.formatString)}</div>
        )
    }
}