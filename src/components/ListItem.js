import React from 'react'

const ListItem = (props) => {
    return (
        <div>
            {props.currentPosts.map(item =>(
            <div className="parent" key={item.id}>
                <div className="box-one">
                <h1>Hi,<br />
                    I’m&nbsp;
                    <span className="color-secondary">{item.login}</span>
                    <br />
                    I,m Github <span className="color-secondary">{item.type}</span>
                    
                </h1>
                <div className="contact-bttn">
                <a className="contact-link" target="-blank" href={item.html_url}> Github</a> 
                </div>
                </div>
                <div className="box-two">
                <div className="image" >
                <img src={item.avatar_url} alt="profile_image" />
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default ListItem
