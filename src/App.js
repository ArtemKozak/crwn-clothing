import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from "./pages/hompage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSingUpPage from "./pages/sing-in-and-sing-up/sing-in-and-sing-up.component";

import { auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log({currentUser: userAuth})
                });
            }

            this.setState({currentUser: userAuth});
        })
    };

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/singin' component={SingInAndSingUpPage} />
                </Switch>
            </div>
        );
    }


}

export default App;