import './App.css'
import React from "react";

import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#07 - Desafio Produto" color="#11698e">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Listas" color="#fa7f7f">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#45056e">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Mozart" />
                    <FamiliaMembro nome="Bethoven" />
                    <FamiliaMembro nome="Bach" />
                </Familia>
            </Card>

            <Card titulo="#04 - Exemplo de Card" color="#FF7A00">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#512e5e">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com parâmetro" color="#FF7A00">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Jurandir"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#864000">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);