import React from "react";
import Links from "./links";
import styled from "styled-components";
import InputMask from "react-input-mask";

import fundo5 from "./assets/img/fundo_3.png";

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

import axios from "axios";

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
  background-color: white;
`;

const Section = styled.div`
  background: url(${(props) => props.img});
  min-height: 110vh;
  background-repeat: no-repeat;
  width: 100% !important;
  background-size: 100% 100%;
  @media (max-width: 700px) {
    background-size: 150% 120%;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
  padding-left: 150px;
  @media (max-width: 700px) {
    padding-left: 10px;
  }
`;
const BarLogo = styled.img`
max-height: 200px;
@media (max-width: 700px) {
  max-height: 100px;
  margin-top: -20px;
}
`;
const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-top: -60px;
  & > :nth-child(2) {
    margin-top: -50px;
  }
  @media (max-width: 700px) {
    & > :nth-child(2) {
      margin-top: 20px;
    }
  }
`;
const ItemRightImg = styled.img`
  max-height: 200px;
  margin-bottom: -40px !important;
  @media (max-width: 700px) {
    max-height: 100px;
    top: 0;
  }
`;

const VoteSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  @media (max-width: 700px) {
    flex-direction: column-reverse
  }
`;
const VoteSectionImgVoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
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
const VoteSectionImgVoteItemText = styled.h3`
  color: white;
  font-size: 1.3em;
  @media (max-width: 700px) {
    font-size: 1.3em;
  }
`;

const InputCPFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputCPFText = styled.label`
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #ffeaa7;
  font-size: 2em;
  font-weight: 900;
  @media (max-width: 700px) {
    font-size: 1.1em;
  }
`;

const InputCPF = styled(InputMask)`
  border: none;
  border-radius: 5px;
  background-color: #ffeaa7;
  color: #2d3436;
  border: 5px solid #0be881;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;

  &:focus {
    border: none;
    outline: none;
    border: 5px solid #0be881;
    padding: 10px;
  }
  &:disabled {
    border: none;
    outline: none;
    border: 2px solid #0be881;
    opacity: 0.3;
    cursor: not-allowed;
    padding: 10px;
    @media (max-width: 700px) {
      font-size: .7em;
      padding: 4px;
    }
  }

  @media (max-width: 700px) {
    font-size: 1.1em;
    padding: 4px;
  }
`;
const StyledButton = styled.button`
  background-color: #4caf50; /* Cor de fundo verde */
  color: white; /* Texto branco */
  padding: 16px 32px; /* Espaçamento interno */
  font-size: 16px; /* Tamanho do texto */
  font-weight: bold; /* Peso da fonte */
  border: none; /* Sem borda */
  border-radius: 4px; /* Bordas arredondadas */
  cursor: pointer; /* Cursor do mouse como ponteiro */
  margin-bottom: 10px;
  &:hover {
    background-color: #45a049; /* Cor de fundo mais escura quando passar o mouse */
  }
  &:active {
    background-color: #3e8e41; /* Cor de fundo ao clicar */
    box-shadow: 0 2px #666; /* Sombra menor para efeito de pressionado */
    transform: translateY(2px); /* Desloca o botão um pouco para baixo */
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  @media (max-width: 700px) {
    padding: 8px 16px;
    font-size: .7em;
  }
`;
export default (props) => {
  const [loading, setLoading] = React.useState(false);
  const [siteName, setSiteName] = React.useState({});
  const [podeVotar, setPodeVotar] = React.useState(true);
  const [voto, setVoto] = React.useState({
    apresentacao_prato: 0,
    aroma_prato: 0,
    sabor_prato: 0,
    atendimento: 0,
    tempo_espera: 0,
    bebida: 0,
    higiene_local: 0,
    ambiente: 0,
  });
  const [cpf, setCPF] = React.useState("");

  function onChangeCPF(e) {
    let value = e.target.value.replace(/\D/g, "");
    setCPF(value);
    if (value.length === 11) {
      const url = `${process.env.REACT_APP_API_URL}`;
      const bar = window.location.pathname.replace("/", "");
      setLoading(true);
      axios
        .get(`${url}validate/`, {
          params: {
            cpf,
            bar,
          },
        })
        .catch((error) => {
          setPodeVotar(false);
          alert("Não é possível votar neste bar com este CPF!");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  function votar() {
    if (cpf.length < 11) {
      alert("INFORME O SEU CPF");
      return;
    }
    const url = `${process.env.REACT_APP_API_URL}`;
    const bar = window.location.pathname.replace("/", "");
    let obj = {
      apresentacao_prato: "1 - Apresentação do prato",
      aroma_prato: "2 - Aroma do Prato",
      sabor_prato: "3 - Sabor do Prato",
      atendimento: "4 - Atendimento",
      tempo_espera: "5 - Tempo de espera",
      bebida: "6 - Bebida",
      higiene_local: "7 - Higiene do local",
      ambiente: "8 - Ambiente",
    };

    for (let key of Object.keys(voto)) {
      console.debug(key);
      if (voto[key] === 0) {
        alert(`Dê SUA NOTA PARA ${obj[key]}`);
        return;
      }
    }
    setLoading(true)
    axios.post(url, { bar, ...voto, cpf }).then(resp=>{
      alert("Voto Registrado! Obrigado por participar!!");
    }).catch((error) => {
      setLoading(false)
      alert("Não é possível votar neste bar com este CPF!");
    });
  }

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
        <InputCPFWrapper>
          <InputCPFText className="text-digite-o-cpf">Digite o CPF para votar</InputCPFText>
          <InputCPF
            disabled={!podeVotar || loading}
            onChange={onChangeCPF}
            mask="999.999.999-99"
          />
          <StyledButton
            disabled={!podeVotar || cpf.length < 11 || loading}
            onClick={votar}
          >
            VOTAR
          </StyledButton>
        </InputCPFWrapper>
        <VoteSection>
          <VoteSectionImgPrato src={siteName.prato} />

          <VoteSectionImgVoteContainer>
            <VoteSectionImgVote pode={podeVotar}>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  1 - Apresentação do prato
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(apresentacao_prato) =>
                    setVoto({ ...voto, apresentacao_prato })
                  }
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  2 - Aroma do Prato
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(aroma_prato) => setVoto({ ...voto, aroma_prato })}
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  3 - Sabor do Prato
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(sabor_prato) => setVoto({ ...voto, sabor_prato })}
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  4 - Atendimento
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(atendimento) => setVoto({ ...voto, atendimento })}
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  5 - Tempo de espera
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(tempo_espera) =>
                    setVoto({ ...voto, tempo_espera })
                  }
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  6 - Bebida
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(bebida) => setVoto({ ...voto, bebida })}
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  7 - Higiene do local
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(higiene_local) =>
                    setVoto({ ...voto, higiene_local })
                  }
                />
              </VoteSectionImgVoteItem>
              <VoteSectionImgVoteItem>
                <VoteSectionImgVoteItemText>
                  8 - Ambiente
                </VoteSectionImgVoteItemText>
                <VotoRange
                  onChange={(ambiente) => setVoto({ ...voto, ambiente })}
                />
              </VoteSectionImgVoteItem>
            </VoteSectionImgVote>
          </VoteSectionImgVoteContainer>
        </VoteSection>
      </Section>
      {/* <Links /> */}
    </Container>
  );
};

const VoteContainer = styled.div`
  display: flex;
  padding: 10px;
  @media (max-width: 700px) {
  }
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
  @media (max-width: 700px) {
    font-size: .8em;
  }
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
  @media (max-width: 700px) {
    width: 6px;
    height: 6px;
    font-size: .9em;
  }
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
    props.onChange(value);
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
