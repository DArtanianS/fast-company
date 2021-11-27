import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import MyNavBar from './components/UI/navbar/MyNavBar'
import Main from './layouts/main'
import Users from './layouts/users'
import Login from './layouts/login'
import Edit from './layouts/edit'


function App() {
    return (<>
            <MyNavBar/>
            <Switch>
                <Route path='/login/:type?' component={Login}/>
                <Route path='/users/:userId/edit' component={Edit}/>
                <Route path='/users/:userId?' component={Users}/>
                <Route path='/' exact component={Main}/>
                <Redirect to='/' />
            </Switch>
        </>
    )
}

export default App
