import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from './components/users'
import MyNavBar from "./components/UI/navbar/MyNavBar";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import User from './components/user'


function App() {

    return (<>
            <MyNavBar/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/users/:userId' component={User}/>
                <Route path='/users/' component={Users}/>
            </Switch>
        </>
    )
}

export default App
