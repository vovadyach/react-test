import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {
    render() {
       

        return (
            <div>
                <div className="Blog">
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/new-post">New Post</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                <Route path="/" exact component={Posts} />

            </div>
        );
    }
}

export default Blog;