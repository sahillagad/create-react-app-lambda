import React from "react";
import image1 from "../Assets/MasaiSchool.jpg"
const Navbar=(props)=>{
    return(
        <> 
         <nav class="navbar navbar-light bg-white shadow-sm">
  <div class="container-fluid">
  <a class="navbar-brand" href="">
    <img src={image1} width="100" height="50" class="d-inline-block align-top" alt=""/>
     
  </a>
   
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-dark" type="submit">Search</button>
    </form>
  </div>
</nav>
        
        </>
    )
}

export default Navbar;