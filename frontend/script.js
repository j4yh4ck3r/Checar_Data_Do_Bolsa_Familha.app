const output = document.getElementById("output");
let hoje = new Date();
const mes = {
    "agosto": hoje.getDate() === 21 && hoje.getMonth() + 1 === 8,
    "setembro": hoje.getDate() === 22 && hoje.getMonth() + 1 === 9,
    "outubro": hoje.getDate() === 22 && hoje.getMonth() + 1 === 10,
    "novembro": hoje.getDate() === 19 && hoje.getMonth() + 1 === 11,
    "dezembro": hoje.getDate() === 15 && hoje.getMonth() + 1 === 12
}
if (mes["agosto"] || mes["setembro"] || mes["outubro"] || mes["novembro"] || mes["dezembro"]) {
    output.innerHTML = `<h1>Hoje dia ${hoje.getDate()} cai seu bolsa familiar.</h1>`;
} else {
    output.innerHTML = `
        <h1>Hoje não cai seu bolsa familiar.</h1>
        <h3>Dias prováveis de cada mês para receber</h3>
        <div id="calendario">
            <div class="dias"><p>agosto</p><p>21</p></div>
            <div class="dias"><p>setembro</p><p>22</p></div>
            <div class="dias"><p>outubro</p><p>22</p></div>
            <div class="dias"><p>novembro</p><p>19</p></div>
            <div class="dias"><p>dezembro</p><p>15</p></div>
        </div>
    `;
}