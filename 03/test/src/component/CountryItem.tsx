import React from 'react'
import { CountryType } from '../App'

type Props = {
    country: CountryType;
    test: any;
}

const CountryItem = (props: Props) => {
    const country = props.country;


    function clickHandler() {
        props.test((prev: any) => prev + "1");
    }

    return (
        <li onClick={clickHandler}>
            {country.country} - {country.visited ? "visited" : "not visited"}
        </li>
    )
}

export default CountryItem