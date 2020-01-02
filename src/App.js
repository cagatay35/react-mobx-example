import React from 'react';
import ProfileComponent from './components/ProfileComponent';
import './App.css';
import {ProfileStore} from "./stores/ProfileStore";
import { observable, computed, action } from "mobx-react"

import { Provider } from "mobx-react"
import UpdateProfileComponent from "./components/UpdateProfileComponent";


function App() {
  return (
      <Provider profileStore={ new ProfileStore() }>
          <div className="App">
              <div>
                  <ProfileComponent />
                  <UpdateProfileComponent/>
              </div>
          </div>
      </Provider>

  );
}

export default App;
