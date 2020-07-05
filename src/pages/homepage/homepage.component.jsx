import React from 'react'
// import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
import {HomePageContainer} from './homepage.styles.jsx'

// const HomePage = () => {
//     return (
//         <div className="homepage">
//             <Directory ></Directory>
//         </div>
//     )

// }

// replace with styled component
const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory ></Directory>
        </HomePageContainer>
    )

}


export default HomePage