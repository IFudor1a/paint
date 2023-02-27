import React, {useEffect} from 'react';
import "../styles/App.scss";
import Toolbar from "./Toolbar";
import Settings from "./Settings";
import Canvas from "./Canvas";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {postSlice} from "../redux/reducers/canvas";
import {fetchUsers} from "../redux/reducers/actionCreator";

function App() {
    const {count} = useAppSelector(state => state.postReducer)
    const {posts, isLoading, error} = useAppSelector(state => state.postReducer)
    const {increment} = postSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    })
  return (
    <div className="App">
         <Toolbar/>
         <Settings/>
         <Canvas/>
        <h1>{count}</h1>
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>{error}</h1>}
        <div> {JSON.stringify(posts, null, 2)}</div>
        <button onClick={() => dispatch(increment(1))}>Inc</button>
    </div>
  );
}

export default App;
