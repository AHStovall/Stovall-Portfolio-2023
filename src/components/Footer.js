import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";
  
  export default function App() {
    return (
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <div
          className="text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)"}}
        >
          <section className="icons">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4"> </h6>
                  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block"></div>
  
                    <div>
                      <a
                        href="https://twitter.com/theadamstovall"
                        target="_blank" rel="noreferrer"
                        className="me-4 text-reset"
                      >
                        <MDBIcon fab icon="twitter" size='lg' />
                      </a>
                      <a
                        href="https://www.instagram.com/theadamstovall/"
                        target="_blank" rel="noreferrer"
                        className="me-4 text-reset"
                      >
                        <MDBIcon fab icon="instagram" size='lg'/>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/adamhstovall/"
                        target="_blank" rel="noreferrer"
                        className="me-4 text-reset"
                      >
                        <MDBIcon fab icon="linkedin" size='lg'/>
                      </a>
                      <a
                        href="https://github.com/AHStovall"
                        target="_blank" rel="noreferrer"
                        className="me-4 text-reset"
                      >
                        <MDBIcon fab icon="github" size='lg'/>
                      </a>
                      <a
                        href="mailto:adamhstovall@gmail.com"
                        className="me-4 text-reset"
                      >
                        <MDBIcon icon="envelope" size='lg'/>
                      </a>
                    </div>
                  </section>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <div class="footer-copyright text-center p-3 grey lighten-1 text-black-50">
    © 2023 Copyright:
    <a id="footer-link-react-copyright" class="black-text" href="https://github.com/AHStovall">
        Adam Stovall
    </a>
  </div>
        </div>
      </MDBFooter>
    );
  }