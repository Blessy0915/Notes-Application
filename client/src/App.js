import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash' 
import { startLogoutUser } from './actions/user'

import Home from './components/common/Home'
import RegisterForm from './components/users/Register'
import LoginForm from './components/users/Login'


import NoteList from './components/notes/NoteList'
import NoteShow from './components/notes/NoteShow'
import NoteNew from './components/notes/NoteNew'
import NoteEdit from './components/notes/NoteEdit'

import CategoryList from './components/category/CategoryList'
import CategoryShow from './components/category/CategoryShow'
import CategoryNew from './components/category/CategoryNew'
import CategoryEdit from './components/category/CategoryEdit'

function App(props) {
  const handleLogout = () =>
  {
        props.dispatch(startLogoutUser())
  }
  return (
    <BrowserRouter>
    <div className = "container-fullwidth">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <Link to="/" className="navbar-brand mb-0 h3"><img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>Notes App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
    <ul class="nav justify-content-end">
      {

      !_.isEmpty(props.user) ? 
      <div>
      <li class="navbar-nav">
        <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/notes">Notes <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/categories">Categories<span class="sr-only">(current)</span></Link>
        
        <Link class="nav-item nav-link active" to="#" onClick = {handleLogout}>Logout <span class="sr-only">(current)</span></Link>
      </li>
      </div>
      :
      <div>
      <li class="navbar-nav">
        <Link class="nav-item nav-link active" to="/users/register">Register <span class="sr-only">(current)</span></Link>
        <Link class="nav-item nav-link active" to="/users/login">Login <span class="sr-only">(current)</span></Link>
      </li>

      </div>
}
     </ul>
</nav>
 <br/>
 <br/>
 </div>
      <div className = "container">
        
        

         
    
        <Switch>
          <Route path = "/" component = {Home} exact = {true}/>
          <Route path = "/users/register" component = {RegisterForm}/>
          <Route path = "/users/login" component = {LoginForm}/>
          

          <Route path = "/notes" component = {NoteList} exact = {true}/>
          <Route path = "/notes/new" component = {NoteNew}/>
          <Route path = "/notes/edit/:id" component = {NoteEdit}/>
          <Route path = "/notes/:id" component = {NoteShow}/>

          <Route path = "/categories" component = {CategoryList} exact = {true}/>
          <Route path = "/categories/new" component = {CategoryNew}/>
          <Route path = "/categories/edit/:id" component = {CategoryEdit}/>

          <Route path = "/categories/:id" component = {CategoryShow}/>
        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

const mapStateToProps = ( state ) =>
{
  return({
    user : state.user
  })
}
export default connect(mapStateToProps)(App);
