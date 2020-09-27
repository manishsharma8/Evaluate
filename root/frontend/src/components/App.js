import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './HomePage'
import Navbar from './Navbar'
import SignIn from './SignIn'
import Welcome from './Welcome'
import StudentDashboard from './student/StudentDashboard'
import TeacherDashboard from './teacher/TeacherDashboard'
import CreateExam from './teacher/CreateExam'
import Responses from './teacher/Responses'

class App extends React.Component{
    state = {
        data: null
    };
    
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    };

    render(){
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route component={HomePage} exact path="/" />
                    <Route component={SignIn} path="/signin" />
                    <Route component={Welcome} path="/welcome" />
                    <Route component={StudentDashboard} path="/student/dashboard" />
                    <Route component={TeacherDashboard} path="/teacher/dashboard" />
                    <Route component={CreateExam} path="/teacher/new" />
                    <Route component={Responses} path="/teacher/responses" />
                </Switch>
            </div>
        )
    }
}

export default App;