import { Component } from 'react'
import Test1 from './Test1';
import Test2 from './Test2';


type Person = {
    name: string;
    age: number;
}

type State = {
    person: Person;
}
class Test extends Component<{}, State> {
    state = {
        person: {
            name: "insu",
            age: 27
        }
    }

    render() {
        return (
            <>
                <div>
                    <Test1 person={this.state.person} />
                </div>
                <div>
                    <Test2 />
                </div>
            </>
        )
    }
}

export default Test