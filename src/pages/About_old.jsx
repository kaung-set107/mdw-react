// import { Button } from '@mui/material';
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ColorNav from "../components/ColorNav";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import profile from "../files/profile.jpg";
import greengirl from "../slider-images/slider3.jpg";
import doctorgirl from "../slider-images/slider2.jpg";
import sample from "../files/sample.mp4";
import factoryV from "../files/factory.mp4";
import map from "../files/map.jpg";
import video from "../files/video.png";
import { useSelector } from "react-redux";
import aryu from "../files/p_logo/aryu_international_hospital.png";
import asiaRoyal from "../files/p_logo/asia_royal.jpg";
import grandHantha from "../files/p_logo/grand_hantha_international.png";
import moh from "../files/p_logo/ministry_of_health.jpg";
import pinlon from "../files/p_logo/pinlon_group_of_hospitality.png";
import victoria from "../files/p_logo/victoria_hospital.png";
import panhlaing from "../files/p_logo/punhlaing_hospital.jpg";
import ssc from "../files/p_logo/ssc_hospital.png";
import ami from "../files/p_logo/ami_life.jpg";
import asiaRoyal2 from "../files/p_logo/asia_royal_2.jpg";
import aungyadana from "../files/p_logo/aung_yadana_hospital.jpg";
import city from "../files/p_logo/city_hospital.png";
import dLux from "../files/p_logo/d_lux_dental_clinic.jpg";
import dagonMedicare from "../files/p_logo/dagon_medicare_hospital.jpg";
import hlaingTW from "../files/p_logo/hlaing_taw_win.jpg";
import ingyinphyu from "../files/p_logo/ingyinphyu_dental_clinic.jpg";
import sos from "../files/p_logo/international_sos.jpg";
import eye from "../files/p_logo/international_specialist_eye_centre.png";
import kankaw from "../files/p_logo/kankaw_hospital.jpg";
import kembangan from "../files/p_logo/kembangan_general_hospital.jpg";
import khaing from "../files/p_logo/khaing_yadanar_hospital.jpg";
import mandalar from "../files/p_logo/mandalar_hospital.png";
import minipal from "../files/p_logo/manipal_sml.jpg";
import moeKaung from "../files/p_logo/moe_kaung_treasure.jpg";
import osc from "../files/p_logo/osc_hospital.png";
import shweLamin from "../files/p_logo/shwe_lamin_hospital.jpg";
import shweYaung from "../files/p_logo/shwe_yaung_lin_hospital.jpg";
import tawwin from "../files/p_logo/tawwin_malikha_hospital.jpg";
import thuka from "../files/p_logo/thukha_kabar_hospital.png";
import violin from "../files/p_logo/violin_health_beauty_clinic.jpg";
import pho1 from "../files/factory/pho1.png";
import pho2 from "../files/factory/pho2.png";
import pho3 from "../files/factory/pho3.png";
import pho4 from "../files/factory/pho4.png";
import pho5 from "../files/factory/pho5.png";
import pho6 from "../files/factory/pho6.png";
import pho7 from "../files/factory/pho7.png";
import pho8 from "../files/factory/pho8.png";
import pho9 from "../files/factory/pho9.png";
import pho10 from "../files/factory/pho10.png";
import pho11 from "../files/factory/pho11.png";
import pho12 from "../files/factory/pho12.png";
import pho13 from "../files/factory/pho13.png";
import pho14 from "../files/factory/pho14.png";
import pho15 from "../files/factory/pho15.png";
import pho16 from "../files/factory/pho16.png";
import pho17 from "../files/factory/pho17.png";
import pho18 from "../files/factory/pho18.png";
import pho19 from "../files/factory/pho19.png";
import pho20 from "../files/factory/pho20.png";
import pho21 from "../files/factory/pho21.png";
import pho22 from "../files/factory/pho22.png";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Div = styled.div`
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  ${mobile({ padding: "50" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 10px;
  color: white;
`;
const Description = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  color: white;
  letter-spacing: 1px;
  padding: 20px;
  ${mobile({ textAlign: "center" })}
