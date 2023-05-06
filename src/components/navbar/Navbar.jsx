import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
          <header>
            <Link to={"/"}>
            <h1>Green GrowShop</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Inicio</NavLink>
                </li>
                <li>
                  <NavLink to={"/macetas"}>Macetas</NavLink>
                </li>
                <li>
                  <NavLink to={"/tierras"}>Tierras</NavLink>
                </li>
                <li>
                  <NavLink to={"/paneles"}>Paneles</NavLink>
                </li>
              </ul>
            </nav>
          </header>

         
        );
      }
      
    
  
