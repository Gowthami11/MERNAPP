import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import Landing from "../components/Landing";

const Dashboard = () => <div>Dashboard</div>;
const SurveryNew = () => <div>SurveryNew</div>;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchUser());
  }, []);
  console.log(
    "stripe keys",
    process.env.NODE_ENV,
    process.env.REACT_APP_STRIPE_KEY
  );
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurveryNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
