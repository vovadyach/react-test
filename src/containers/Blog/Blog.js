import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css'; 

class Blog extends Component {
    render() {
       
 
        return (
            <div>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><NavLink to="/" exact>Home</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                            </ul>
                        </nav>
                    </header>
                </div>

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />

            </div>
        );
    }
} 

export default Blog;