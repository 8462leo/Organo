import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "CEO",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },

    {
      nome: "Financeiro",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },

    {
      nome: "Desenvolvimento",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },

    {
      nome: "PCP",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },

    {
      nome: "Atendimento",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },

    {
      nome: "Cadastros",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },

    {
      nome: "Corte",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },

    {
      nome: "Facção",
      corPrimaria: "#4DFFB2",
      corSecundaria: "#29A56F",
    },

    {
      nome: "Embalagem",
      corPrimaria: "#66FFD2",
      corSecundaria: "#27AB86",
    },

    {
      nome: "Costura",
      corPrimaria: "#6B1D7A",
      corSecundaria: "#F17CFF",
    },

    {
      nome: "Expedição",
      corPrimaria: "#C7AD21",
      corSecundaria: "#E1D26C",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time == time.nome
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;