import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import NavBar from "../components/Navbar";
import ProfilePageHeader from "../components/Headers/ProfilePageHeader";
import DefaultFooter from "../components/Footers/DefaultFooter";
import SearchHeader from "../components/Headers/searchHeader";
function SearchPage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <SearchHeader />
        <div>
          <DefaultFooter />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
