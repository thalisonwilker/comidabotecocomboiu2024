import React from "react";
import styled from "styled-components";
import fundo3 from "./assets/img/fundo_3.png";
import fundo2 from "./assets/img/fundo_2.png";
import saveTheDate from "./assets/img/save_the_date.png";
import logoEvento from "./assets/img/bares/logo_comida_de_buteco.png";
import logoSicoob from "./assets/img/bares/logo_sicoob.png";

import baresText from "./assets/img/bares/text_bares_participantes.png";
import pratosText from "./assets/img/bares/texto_pratos_2024.png";

// bares 
import toroBurguer from "./assets/img/bares/toro.png";
import coronelBier from "./assets/img/bares/coronel_bier.png";
import shokan from "./assets/img/bares/shokan.png";
import trauku from "./assets/img/bares/bar_do_trauku.png";
import pubPizza from "./assets/img/bares/pub_pizzaria_ricardo.png";
import laVila from "./assets/img/bares/la_vila_gourmet.png";
import casaVelha from "./assets/img/bares/casa_velha.png";
import temperiaMineira from "./assets/img/bares/temperia_mineira.png";

// pratos
import toroBurguerPrato from "./assets/img/bares/toro_prato.png";
import coronelBierPrato from "./assets/img/bares/coronel_bier_prato.png";
import shokanPrato from "./assets/img/bares/shokan_prato.png";
import traukuPrato from "./assets/img/bares/bar_do_trauku_prato.png";
import pubPizzaPrato from "./assets/img/bares/pub_pizzaria_ricardo_prato.png";
import laVilaPrato from "./assets/img/bares/la_vila_gourmet_prato.png";
import casaVelhaPrato from "./assets/img/bares/casa_velha_prato.png";
import temperiaMineiraPrato from "./assets/img/bares/temperia_mineira_prato.png";

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
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const LogoComidaBotecoSectionBares = styled.img`
max-width: 400px;
@media (max-width: 700px) {
  max-width: 200px;
  align-self: center;
}
`;
const ImgTextBares = styled.img`
  max-width: 600px;
  rotate: -3deg;
  @media (max-width: 700px) {
    max-width: 200px;
    align-self: center;
  }
`;
const ImgTextPratos = styled.img`
max-width: 800px;
  margin-bottom: -30px;
  @media (max-width: 700px) {
    max-width: 400px;
  }
  @media (max-width: 700px) {
    max-width: 200px;
    align-self: center;
  }
`;
const ImgLogoSicoobBares = styled.img`
  max-width: 400px;
`;
const SectionBaresWrapperBares = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const SectionBaresBarAvatar = styled.img`
  width: 250px;
  height: 250px;
  padding: 0px;
  border-radius: 50%;
`;
export default (props) => {
  function go(to) {
    window.location.href = to;
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
          <SectionBaresBarAvatar src={toroBurguer} />
          <SectionBaresBarAvatar src={coronelBier} />
          <SectionBaresBarAvatar src={shokan} />
          <SectionBaresBarAvatar src={trauku} />
        </SectionBaresWrapperBares>
        <SectionBaresWrapperBares>
          <SectionBaresBarAvatar src={temperiaMineira} />
          <SectionBaresBarAvatar src={pubPizza} />
          <SectionBaresBarAvatar src={laVila} />
          <SectionBaresBarAvatar src={casaVelha} />
        </SectionBaresWrapperBares>
      </Section>
      <Section name="pratos" img={fundo2}>
        <SectionBaresWrapperInfo>
          <ImgTextPratos src={pratosText} />
        </SectionBaresWrapperInfo>
        <SectionBaresWrapperBares>
          <SectionBaresBarAvatar src={toroBurguerPrato} />
          <SectionBaresBarAvatar src={coronelBierPrato} />
          <SectionBaresBarAvatar src={shokanPrato} />
          <SectionBaresBarAvatar src={traukuPrato} />
        </SectionBaresWrapperBares>
        <SectionBaresWrapperBares>
          <SectionBaresBarAvatar src={pubPizzaPrato} />
          <SectionBaresBarAvatar src={laVilaPrato} />
          <SectionBaresBarAvatar src={casaVelhaPrato} />
          <SectionBaresBarAvatar src={temperiaMineiraPrato} />
        </SectionBaresWrapperBares>
      </Section>
      <Section name="save-the-date" img={saveTheDate} />
    </Container>
  );
};
