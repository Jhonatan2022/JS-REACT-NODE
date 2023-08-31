import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
      {routes.map(route => (
        <li>
            <NavLink 
                style={({ isActive })=> ({
                    color: isActive ? "red" : "blue"
                })}
                to={route.to} end>  
                {route.text}
            </NavLink>
        </li>
      ))}
      </ul>
    </nav>
  );

// <nav>
//     <ul>
//         <li>
//             <NavLink to="/" end>Home</NavLink>
//         </li>
//         <li>
//             <NavLink to="/profile">Profile</NavLink>
//         </li>
//     </ul>
// </nav>
}

const routes = [];
routes.push({ to: "/", text: "Home" });
routes.push({ to: "/profile", text: "Profile" });
routes.push({ to: "/blog", text: "Blog" });

export { Menu };