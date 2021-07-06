import React from "react";

// reactstrap components
import {
  Button,
  Container,
  FormGroup,
  Row,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import Datetime from "react-datetime";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  const [fromFocus, setFromFocus] = React.useState(false);
  const [toFocus, settoFocus] = React.useState(false);
  const [DateFocus, setDateFocus] = React.useState(false);

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
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(background.jpg)",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Choisissez le voyage qui vous plaîts.</h1>
            <div className="text-center"></div>
            <div style={{ width: "19cm", marginLeft: "4em", float: "left" }}>
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
                <Input
                  placeholder="Destination"
                  type="text"
                  onFocus={() => setFromFocus(true)}
                  onBlur={() => setFromFocus(false)}
                ></Input>
              </InputGroup>
              <Button
                className="btn-round content-left"
                color="white"
                outline
                style={{ marginLeft: "-3em" }}
              >
                Rechercher
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
