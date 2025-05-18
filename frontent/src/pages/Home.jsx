import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setloggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setloggedInUser(localStorage.getItem("name"));
    
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    toast.success("logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  
  }

  const fetchProducts = async ()=>{
    try {
      const url = "http://localhost:8080/products";
      const data = await fetch(url , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")    
         }})
      const result = await data.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      toast.error(error);
      
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <div>
      Welcome {loggedInUser}
      <button onClick={handleLogout}>Logout</button>
      <div>
        {
          products.map((val) => {
            return (
              <ul>
                <li>{val.mobile} : {val.price}</li>
              </ul>
            )
          })
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
