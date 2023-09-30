import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";

function Navbar() {
  const context = useContext(ShoppingCardContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {routesLeft.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              onClick={() => context.setSearchByCategory(route.category)}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        <li className="text-black/60">teff@platzi.com</li>
        {routesRight.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black cursor-pointer" />{" "}
          {context.cardProducts.length}
        </li>
      </ul>
    </nav>
  );
}

const routesLeft = [];
routesLeft.push({ to: "/", label: "All", category: "" });
routesLeft.push({ to: "/clothes", label: "Clothes", category: "clothes" });
routesLeft.push({
  to: "/electronics",
  label: "Electronics",
  category: "electronics",
});
routesLeft.push({ to: "/animals", label: "Animals", category: "animals" });
routesLeft.push({ to: "/toys", label: "Toys", category: "toys" });
routesLeft.push({ to: "/others", label: "Others", category: "others" });

const routesRight = [];
routesRight.push({ to: "/my-orders", label: "My Orders" });
routesRight.push({ to: "/my-account", label: "My Account" });
routesRight.push({ to: "/sign-in", label: "Sign In" });

export { Navbar };
