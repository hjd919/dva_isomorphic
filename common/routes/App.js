import React from 'react';
import { connect } from 'dva';

import { redirectTo } from '../utils/funcs';

function App({ list = [], dispatch, error= '' } = {}) {
  return (
    <div>
      <h1>App _ {error}</h1>
      <h3 onClick={() => { redirectTo('/about') }}>About</h3>
      <h3 onClick={() => { dispatch({ type: 'user/fetchTodoList' }) }}>点我试试2</h3>
      <h2 className="title">User555</h2>
      {
        list.map(({ id, name }, i) => <div key={i}>- {name}</div>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: (state.user || {}).list,
    error: (state._system || {}).serverGetDataError,
  };
}

export default connect(mapStateToProps)(App);