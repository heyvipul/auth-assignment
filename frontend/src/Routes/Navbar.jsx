import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem("token")) || null;
    setIsLoggedIn(tokenData !== null);
  }, [isLoggedIn]);

  const links = [
    { path: "/", title: "Home" },
    { path: "/signup", title: "Signup" },
    { path: "/login", title: isLoggedIn ? "Logout" : "Login" }
  ];

  return (
    <div id='navbar'>
      {links.map(function(ele){
        return <Link key={ele.path} to={ele.path}>{ele.title}</Link>
      })}
    </div>
  )
}

export default Navbar