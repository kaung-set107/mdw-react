import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorNav from "../components/ColorNav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import YoutubeSlider from "../components/YoutubeSlider";

import profile from "../files/about.jpg";
import board1 from "../files/board/board1.jpg";
import board2 from "../files/board/board2.jpg";
import board3 from "../files/board/board3.jpg";
import board4 from "../files/board/board4.jpg";
import board5 from "../files/board/board5.jpg";

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
import factoryV from "../files/factory.mp4";

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
import mprivate from "../files/p_logo/myanmar_private_hospital_association.jpg";
import mmedical from "../files/p_logo/myanmar_medical_association_centre.jpg";

import map from "../files/map.png";

const Section = styled.div`
    width: 100%
    min-height: 100vh;
`
const Wrapper = styled.div`
    width: 100%
    height: auto;
`
const Title = styled.h5`
    font-size: 30px;
    font-weight: bold;
    color: #2b57b8;
`
const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`
const Content = styled.div`
    
`
const Flex = styled.div`
    display:  flex;
    align-items: center;
    justify-content: center;
`
const BoxOne = styled.div`
    width: 60%;
    height: 370px;
`
const BoxTwo = styled.div`
    width: 40%;
    height: 370px;
    text-align: center;
    padding: 20px;
    background-color: #ffffff;
    overflow: hidden;
`
const ContentTitle = styled.h6`
    font-size: 21px;
    font-weight: bold;
    color: #2b57b8;
`
const Description = styled.p`
    font-size: 15px;
    margin-top:14px;
`
const Button = styled.a`
    font-size: 16px;
    padding: 5px 20px;
    margin-top: 20px;
    color: #ffffff;
    background-color: #2b57b8;
    text-decoration: none;
    border-radius: 5px;
    &:hover {
        color: #ffffff;
    }
`
const Box = styled.div`
    width: 33.33%;
`
const Circle = styled.div`
    border-radius: 50%;
    border: 4px solid #ffffff;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
`
const CBox = styled.div`
    width: 200px;
    height: auto;
    margin: 10px 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
    font-weight:bold;
`
const Ul = styled.ul`
    
`
const Li = styled.li`
    color: #ffffff;
    text-align: left;
    list-style-type: disc;
    font-size: 18px;
    padding: 5px 0px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: contain;
    background-color: #ffffff;
`
const SmallBox = styled.div`
    width: 45%;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    color: #32549b;
    text-align: center;
    margin: 10px;
    border-radius: 10px;
`
const SmallImgBox = styled.div`
    width: 230px;
    height: auto;
    min-height: 120px;
    margin-left: 20px;
`
const Left = styled.div`
    width: auto;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`
const Center = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    margin-top: 50px;
`
const Right = styled.div`
    width: auto;
    display: flex;
    align-item: end;
    justify-content: end;
    flex-direction: column;
`
const ShowP = styled.span`
    color: #32549b;
    background-color: #ffffff;
    padding: 7px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
`
const FIbox = styled.div`
    display: flex;
    align-item: center;
    flex-direction: row;
`
const FImg = styled.img`
    width: 100%;
    max-width: 380px;
    height: auto;
    border: 5px solid transparent;
    border-radius: 12px;
`
const SmallImgBoxP = styled.div`
  width: 150px;
  height: auto;
  min-height: 120px;
  margin-left: 20px;
  padding: 20px;
`
const DeepBox = styled.div`
  width: 100%;
`
const PBox = styled.div`
  height: auto;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`

