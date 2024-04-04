import React from "react";
import Links from "./links";
import styled from "styled-components";
import fundo5 from "./assets/img/fundo_5.png";

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

import logoEvento from "./assets/img/bares/logo_comida_de_buteco.png";
import logoSicoob from "./assets/img/bares/logo_sicoob.png";

const data = {
  TORO: {
    logo: toroBurguer,
    prato: toroBurguerPrato,
  },
  SHOKAN: {
    logo: shokan,
    prato: shokanPrato,
  },
  CORONEL: {
    logo: coronelBier,
    prato: coronelBierPrato,
  },
  CASAVELHACREPERIA: {
    logo: casaVelha,
    prato: casaVelhaPrato,
  },
  LAVILLAGOURMET: {
    logo: laVila,
    prato: laVilaPrato,
  },
  PUBPIZZARIADORICARDO: {
    logo: pubPizza,
    prato: pubPizzaPrato,
  },
  BARDOTRAUKO: {
    logo: trauku,
    prato: traukuPrato,
  },
  TEMPERIAMINEIRA: {
    logo: temperiaMineira,
    prato: temperiaMineiraPrato,
  },
};

const Container = styled.div`
  background-color: #ebebeb;
`;

const Section = styled.div`
  background: url(${(props) => {
    return props.img;
  }});
  min-height: 110vh;
  background-repeat: no-repeat;
  width: 100% !important;
  background-color: red;
  background-size: 100% 100%;
  @media (max-width: 700px) {
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BarLogo = styled.img`
  max-height: 200px;
`;
const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemRightImg = styled.img`
  max-height: 200px;
`;

const VoteSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;
const VoteSectionImgVoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const VoteSectionImgPrato = styled.img`
  width: 460px;
  height: 460px;
  padding: 0px;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 150px;
    height: 150px;
  }
`;
const VoteSectionImgVoteContainer = styled.div`
  display: flex;
`;
const VoteSectionImgVote = styled.div``;
const VoteSectionImgVoteItemText = styled.h3``;
export default (props) => {
  const [siteName, setSiteName] = React.useState({});

  function init() {
    setSiteName(data[window.location.pathname.replace("/", "")]);
  }

  React.useEffect(init, []);

  return (
    <Container>
      <Section img={fundo5}>
        <Header>
          <BarLogo src={siteName.logo} />
          <ItemRight>
            <ItemRightImg src={logoSicoob} />
            <ItemRightImg src={logoEvento} />
          </ItemRight>
        </Header>
        <VoteSection>
          <VoteSectionImgPrato src={siteName.prato} />
          <VoteSectionImgVoteContainer>
            <VoteSectionImgVote>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  1 - Apresentação do prato
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  2 - Aroma do Prato
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  3 - Sabor do Prato
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  4 - Atendimento
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  5 - Tempo de espera
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  6 - Bebida
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  7 - Higiene do local
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  8 - Ambiente
                </VoteSectionImgVoteItemText>
                <VotoRange />
              </VoteSectionImgVoteItem>
            </VoteSectionImgVote>
          </VoteSectionImgVoteContainer>
        </VoteSection>
      </Section>
      <Links />
    </Container>
  );
};

const VoteContainer = styled.div`
  display: flex;
  padding: 10px;
`;

const VoteContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;
const VoteLabel = styled.label`
  font-weight: 900;
  color: white;
`;

const Ring = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #0be881;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  ${(props) => {
    if (props.selected) {
      return "background-color: #0be881;";
    }
  }}
`;

function VotoNumero(props) {
  function onClick() {
    props.onClick(props.value);
  }
  return (
    <VoteContainerItem>
      <VoteLabel>{props.label}</VoteLabel>
      <Ring onClick={onClick} selected={props.selected} />
    </VoteContainerItem>
  );
}

function VotoRange(props) {
  const [selected, setSelected] = React.useState("");
  function onClick(value) {
    setSelected(value);
  }
  return (
    <VoteContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
        return (
          <VotoNumero
            onClick={onClick}
            selected={selected === i}
            value={i}
            label={i}
          />
        );
      })}
    </VoteContainer>
  );
}
