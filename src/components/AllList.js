import React from 'react';
import githubapi from '../api/githubapi';
import Pagination from './Pagination';
import ListItem from './ListItem';

class AllList extends React.Component{
  state = {
    users:[],
    loading:false,
    currentPage:1,
    postPerPage:5
  }

async componentDidMount(){
  const res = await githubapi.get('/search/users?q=bangalore')
  this.setState({
    users: res.data.items
  })
  }
  paginate = (number) => {
    this.setState({
      currentPage:number
    })
  }
  render(){
    //get current post
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentPosts =  this.state.users.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div>
        <ListItem currentPosts={currentPosts}/>
        <Pagination postsPerPage={this.state.postPerPage} totalPosts={this.state.users.length} paginate={this.paginate} />
      </div>
    )
  }
}

export default AllList
