import React from 'react'

import { CountryType } from '../App';
import CountryItem from './CountryItem';

type CountryListPropsType = {
    countries: Array<CountryType>;
    test: any;
}

// const CountryList: React.FC<CountryListPropsType> = ({ countries }) => {
//     const list = countries;

//     return (
//         <ul>
//             {list.map((item, index) => {
//                 return (
//                     <li key={item.no}>
//                         {item.country} - {item.visited ? "방문함" : "방문안함"}
//                     </li>
//                 );
//             })}
//         </ul>
//     )
// }


const CountryList = (props: CountryListPropsType) => {
    const list = props.countries;

    return (
        <ul>
            {list.map((item, index) => {
                return (
                    <CountryItem key={item.no} country={item} test={props.test} />
                );
            })}
        </ul>
    )
}


export default CountryList