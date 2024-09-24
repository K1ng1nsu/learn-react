import React, { Component } from 'react'


type State = {
    name: string;
}

export default class Test2 extends Component<{}, State> {
    state: State = {
        name: "홍길동"
    }

    render() {
        return (
            <div>이름은 {this.state.name}</div>
        )
    }
}