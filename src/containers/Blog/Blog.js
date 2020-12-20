import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  state = {
    selectedPostId: null,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: "#fa923f", textDecoration: "underline" }}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
              >
                Nuevo Envio
              </NavLink>
            </li>
          </ul>
        </header>
        <Route path="/" exact component={Posts} />
        <Switch>
          {/* <Route path="/" exact render={() => <h1>Inicio</h1>} />
        <Route path="/new-post" exact render={() => <h1>new-post</h1>} /> */}
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
