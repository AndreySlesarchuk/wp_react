import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./components/__pages/Home";
import {About} from "./components/__pages/About";
import {Navbar} from "./components/Navbar";

// npx create-react-app my-app
// cd my-app
// npm start
// npm i -g yarn
// yarn add node-sass react-router-dom bootstrap axios
// yarn run start

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/about'} component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