`;
const FirstDiv = styled.div`
  width: 90%;
  border-radius: 20px;
  overflow: hidden;
  background-image: ;
`;
const SecondDiv = styled.div`
  position: absolute;
  border-radius: 18px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  height: auto;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;
const SmallBox = styled.div`
  width: 45%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  color: #32549b;
  text-align: center;
  margin: 10px;
  border-radius: 10px;
`;
const SmallImgBox = styled.div`
  width: 230px;
  height: auto;
  min-height: 120px;
  margin-left: 20px;
`;
const SmallImgBoxP = styled.div`
  width: 150px;
  height: auto;
  min-height: 120px;
  margin-left: 20px;
  padding: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: contain;
  background-color: #ffffff;
  ${mobile({ height: "30vh" })}
`;
const DeepBox = styled.div`
  width: 100%;
  min-width: 900px;
`;
const FPBox = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;
const Left = styled.div`
  width: auto;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;
`;
const Center = styled.div`
  width: 33%;
  display: flex;
  align-item: center;
  justify-content: center;
  margin-top: 50px;
`;
const Right = styled.div`
  width: auto;
  display: flex;
  align-item: end;
  justify-content: end;
  flex-direction: column;
`;
const Map = styled.div``;
const Location = styled.div`
  width: 70%;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
`;
const Burmar = styled.img`
  width: 300px;
  height: auto;
`;
const PointerOne = styled.span`
  position: absolute;
  left: 150px;
  top: 200px;
  font-size: 18px;
  font-weight: bold;
`;
const PointerTwo = styled.span`
  position: absolute;
  left: 150px;
  bottom: 200px;
  font-size: 18px;
  font-weight: bold;
`;
const PointerThree = styled.span`
  position: absolute;
  right: 150px;
  top: 100px;
  font-size: 18px;
  font-weight: bold;
`;
const PointerFour = styled.span`
  position: absolute;
  right: 150px;
  top: 400px;
  font-size: 18px;
  font-weight: bold;
`;
const PointerFive = styled.span`
  position: absolute;
  right: 150px;
  bottom: 100px;
  font-size: 18px;
  font-weight: bold;
`;
const ShowP = styled.span`
  color: white;
  background-color: #32549b;
  padding: 7px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const FIbox = styled.div`
  width: 80%;
  display: flex;
  align-item: center;
  flex-direction: row;
`;

const FImg = styled.img`
  width: 100%;
  max-width: 430px;
  height: auto;
  border: 5px solid transparent;
  border-radius: 12px;
`;

const One = styled.div`
  width: 65%;
  height: auto;
  border-radius: 20px;
