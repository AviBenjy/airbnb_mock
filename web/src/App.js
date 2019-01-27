import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { GlobalContext } from './GlobalContext'

import HomePage from './components/HomePage'
import Footer from './components/Footer'
import ResultHomes from './components/ResultHomes'
import HomeDetails from './components/HomeDetails'


class App extends Component {

  setQuerySearch = async (querySearch) => {
    this.setState({querySearch})    
  }

  actions = {
    setQuerySearch: this.setQuerySearch
  }

  render() {
    const {actions} = this

    return (
      <BrowserRouter>
         <GlobalContext.Provider value={{...actions}}>
          <Switch>
            <Route path={`/homes`} component={ResultHomes}/>
            <Route path={`/home`} component={HomeDetails}/>
            <Route path='/' component={HomePage}/>
          </Switch>
         <Footer/>
         </GlobalContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App
