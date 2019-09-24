import React from 'react';
import Searchbar from './components/Searchbar';
import githubapi from './api/githubapi';
import AllList from './components/AllList';
import SearchResult from './components/SearchResult';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

class App extends React.Component{
  state={
    searchList:[],
    redirect:false
  }

  onSearchSubmit = async value => {
    const response = await githubapi.get(`/search/users?q=${value}`,{
      params:{query:value}
    })
    this.setState({
      searchList:response.data.items,
      redirect:true
    })
  }

  render(){
    return(
      <BrowserRouter>
      <div >
        <Navbar />
        <div className="container">
        <Searchbar onSubmit={this.onSearchSubmit}/>
        <Route exact path="/" component={AllList} />
        {this.state.redirect ? < Redirect to={{pathname:"/search",state:{searchList:this.state.searchList}}} /> : <Redirect to="/" /> }
        <Route path="/search" component={SearchResult} />
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
}

export default App
