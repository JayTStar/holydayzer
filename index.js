import express from "express";

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
const data = `${mes}/${dia}/${ano}`

let nomeFeriado;
let estado = checaData();

function checaData(){
    const found = holidays.find(elemento => {
        nomeFeriado = elemento.name
        return elemento.date === data
    });

    return (found === undefined) ? false : true
}

app.get("/holidays", (request, response) => {
    response.send(holidays)
})
app.get("/is-today-holiday", (request, response) => {
    response.send((estado === true) ? `Sim, hoje é ${nomeFeriado}` : 'Não, hoje não é feriado');
})

app.listen(4000, () => {
    console.log(hoje.toLocaleDateString());
    console.log(data);
});