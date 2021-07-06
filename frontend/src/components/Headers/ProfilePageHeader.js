 import React from "react";

//  reactstrap components
 import { Container } from "reactstrap";

 // core components

 function ProfilePageHeader() {
   let pageHeader = React.createRef();

   React.useEffect(() => {
     if (window.innerWidth > 991) {
       const updateScroll = () => {
         let windowScrollTop = window.pageYOffset / 3;
         pageHeader.current.style.transform =
           "translate3d(0," + windowScrollTop + "px,0)";
       };
       window.addEventListener("scroll", updateScroll);
       return function cleanup() {
         window.removeEventListener("scroll", updateScroll);
       };
     }
   });
   return (
     <>
       <div className="page-header clear-filter " filter-color="blue">
         <div
           className="page-header-image"
           style={{
             backgroundImage: "url(bg5.jpg)",
           }}
           ref={pageHeader}
         ></div>
         <Container>
           <div className="photo-container">
             <img src="user2.png"></img>
           </div>
           <h3 className="title">Ryan Scheinder</h3>
           <p className="category">email</p>
           <div className="content">
             <div className="social-description">
               <h2>25</h2>
               <p>trajets</p>
             </div>
             {/* <div className="social-description">
               <h2>26</h2>
               <p>Comments</p>
             </div> */}
           </div>
         </Container>
       </div>
     </>
   );
 }

 export default ProfilePageHeader;
