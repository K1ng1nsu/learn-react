import React, { Component } from 'react'

type Person = {
    name: string;
    age: number;
}

type Test1Props = {
    person: Person;
}


export default class Test1 extends Component<Test1Props> {

    render() {
        return (
            <div>{this.props.person.name}님의 나이는 {this.props.person.age}입니다.</div>
        )
    }
}