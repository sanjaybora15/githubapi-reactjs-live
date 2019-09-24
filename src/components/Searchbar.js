import React from 'react';

class Searchbar extends React.Component{
    state ={
        value:''
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }

    render(){
        return (
            <div className="search-box">
                <form className="search-form" onSubmit={this.onFormSubmit}>
                    <input type="text"
                            name="search"
                            value={this.state.value}
                            onChange={e => this.setState({value: e.target.value})}
                            placeholder="Search Something..." 
                            required />    
                    <button type ="submit"
                            name="submit"
                            className="btn-submit">Search
                    </button>
                </form>
            </div>
        )
    }
    
}

export default Searchbar