const About = () => {

    const [partners, setPartners] = useState(false);
    const url = useSelector((state) => state.user.url);

    const [factory, setFactory] = useState(false);

    const ShowAllPartners = () => {
        setPartners(true);
    };
    const HideAllPartners = () => {
        setPartners(false);
    };

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
            <Section>
                <Wrapper style={{paddingTop: "60px"}}>
                    {/* <Title style={{padding: "30px 0px 20px 100px"}}>ABOUT US</Title> */}
                    <Content style={{padding: "70px 100px" , background: "linear-gradient(to right, rgba(28, 73, 170, 0.5), rgba(5, 59, 175, 0.8))"}}>
                        <Flex>
                            <BoxOne style={{ overflow: "hidden" }} >
                                <img src={profile} style={{ width: "100%",objectFit:"contain" }} />
                            </BoxOne>
                            <BoxTwo>
                                <ContentTitle>About Medical World</ContentTitle>
                                <Description style={{lineHeight: '31px',}}>Medical World Co., Ltd, founded in 2015, is a manufacturing and
                                distribution company of uniforms and accessories. Over the past 7
                                years, Medical World Co. Ltd, has been providing uniforms and
                                accessories for Government Departments and Private Business
                                Sectors. One of our best services, consultation service regarding
                                uniform designs is offered. Customizable service for business
                                logos imprinted on the uniform is also offered using modernized
                                machines.</Description>
                                <Button>Learn More</Button>
                            </BoxTwo>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper>
                    <Title style={{padding: "50px 0px 30px 100px"}}>OUR HISTORY</Title>
                    <Content style={{padding: "0px 100px"}}>
                        <Flex>
                            <Box style={{paddingRight: "50px", borderRight: "2px solid #777777", minHeight: "175px"}}>
                                <ContentTitle>Before 2015</ContentTitle>
                                <Description>1. SME Business structure and give services <br/> 2. Employee 30-50 OUR</Description>
                            </Box>
                            <Box style={{padding: "0px 50px", borderRight: "2px solid #777777", minHeight: "175px"}}>
                                <ContentTitle>2015-2019</ContentTitle>
                                <Description>1. Company type and introduces own brand name called Family Hospital Uniform <br/> 2. 2. Employee 100-150</Description>
                            </Box>
                            <Box style={{paddingLeft: "50px"}}>
                                <ContentTitle>2020-2025</ContentTitle>
                                <Description>1. Five showrooms, Nine dealers in upper and lower Myanmar, and distributes retail and wholesales <br/> 2. Employee 160-200</Description>
                            </Box>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section style={{padding: "0px 100px" , background: "linear-gradient(to right, rgba(28, 73, 170, 0.5), rgba(5, 59, 175, 0.8))", marginTop: "50px"}}>
                <Wrapper>
                    <Title style={{padding: "30px 0px 10px 0px", textAlign: "center", color: "#ffffff"}}>BOARD OF DIRECTORS</Title>
                    <SubTitle>Medical World Company Limited</SubTitle>
                    <Content style={{padding: "50px"}}>
                        <Flex>
                            <CBox><Circle style={{ backgroundImage: `url(${board1})`, backgroundSize: "200px 200px" }}></Circle>U HTET AUNG <br/> (MANAGING DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board2})`, backgroundSize: "200px 200px" }}></Circle>DAW KHIN THANDAR KO <br/> (DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board3})`, backgroundSize: "200px 200px" }}></Circle>DAW KHIN SANDAR KO <br/> (DIRECTOR)</CBox>
                        </Flex>
                        <Flex>
                            <CBox><Circle style={{ backgroundImage: `url(${board4})`, backgroundSize: "200px 200px" }}></Circle>U WIN KO KO <br/> (DIRECTOR)</CBox>
                            <CBox><Circle style={{ backgroundImage: `url(${board5})`, backgroundSize: "200px 200px" }}></Circle>DR. AYE AYE AUNG <br/> (DIRECTOR)</CBox>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper>
                    <Title style={{padding: "50px 0px 30px 0px", textAlign: "center"}}>OUR VISION, MISSION AND OBJECTIVE</Title>
                    <Content style={{padding: "0px 100px"}}>
                        <Flex>
                            <Box style={{backgroundColor: "rgba(43, 87, 184, 0.8)", margin: "20px", padding: "10px", textAlign: "center", height: "120px", color: "#ffffff", borderRadius: "10px"}}>
                                <ContentTitle style={{color: "#ffffff"}}>Vision</ContentTitle>
                                <Description>Quality is our Virtue.</Description>
                            </Box>
                            <Box style={{backgroundColor: "rgba(43, 87, 184, 0.8)", margin: "20px", padding: "10px", textAlign: "center", height: "120px", color: "#ffffff", borderRadius: "10px"}}>
                                <ContentTitle style={{color: "#ffffff"}}>Mission</ContentTitle>
                                <Description>Flexibility and Responsibilities.</Description>
                            </Box>
                            <Box style={{backgroundColor: "rgba(43, 87, 184, 0.8)", margin: "20px", padding: "10px", textAlign: "center", height: "120px", color: "#ffffff", borderRadius: "10px"}}>
                                <ContentTitle style={{color: "#ffffff"}}>Objective</ContentTitle>
                                <Description>Leading in the Local Market and Exporting Abroad in Future.</Description>
                            </Box>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section style={{padding: "50px 100px" , background: "linear-gradient(to right, rgba(5, 59, 175, 0.8), rgba(28, 73, 170, 0.5))", marginTop: "50px"}}>
                <Wrapper>
                    <Content style={{padding: "0px 100px"}}>
                        <Flex style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start"}}>
                            <Box style={{minWidth: "50%"}}>
                                <ContentTitle style={{color: "#ffffff"}}>COMPETATIVE ADVANTAGE</ContentTitle>
                                <Ul>
                                    <Li>Manufactured by own factory</Li>
                                    <Li>Volumed based production (Quantity)</Li>
                                    <Li>Build up customer relationship program and brand awareness program for quarterly basic</Li>
                                    <Li>New design and products development continuously</Li>
                                    <Li>Provide wash testing and sample making</Li>
                                    <Li>Consult own design creation and proposed design budgeting</Li>
                                    <Li>Submit the quatation within one day</Li>
                                </Ul>
                            </Box>
                            <Box style={{minWidth: "50%"}}>
                                <ContentTitle style={{color: "#ffffff"}}>CUSTOMER BENEFITS</ContentTitle>
                                <Ul>
                                    <Li>Save money and energy, convenience place to go buy</Li>
                                    <Li>Effective time consumption</Li>
                                    <Li>Get value and quality service by spending budget</Li>
                                    <Li>Get confirmation for delivery date on time</Li>
                                    <Li>Easy to choose from XS to 4XL for female and male different pattern</Li>
                                    <Li>Customer trust improved</Li>
                                    <Li>The best HR solution for top management</Li>
                                </Ul>
                            </Box>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper>
                    <Title style={{padding: "50px 0px 30px 0px", textAlign: "center"}}>OUR BRANDS</Title>
                    <Content style={{padding: "0px 100px"}}>
                        <Flex>
                            <Box>
                                <Image src={url + `/ecommerce/brands/branded.png`} />
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/brands/ecofamily.png`} />
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/brands/family.png`} />
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/brands/oxypas.png`} />
                            </Box>
                        </Flex>
                    </Content>
                </Wrapper>
                <Wrapper>
                    <Title style={{padding: "50px 0px 30px 0px", textAlign: "center"}}>OUR PRODUCTS</Title>
                    <Content style={{padding: "0px 100px"}}>
                        <Flex>
                            <Box>
                                <Image src={url + `/ecommerce/items/skyline_upgrade_front.png`} style={{maxWidth: "250px"}} />
                                <span style={{ display: "block", textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
                                Skyline Upgrade
                                </span>
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/items/holly_front.png`} style={{maxWidth: "250px"}} />
                                <span style={{ display: "block", textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
                                Holly
                                </span>
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/items/lavender_front.png`} style={{maxWidth: "250px"}} />
                                <span style={{ display: "block", textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
                                Lavender
                                </span>
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/items/handsome_front.png`} style={{maxWidth: "250px"}} />
                                <span style={{ display: "block", textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
                                Handsome
                                </span>
                            </Box>
                            <Box>
                                <Image src={url + `/ecommerce/items/vneck_front.png`} style={{maxWidth: "250px"}} />
                                <span style={{ display: "block", textAlign: "center", fontWeight: "bold", fontSize: "20px"}}>
                                Vneck
                                </span>
                            </Box>
                        </Flex>
                    </Content>
                </Wrapper>
            </Section>
            <Section style={{padding: "50px 100px" , background: "linear-gradient(to right, rgba(5, 59, 175, 0.8), rgba(28, 73, 170, 0.5))", marginTop: "50px"}}>
                <Wrapper>
                    <Title style={{color: "#ffffff", textAlign: "center"}}>Our Factory and Production</Title>
                    <Flex>
                        <Left style={{ minWidth: "350px" }}>
                        <SmallImgBox>
                            <Image src={pho1} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        <SmallImgBox style={{ marginTop: "10px" }}>
                            <Image src={pho2} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        </Left>
                        <Center>
                            <p style={{textAlign: "center",fontSize: "18px", fontWeight: "bold", color: "#ffffff", lineHeight: "35px"}}>
                            Imported highly qualified raw materials are used to
                            manufacture products and manufacturing is done locally.
                            Matching accessories for uniforms are manufactured locally and
                            distributed to both local and oversea market.
                            </p>
                        </Center>
                        <Right style={{ minWidth: "350px" }}>
                        <SmallImgBox>
                            <Image src={pho3} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        <SmallImgBox style={{ marginTop: "10px" }}>
                            <Image src={pho4} style={{ minWidth: "300px" }} />
                        </SmallImgBox>
                        </Right>
                    </Flex>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        {factory ? (
                        <ShowP onClick={HideFactory}>Hide Factory Image</ShowP>
                        ) : (
                        <ShowP onClick={ShowFactory}>See All Factory Image</ShowP>
                        )}
                    </div>
                </Wrapper>

                
                
                {factory ? (
                <div style={{marginTop: "50px"}}>
                    <Wrapper style={{width: "100%"}}>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho5} />
                            <FImg src={pho6} />
                            <FImg src={pho7} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho8} />
                            <FImg src={pho9} />
                            <FImg src={pho10} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho11} />
                            <FImg src={pho12} />
                            <FImg src={pho13} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho14} />
                            <FImg src={pho15} />
                            <FImg src={pho16} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho17} />
                            <FImg src={pho18} />
                            <FImg src={pho19} />
                        </FIbox>
                        <FIbox style={{ width: "100%" }}>
                            <FImg src={pho20} />
                            <FImg src={pho21} />
                            <FImg src={pho22} />
                        </FIbox>
                    </Wrapper>
                </div>
                ) : (
                ""
                )}

                <Wrapper style={{marginTop: "50px"}}>
                    <video
                        src={factoryV}
                        controls
                        style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        border: "2px solid #ffffff",
                        backgroundColor: '#ffffff'
                        }}
                    />
                </Wrapper>
            </Section>

            <div style={{marginTop: "50px"}}>
                <YoutubeSlider/>
            </div>

            <Section style={{padding: "50px 100px"}}>
                <Wrapper>
                <Title style={{textAlign: "center"}}>Our Clients</Title>
                <DeepBox>
                    <PBox style={{ marginBotton: "20px" }}>
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
                        <Image src={osc} />
                    </SmallImgBoxP>

                    {partners ? (
                <div>
                  <PBox style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={panhlaing} />
                    </SmallImgBoxP>
                    <SmallImgBoxP>
                      <Image src={khaing} />
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
                  </PBox>
                  <PBox style={{ marginTop: "20px" }}>
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
                  </PBox>
                  <PBox style={{ marginTop: "20px" }}>
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
                  </PBox>
                  <PBox style={{ marginTop: "20px" }}>
                    <SmallImgBoxP>
                      <Image src={victoria} />
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
                  </PBox>
                </div>
              ) : (
                ""
              )}
            </PBox>
            </DeepBox>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                {partners ? (
                <ShowP onClick={HideAllPartners} style={{backgroundColor: "#32549b", color: "#ffffff", fontWeight: "bold"}}>Hide Clients</ShowP>
                ) : (
                <ShowP onClick={ShowAllPartners} style={{backgroundColor: "#32549b", color: "#ffffff", fontWeight: "bold"}}>Show All Clients</ShowP>
                )}
            </div>
                </Wrapper>
            </Section>

            <Section style={{padding: "50px 100px"}}>
                <Wrapper>
                <Title style={{textAlign: "center"}}>PARTNER WITH ASSOCIATES</Title>
                <DeepBox>
                    <PBox style={{ marginBotton: "20px" }}>
                    <SmallImgBoxP style={{width: "200px"}}>
                        <Image src={moh} />
                    </SmallImgBoxP>
                    <SmallImgBoxP style={{width: "200px"}}>
                        <Image src={mmedical} />
                    </SmallImgBoxP>
                    <SmallImgBoxP style={{width: "200px"}}>
                        <Image src={mprivate} />
                    </SmallImgBoxP>
                    </PBox>
                </DeepBox>
                </Wrapper>
            </Section>
            <Section>
                <Wrapper>
                <Title style={{textAlign: "center"}}>Our Sale Network</Title>
                    <Flex style={{padding: "30px 0px"}}>
                        <img src={map} width="500px"/>
                    </Flex>
                </Wrapper>
            </Section>
            <div>
                <Footer />
            </div>
        </div>

    )

}

export default About;