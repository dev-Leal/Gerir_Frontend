import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tarefas from './pages/tarefas';
import Login from './pages/login';

//as= dar um apelido, abreviação 
import  'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const rotas = (
  <Router>
    <div>
      <Switch>
        {/* o exact está em ação para que a rota de Login seja exatamente /
         para que em /tarefas não retorne o Login e sim a rota certa Tarefas  */}
        <Route exact path='/' component={Login}/>
        <Route path='/tarefas' component={Tarefas}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <React.StrictMode>
    {rotas}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
