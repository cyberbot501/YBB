// import React from 'react'
// import Nav from '../layout/nav/nav'
// import Blogs from '../components/events/blogss'



// function Blog() {
//     return (
//         <div>
//             <Nav />
//             <Blogs />
           
//         </div>
//     )
// }

// export default Blog


import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Add Routes and Route for navigation
import Nav from '../layout/nav/nav';
import Blogs from '../components/events/blogss'; // Assuming this is your list component


function Blog() {
  return (
    <div>
      <Nav />
      
        <Blogs />
        
      
    </div>
  );
}

export default Blog;


