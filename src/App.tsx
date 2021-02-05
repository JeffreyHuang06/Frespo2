import React from 'react'
import env from "react-dotenv"

import Banner from './components/Banner'
import Feed from './components/Feed'
import FormFeed from './components/FormFeed'
import About from  './components/About'

import {Switch, Route, Redirect} from 'react-router-dom'

import './css/Generic.scss'

const App = () => {
    console.log(env.API_PATH);

    return (
        <div className='App'>
            <Switch>
                <Route path="/home">
                    <>
                        <Banner name="Frespo"/>

                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Feed />
                        </React.Suspense>
                    </>
                </Route>

                <Route path="/post">
                    <>
                        <Banner name="Post" />
                        <FormFeed />
                    </>
                </Route>

                <Route path="/about">
                    <>
                        <Banner name="About Frespo" />
                        <About />
                    </>
                </Route>

                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </div>
    );
}

export default App;