`;
const Two = styled.div`
  width: 35%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const About = () => {
  const [partners, setPartners] = useState(false);
  const url = useSelector((state) => state.user.url);

  const ShowAllPartners = () => {
    setPartners(true);
  };
  const HideAllPartners = () => {
    setPartners(false);
  };

  const [factory, setFactory] = useState(false);

  const ShowFactory = () => {
    setFactory(true);
  };
  const HideFactory = () => {
    setFactory(false);
  };

  return (
    <div>
      <div>
        <ColorNav />
      </div>
      <Div>
        <Wrapper style={{ height: "80vh", 
        marginTop: '100px',
      }}>
          <FirstDiv>
            <img src={profile} style={{ minWidth: "100%", maxWidth: "90vh" }} />
          </FirstDiv>
          <SecondDiv
            style={{
              width: "60%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Title style={{ color: "#32549b" }}>Company Profile</Title>
            <Description
              style={{ fontSize: "20px", fontWeight: "bold", color: "#32549b" }}
            >
              Medical World Co., Ltd, founded in 2015, is a manufacturing and
              distribution company of uniforms and accessories. Over the past 7
              years, Medical World Co. Ltd, has been providing uniforms and
              accessories for Government Departments and Private Business
              Sectors. One of our best services, consultation service regarding
              uniform designs is offered. Customizable service for business
              logos imprinted on the uniform is also offered using modernized
              machines.
            </Description>
          </SecondDiv>
        </Wrapper>

        <Wrapper
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            width: "100%",
            padding: "50px 5%",
            marginTop: '50px',
            backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"
          }}
        >
          <One style={{ position: "relative",overflow: "hidden", maxHeight: "300px" }}>
            <img
              src={greengirl}
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
            <div
              style={{
                width: "400px",
                position: "absolute",
                top: "25px",
                right: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#32549b",
                  lineHeight: "36px"
                }}
              >
                <ul style={{ listStyleType: "disc" }}>
                  <li>
                    One of our best services, consultation service regarding
                    uniform designs is offered.
                  </li>
                  <li>
                    Customizable service for business logos imprinted on the
                    uniform is also offered using modernized machines.
                  </li>
                  <li>
                    Accuracy in stitches and spacing are guaranteed in clothing
                    designs.
                  </li>
                </ul>
              </p>
            </div>
          </One>
          <Two>
            <div>
              {/* <video
                src={sample}
                controls
                style={{
                  width: "100%",
                  height: "420px",
                  borderRadius: "10px",
                  border: "2px solid #777",
                  backgroundColor: '#ffffff'
                }}
              /> */}
              <a href='https://www.youtube.com/watch?v=jUX2R9JOi_A' style={{position: 'relative', width: '100%', height: '100%'}}>
                <img src={video} style={{ width: "100%", height: '300px', borderRadius: '10px' }} />
                <span style={{position: 'absolute', top: '-50px', left: '37%', border: '2px solid', borderRadius: '50%'}}>
                  <PlayArrowIcon style={{fontSize: '100px'}}/>
                </span>
              </a>
            </div>
          </Two>
        </Wrapper>

        <Wrapper style={{ 
          height: "80vh",
          paddingBottom: '50px',
          backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"
       }}>
          <FirstDiv
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={doctorgirl}
              style={{ width: "90%", borderRadius: "10px" }}
            />
          </FirstDiv>
          <SecondDiv style={{ width: "70%", padding: "10px 0px" }}>
            <Title style={{ color: "#32549b" }}>
              Our Vision and Mission Objective
            </Title>
            <Box style={{ marginTop: "30px" }}>
              <SmallBox>
                <Title style={{ color: "#32549b" }}>Vision</Title>
                <p
                  style={{
                    color: "#32549b",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Quality is our Virtue.
                </p>
              </SmallBox>
              <SmallBox>
                <Title style={{ color: "#32549b" }}>Mission</Title>
                <p
                  style={{
                    color: "#32549b",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Flexibility and Responsibilities.
                </p>
              </SmallBox>
              <SmallBox>
                <Title style={{ color: "#32549b" }}>Objective</Title>
                <p
                  style={{
                    color: "#32549b",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Leading in the Local Market and Exporting Abroad in Future.
                </p>
              </SmallBox>
            </Box>
          </SecondDiv>
        </Wrapper>

        <Wrapper style={{ padding: "50px 0px" }}>
          <DeepBox>
            <Title style={{ color: "#32549b" }}>Our Brands</Title>
            <Box>
              <SmallImgBox>
                <Image src={url + `/ecommerce/brands/branded.png`} />
              </SmallImgBox>
              <SmallImgBox>
                <Image src={url + `/ecommerce/brands/ecofamily.png`} />
              </SmallImgBox>
              <SmallImgBox>
                <Image src={url + `/ecommerce/brands/family.png`} />
              </SmallImgBox>
              <SmallImgBox>
                <Image src={url + `/ecommerce/brands/oxypas.png`} />
              </SmallImgBox>
            </Box>
          </DeepBox>
          <DeepBox>
            <Title style={{ color: "#32549b" }}>Our Products</Title>
            <Box>
              <SmallImgBox style={{ paddingBottom: "30px" }}>
                <Image src={url + `/ecommerce/items/cute_front.png`} />
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Cute
                </span>
              </SmallImgBox>
              <SmallImgBox style={{ paddingBottom: "30px" }}>
                <Image src={url + `/ecommerce/items/dutycoat_front.png`} />
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Duty Coat
                </span>
              </SmallImgBox>
              <SmallImgBox style={{ paddingBottom: "30px" }}>
                <Image src={url + `/ecommerce/items/smile_front.png`} />
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Smile
                </span>
              </SmallImgBox>
              <SmallImgBox style={{ paddingBottom: "30px" }}>
                <Image src={url + `/ecommerce/items/vneck_f_front.png`} />
                <span style={{ display: "block", textAlign: "center",fontWeight: "bold" }}>
                  Vneck
                </span>
              </SmallImgBox>
            </Box>
          </DeepBox>
        </Wrapper>

        <Wrapper>
          <DeepBox>
            <Title style={{ color: "#32549b" }}>Our Company Insight</Title>
          </DeepBox>
          <Box>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={url + `/ecommerce/items/vneck_f_front.png`} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={url + `/ecommerce/items/vneck_f_front.png`} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={url + `/ecommerce/items/vneck_f_front.png`} alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </Box>
        </Wrapper>

        <Wrapper style={{ padding: "0px", maxHeight: "40vh" }}>
          <DeepBox>
            <Title style={{ color: "#32549b" }}>Our History</Title>
            <Box>
              <SmallImgBox
                style={{
                  backgroundColor: "rgba(50, 84, 155, 0.7)",
                  padding: "20px",
                  minWidth: "350px",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  <b>Before 2015</b>
                  <br />
                  1. SME Business structure and give services
                  <br />
                  2. Employee 30-50 OUR
                  <br />
                </p>
              </SmallImgBox>
              <SmallImgBox
                style={{
                  backgroundColor: "rgba(50, 84, 155, 0.7)",
                  padding: "20px",
                  minWidth: "350px",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  <b>2015-2019</b>
                  <br />
                  1. Company type and introduces own brand name called Family
                  Hospital Uniform
                  <br />
                  2. Employee 100-150
                  <br />
                </p>
              </SmallImgBox>
              <SmallImgBox
                style={{
                  backgroundColor: "rgba(50, 84, 155, 0.7)",
                  padding: "20px",
                  minWidth: "350px",
                  borderRadius: "7px",
                  color: "white",
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  <b>2020-2025</b>
                  <br />
                  1. Five showrooms, Nine dealers in upper and lower Myanmar,
                  and distributes retail and wholesales
                  <br />
                  2. Employee 160-200
                  <br />
                </p>
              </SmallImgBox>
            </Box>
          </DeepBox>
        </Wrapper>

        <Wrapper style={{ 
          marginTop: "50px",
          paddding: '100px 0px',
          backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"

          }}>
          <Title style={{ color: "#ffffff", paddingTop: '50px 0px' }}>Our Factory and Production</Title>
          <FPBox>
            <Left style={{ minWidth: "350px" }}>
              <SmallImgBox>
                <Image src={pho1} style={{ minWidth: "300px" }} />
              </SmallImgBox>
              <SmallImgBox style={{ marginTop: "10px" }}>
                <Image src={pho2} style={{ minWidth: "300px" }} />
              </SmallImgBox>
            </Left>
            <Center>
              <SmallBox style={{ width: "100%", height: "180px" , backgroundColor: 'transparent'}}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: '#ffffff' }}>
                  Imported highly qualified raw materials are used to
                  manufacture products and manufacturing is done locally.
                  Matching accessories for uniforms are manufactured locally and
                  distributed to both local and oversea market.
                </p>
              </SmallBox>
            </Center>
            <Right style={{ minWidth: "350px" }}>
              <SmallImgBox>
                <Image src={pho3} style={{ minWidth: "300px" }} />
              </SmallImgBox>
              <SmallImgBox style={{ marginTop: "10px" }}>
                <Image src={pho4} style={{ minWidth: "300px" }} />
              </SmallImgBox>
            </Right>
          </FPBox>
          <div style={{paddingBottom: '50px'}}>
            {factory ? (
              <ShowP onClick={HideFactory}>Hide Factory Image</ShowP>
            ) : (
              <ShowP onClick={ShowFactory}>See All Factory Image</ShowP>
            )}
          </div>
        </Wrapper>

        {factory ? (
          <div>
            <Wrapper style={{ 
              width: "100%",
              padding: "50px",
              backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"
            }}>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho5} />
                <FImg src={pho6} />
                <FImg src={pho7} />
              </FIbox>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho8} />
                <FImg src={pho9} />
                <FImg src={pho10} />
              </FIbox>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho11} />
                <FImg src={pho12} />
                <FImg src={pho13} />
              </FIbox>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho14} />
                <FImg src={pho15} />
                <FImg src={pho16} />
              </FIbox>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho17} />
                <FImg src={pho18} />
                <FImg src={pho19} />
              </FIbox>
              <FIbox style={{ width: "85%" }}>
                <FImg src={pho20} />
                <FImg src={pho21} />
                <FImg src={pho22} />
              </FIbox>
            </Wrapper>
          </div>
        ) : (
          ""
        )}

        <Wrapper style={{
          backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"

          }}>
          <video
            src={factoryV}
            controls
            style={{
              width: "85%",
              height: "90vh",
              borderRadius: "10px",
              border: "2px solid #ffffff",
              backgroundColor: '#ffffff'
            }}
          />
        </Wrapper>

        <Wrapper style={{ 
          padding: "50px",
          backgroundImage: "linear-gradient(to right, rgba(55,95,175,1), rgba(80,120,200,0.3))"
           }}>
          {/* <img src={AboutImgTest} style={{ minWidth: '100%' }} /> */}
          <DeepBox>
            <Title style={{ color: "#ffffff" }}>Our Clients</Title>
            <Box style={{ marginBotton: "20px" }}>
              <SmallImgBoxP>
                <Image src={aryu} />
              </SmallImgBoxP>
              <SmallImgBoxP>
                <Image src={asiaRoyal} />
              </SmallImgBoxP>
              <SmallImgBoxP>
                <Image src={ssc} />
              </SmallImgBoxP>
              <SmallImgBoxP>
                <Image src={pinlon} />
              </SmallImgBoxP>
              <SmallImgBoxP>
                <Image src={grandHantha} />
              </SmallImgBoxP>
              <SmallImgBoxP>
                <Image src={moh} />
              </SmallImgBoxP>

              {partners ? (
                <div>
                  <Box style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={panhlaing} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={victoria} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={ami} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={asiaRoyal2} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={aungyadana} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={city} />
                    </SmallImgBoxP>
                  </Box>
                  <Box style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={dLux} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={dagonMedicare} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={hlaingTW} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={ingyinphyu} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={sos} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={eye} />
                    </SmallImgBoxP>
                  </Box>
                  <Box style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={kankaw} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={kembangan} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={khaing} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={mandalar} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={minipal} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={moeKaung} />
                    </SmallImgBoxP>
                  </Box>
                  <Box style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={osc} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={shweLamin} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={shweYaung} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={tawwin} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={thuka} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={violin} />
                    </SmallImgBoxP>
                  </Box>
                </div>
              ) : (
                ""
              )}
            </Box>
          </DeepBox>
          {partners ? (
            <div style={{ marginTop: "20px" }}>
              <ShowP onClick={HideAllPartners}>Hide Clients</ShowP>
            </div>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <ShowP onClick={ShowAllPartners}>Show All Clients</ShowP>
            </div>
          )}
        </Wrapper>

        <Wrapper>
          <Title style={{ color: "#32549b" }}>Our Sale Network</Title>
          <Location>
            <Map>
              <Burmar src={map} />
            </Map>
            <PointerOne>
              First Sale Location <br /> Our First Upper Branch
            </PointerOne>
            <PointerTwo>
              Second Sale Location <br /> Our Second Upper Branch
            </PointerTwo>
            <PointerThree>
              Third Sale Location <br /> Our Third Upper Branch
            </PointerThree>
            <PointerFour>
              Fourth Sale Location <br /> Our Fourth Upper Branch
            </PointerFour>
            <PointerFive>
              Fifth Sale Location <br /> Our Fifth Upper Branch
            </PointerFive>
          </Location>
        </Wrapper>
      </Div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
