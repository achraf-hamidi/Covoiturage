import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import { useSelector } from 'react-redux';


// core components
import NavBar from "../components/Navbar";
import DefaultFooter from "../components/Footers/DefaultFooter";
import LandingPageHeader from "../components/Headers/LandingPageHeader";
function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <LandingPageHeader />

        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h3>Le covoiturage</h3>
                <h5 className="description">
                  Trajet à la Carte vous facilite l’accès au covoiturage, un
                  nouveau mode de transport pour se déplacer rapidement avec un
                  système de partage des frais d’utilisation. Grâce à ce service
                  inédit, vous voyagez moins cher, librement et en bonne
                  compagnie avec un covoitureur fiable !
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage: "url(cov2.jpg)",
                    }}
                  ></div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage: "url(cov3.jpg)",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage: "url(cov5.jpg)",
                    }}
                  ></div>
                  <h3>Pourquoi faire du covoiturage ?</h3>
                  <p>
                    Le covoiturage apporte une solution très efficace aux
                    problèmes de parking. En partageant les frais avec le
                    conducteur, vous allez faire des économies sur les frais de
                    carburant. De plus, vous contribuez au développement durable
                    en réduisant les émissions de CO2. Le covoiturage permet
                    aussi d’éviter les embouteillages. Enfin, vous pourrez faire
                    de nouvelles connaissances et partager sur des sujets
                    intéressants tout au long de votre trajet.
                  </p>
                  <p>
                    Le covoiturage étant un mode de déplacement dans lequel on
                    partage des frais de transport, il n’est pas soumis aux
                    impôts. À condition que vous satisfassiez aux trois
                    conditions suivantes : Un registre national étoffé
                    référençant l’ensemble des données de mobilité nécessaires à
                    l’information des voyageurs sur le territoire à travers le
                    point d’accès national Le référencement d’opérateurs privés
                    du covoiturage sur la centrale d’achat du transport public
                    La création d’un registre de preuve de covoiturage et d’une
                    foire aux questions associée Des appels à manifestations
                    d’intérêt et le financement de projets via le fonds mobilité
                    de l’Ademe Le financement de plusieurs projets favorisant le
                    covoiturage par des programmes CEE (certificats d’économie
                    d’énergie)
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
