import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import Header from './components/Header';
import firebase from 'firebase';
import { Button } from 'reactstrap';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCR67BBAM6W8LkabEtEgoKC_cWcD1lp_ig",
  authDomain: "webtretho-3f5fd.firebaseapp.com",
  projectId: "webtretho-3f5fd",
  storageBucket: "webtretho-3f5fd.appspot.com",
  messagingSenderId: "909063536968",
  appId: "1:909063536968:web:f75d9ccd128d9821a5b37d",
  measurementId: "G-2RF6ZDPXFN"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    
    fetchProductList();
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async (user) => {
      if(!user){
        console.log('User is not logged in');
        return;
      }  
      
      console.log('logged in user: ', user.displayName);

      const token = await user.getIdToken();
      console.log('Logged in user token: ', token);
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,

      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log('Failed to fetch product list: ', error);
    }
  }

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
        <Header />

          <Button onClick={handleButtonClick}>Fetch Product List</Button>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component={SignIn}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
