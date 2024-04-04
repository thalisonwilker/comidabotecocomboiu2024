import React from "react";
import styled from "styled-components";
import fundo3 from "./assets/img/fundo_3.png";
import fundo2 from "./assets/img/fundo_2.png";
import saveTheDate from "./assets/img/save_the_date.png";
import logoEvento from "./assets/img/bares/logo_comida_de_buteco.png";
import logoSicoob from "./assets/img/bares/logo_sicoob.png";

import baresText from "./assets/img/bares/text_bares_participantes.png";

import toroBurguer from "./assets/img/bares/toro.png";
import coronelBier from "./assets/img/bares/coronel_bier.png";
import shokan from "./assets/img/bares/shokan.png";
import trauku from "./assets/img/bares/bar_do_trauku.png";
import pubPizza from "./assets/img/bares/pub_pizzaria_ricardo.png";
import laVila from "./assets/img/bares/la_vila_gourmet.png";
import casaVelha from "./assets/img/bares/casa_velha.png";
import temperiaMineira from "./assets/img/bares/temperia_mineira.png";

const Container = styled.div``;

const Section = styled.div`
  background: url(${(props) => {
    return props.img;
  }});
  min-height: 90vh;
  background-repeat: no-repeat;
  width: 100% !important;
  background-color: red;
  background-size: 100% 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const LogoSicoob = styled.img`
  position: absolute;
  top: 0;
  max-width: 200px;
  right: 0;
  @media (max-width: 700px) {
    top: 0;
    margin-top: -20px !important;
    max-width: 150px;
  }
`;
const ContainerLogoComidaDeBoteco = styled.div`
  display: flex;
  justify-content: center;
`;
const LogoComidaDeBoteco = styled.img`
  position: absolute;
  top: 0;
  margin-top: -100px !important;

  @media (max-width: 700px) {
    margin-top: 0px !important;
    width: 100%;
  }
`;
const SectionBaresWrapperInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;
const LogoComidaBotecoSectionBares = styled.img`
  max-width: 400px;
`;
const ImgTextBares = styled.img`
  max-width: 600px;
  rotate: -3deg
`;
const ImgLogoSicoobBares = styled.img`
  max-width: 400px;
  
`;
const SectionBaresWrapperBares = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const SectionBaresBarAvatar = styled.img`
  width: 250px;
  height: 250px;
  padding: 0px;
  border-radius: 50%;
  cursor: pointer;
`;
export default (props) => {
  function go(to){
    window.location.href = to
  }
  return (
    <Container>
      <Section name="welcome" img={fundo3}>
        <LogoSicoob src={logoSicoob} />
        <ContainerLogoComidaDeBoteco>
          <LogoComidaDeBoteco src={logoEvento} />
        </ContainerLogoComidaDeBoteco>
      </Section>
      <Section name="bares" img={fundo2}>
        <SectionBaresWrapperInfo>
          <LogoComidaBotecoSectionBares src={logoEvento} />
          <ImgTextBares src={baresText} />
          <ImgLogoSicoobBares src={logoSicoob} />
        </SectionBaresWrapperInfo>
        <SectionBaresWrapperBares>
          <SectionBaresBarAvatar onClick={()=>go("TORO")} src={toroBurguer} />
          <SectionBaresBarAvatar onClick={()=>go("CORONEL")} src={coronelBier} />
          <SectionBaresBarAvatar onClick={()=>go("SHOKAN")} src={shokan} />
          <SectionBaresBarAvatar onClick={()=>go("BARDOTRAUKO")} src={trauku} />
        </SectionBaresWrapperBares>
        <SectionBaresWrapperBares>
          <SectionBaresBarAvatar onClick={()=>go("TEMPERIAMINEIRA")} src={temperiaMineira} />
          <SectionBaresBarAvatar onClick={()=>go("PUBPIZZARIADORICARDO")} src={pubPizza} />
          <SectionBaresBarAvatar onClick={()=>go("LAVILLAGOURMET")} src={laVila} />
          <SectionBaresBarAvatar onClick={()=>go("CASAVELHACREPERIA")} src={casaVelha} />
        </SectionBaresWrapperBares>
      </Section>
      <Section name="pratos" img={fundo3}></Section>
      <Section name="save-the-date" img={saveTheDate} />
    </Container>
  );
};
