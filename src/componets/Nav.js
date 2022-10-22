import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  navs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Product",
      link: "/product",
    },
  ];
  render() {
    return (
      <ul class="nav  container">
        {this.navs.map((item, id) => {
          return (
            <li key={id} class="nav-item">
              <Link to={item.link} class="nav-link active">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
