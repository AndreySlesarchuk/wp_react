import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./components/__pages/Home";
import {About} from "./components/__pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/__pages/Alert";
import {AlertState} from "./context/alert/AlertState";

// npx create-react-app my-app
// cd my-app
// npm start
// npm i -g yarn
// yarn add node-sass react-router-dom bootstrap axios
// yarn run start

function App() {

    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Alert/>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/about'} component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    )
}

export default App;
