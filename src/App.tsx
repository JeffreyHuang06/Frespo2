import React from 'react'

import Banner from './components/Banner'
import Header from './components/Header'
import Feed from './components/Feed'
import FormFeed from './components/FormFeed'
import About from  './components/About'

import { useRecoilValue } from 'recoil'
import BodyTextAtom, {BodyTextTypes} from './state/bodyTextAtom'

import { Switch, Route, Redirect } from 'react-router-dom'
import FallThrough from './components/FallThrough'

import './css/Generic.scss'

const App = () => {
    const bodyText = useRecoilValue<BodyTextTypes>(BodyTextAtom);

    return (
        <div className='App'>
            <Banner name={bodyText.bannerText} />
            <Header text={bodyText.headerText} />

            <Switch>
                <Route path="/home">
                    <>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Feed />
                        </React.Suspense>
                    </>
                </Route>

                <Route path="/post">
                    <>
                        <FormFeed />
                    </>
                </Route>

                <Route path="/about">
                    <>
                        <About />
                    </>
                </Route>

                <Route path="/404">
                    <>
                        <FallThrough />
                    </>
                </Route>

                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>

                <Route path="/">
                    <Redirect to="/404" />
                </Route>

            </Switch>
        </div>
    );
}

export default App;