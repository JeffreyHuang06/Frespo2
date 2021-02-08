import React from 'react'

import Banner from './components/Banner'
import Feed from './components/Feed'
import FormFeed from './components/FormFeed'
import About from  './components/About'

import {Switch, Route, Redirect} from 'react-router-dom'
import FallThrough from './components/FallThrough'

import './css/Generic.scss'

const App = () => {
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

                <Route path="/404">
                    <>
                        <Banner name="Error 404" />
                        <FallThrough />
                    </>
                </Route>

                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route path="/">
                    <Redirect to="/404" />
                </Route>

                {/* For all the redirects */}
                {/* <Route exact path="/" component={FallThrough} /> */}
            </Switch>
        </div>
    );
}

export default App;