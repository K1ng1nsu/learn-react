import React, { Component } from 'react'

type Props = {
    formatString: string;
    changeFormat: (format: string) => void;
    // changeFormat: Function;
}


export default class Test3 extends Component<Props> {
    state = {}

    render() {
        return (
            <div>
                <button onClick={(e) => this.props.changeFormat("HH:mm:ss")}>적용</button>
            </div>
        )
    }
}