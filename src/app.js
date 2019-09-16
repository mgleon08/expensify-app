import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>ExpenseDashboardPage</div>;
const AddExpensePage = () => <div>AddExpensePage</div>;
const EditExpensePage = () => <div>EditExpensePage</div>;
const HelpPage = () => <div>HelpPage</div>;
const NotFoundPage = () => (
  <div>
    NotFoundPage<Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      create
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      help
    </NavLink>
  </header>
);

const routers = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routers, document.getElementById('app'));
