import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import useContextData from "./component/context/index"
import App from './App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <useContextData.Provider value={[]}>
      <App />
    </useContextData.Provider>
       
    
  </>
);
