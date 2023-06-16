import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllListings from "./components/AllListings";
import ListingDetails from "./components/ListingDetails";
import ManageListings from './components/ManageListings';
import CreateListing from "./components/CreateListing";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path='/'>
            <AllListings/>
          </Route>

          <Route exact path='/listings'>
            <CreateListing/>
          </Route>

          <Route path='/listings/:listId'>
            <ListingDetails/>
          </Route>

          <Route path='/users/:userId/listings'>
            <ManageListings />
          </Route>

          {/* <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route> */}

        </Switch>
      )}
    </>
  );
}

export default App;
