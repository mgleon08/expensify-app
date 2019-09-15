import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>ExpenseDashboardPage</div>;
const AddExpensePage = () => <div>AddExpensePage</div>;
const EditExpensePage = () => <div>EditExpensePage</div>;
const HelpPage = () => <div>HelpPage</div>;
const NotFoundPage = () => <div>NotFoundPage</div>;

const routers = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routers, document.getElementById('app'));
