import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  div {
    display: flex;
  }
  p {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
  span {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title>
        <div>
          <p data-h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">
            W
          </p>
          <p data-scroll data-scroll-delay="0.09" data-scroll-speed="4">
            i
          </p>
          <p data-scroll data-scroll-delay="0.06" data-scroll-speed="4">
            b
          </p>
          <p data-scroll data-scroll-delay="0.04" data-scroll-speed="4">
            e
          </p>
        </div>
        <span data-scroll-delay="0.04" data-scroll-speed="2">
          Inspire. Create. Belive
        </span>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  );
};

export default CoverVideo;
