import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";

export default function qutes() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-4">
            <figure
              className="bg-white p-3 rounded"
              style={{ borderLeft: ".25rem solid #a34e78" }}
            >
              <MDBTypography blockquote className="pb-2">
                <p>
                  Age is an issue of mind over matter. If you don't mind, it
                  doesn't matter.
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Mark Twain
              </figcaption>
            </figure>
          </MDBCol>

          <MDBCol lg="6" className="mb-4 mb-lg-4">
            <figure
              className="bg-white p-3 rounded"
              style={{ borderLeft: ".25rem solid #f68e9d" }}
            >
              <MDBTypography blockquote className="pb-2">
                <p>
                  All you need in this life is ignorance and confidence, and
                  then success is sure.
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-0">
                Mark Twain
              </figcaption>
            </figure>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}