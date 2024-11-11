import React, { useEffect } from 'react';
import './assets/css/todos.scss'
import axios from 'axios'
import store from './state/store';
import Insert from './component/Insert';
import List from './component/List';
import Sort from './component/Sort';

function App() {

  return (
    <div className='todolist'>
      <h2>todos</h2>
      <div className='wrap'>
        <Insert/>
        <List/>
        <Sort/>
      </div>
    </div>
  );
}

export default App;
