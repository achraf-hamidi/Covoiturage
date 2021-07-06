import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

//  core components

function SearchHeader() {
  let pageHeader = React.createRef();
  const [fromFocus, setFromFocus] = React.useState(false);
  const [toFocus, settoFocus] = React.useState(false);
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
            backgroundImage: "url(bg12.jpg)",
          }}
          ref={pageHeader}
        ></div>
        <Container className="text-center">
          <div style={{ marginTop: "6em" }}>
            <h1 style={{ color: "white" }}>Où voulez-vous aller ?</h1>
            <div style={{ width: "9cm", marginLeft: "27em" }}>
              <InputGroup
                className={
                  "no-border" + (fromFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Départ"
                  type="text"
                  onFocus={() => setFromFocus(true)}
                  onBlur={() => setFromFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border" + (fromFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText></InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Destination"
                  type="text"
                  onFocus={() => setFromFocus(true)}
                  onBlur={() => setFromFocus(false)}
                ></Input>
              </InputGroup>
              <Button className="btn-round content-left" color="white" outline>
                Rechercher
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchHeader;
