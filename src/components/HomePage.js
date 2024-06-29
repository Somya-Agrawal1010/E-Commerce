import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import banner from '../Assest/banner.jpg';
import Mobilebanner from '../Assest/mobilebanner copy.jpg';
import Card from './Card';

const Container = styled.div`
  background-color: rgb(234, 237, 237);
  width: 100%;
`;

const Banner = styled.div`
  img {
    width: 100%;
    max-height:450px;
    display: flex;
  }

  img:nth-child(1) {   
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );
    
  }

  img:nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    img:nth-child(1) {
      display: none;
    }

    img:nth-child(2) {
      display: block;
      -webkit-mask-image: none;
      mask-image: none;
      width: 100%;
       height:223px;
      
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  
  grid-template-columns: repeat(4, 300px);
  grid-auto-rows: 420px;
  grid-gap: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src={banner} alt="Banner" />
        <img src={Mobilebanner} alt="Mobile Banner" />
      </Banner>
      <Main>
        <Card
         image={"https://m.media-amazon.com/images/I/81WaomQESKL._AC_UY327_FMwebp_QL65_.jpg"} 
         price= {3500}
         title={"Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa (Blue) Mics ENx™ Tech, Low Latency Mode, 13mm Drivers50H Playtime black color"}
         rating={3}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/81U3kN9bf1L._AC_UY327_FMwebp_QL65_.jpg"} 
         price= {850}
         title={" Infinity - JBL Clubz Mini, Wireless Ultra Portable Mini Speaker with Mic, Bluetooth 5.0 with Voice Assistant Support for Mobiles (Black) "}
         rating={5}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/6150cqcHC8L._AC_UL480_FMwebp_QL65_.jpg"} 
         price= {1699}
         title={"The Indus Valley Pre-Seasoned Cast Iron Grill Pan with Long Handle | Medium, 25 cm/9.8 inch, 1.5Ltr, 3.4kg | Induction Friendly"}
         rating={3.5}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/41+snOgm9VL._AC_UY327_FMwebp_QL65_.jpg"} 
         price= {1500}
         title={" Wipro Stainless Steel Kettle PGK-102S (SS), 1.2 LTR (code-054012)304 Rust Resistant SS Inner Body with Auto Shut Off | 2 Year Warranty (Black)  "}
         rating={1688}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_SR230,210_QL70_.jpg"} 
         price= {4500}
         title={"boAt Rockerz 450 On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual"}
         rating={3}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/61WAxDWqh3L._AC_SR230,210_AGmerlin_QL70_.jpg"} 
         price= {500}
         title={"boAt Airdopes 170 TWS Earbuds with Quad Mics ENx™ Tech, Low Latency Mode, 13mm Drivers50H ,Touch Controls & BT v5.3(Classic Black) "}
         rating={5}
        />
        <Card
         image={"https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UY327_FMwebp_QL65_.jpg"} 
         price= {320000}
         title={"OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)5G Ready | 50MP AI Triple Camera | Upto 16GB Expandable RAM | Clean Android (No Bloatware)  "}
         rating={3}
        />
        


        
      </Main>
    </Container>
  );
};

export default HomePage;




