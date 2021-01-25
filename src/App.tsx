import React from 'react'
import env from "react-dotenv"

import Banner from './components/Banner'
import Feed from './components/Feed'
import FeedForm from './components/FormFeed'

import './css/Generic.scss'

const App = () => {
    console.log(env.API_PATH);

    return (
        <div className='App'>
            <Banner name="Frespo"/>

            <React.Suspense fallback={<div>Loading...</div>}>
                <Feed />
            </React.Suspense>
            <FeedForm />
        </div>
    );
}

export default App;