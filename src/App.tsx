import React from 'react'
import env from "react-dotenv"

import Banner from './components/Banner'
import Feed from './components/Feed'
import FeedForm from './components/FormFeed'

import getFeed from './getpost/getFeed'

import './css/Generic.scss'

const App = () => {
    console.log(env.API_PATH);
    return (
        <div className='App'>
            <Banner 
            name="Frespo"
            />

            <Feed />
            <FeedForm />

            <button onClick={getFeed}>Click me</button>
        </div>
    );
}

export default App;