let nomePrato;
let valorPrato;

function selecionandoPrato(Prato){

    const pratoSelecionado = document.querySelector('.pratos .selecionado');

    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }

    Prato.classList.add("selecionado");

    const valorDoPrato = Prato.querySelector('.preco');

    valorPrato = valorDoPrato.innerHTML;
    valorPrato = valorPrato.slice(3,8);
    valorPrato = valorPrato.replace(',','.');
    valorPrato = parseFloat(valorPrato);

    const nomeDoPrato = Prato.querySelector('.nome-alimento');

    nomePrato = nomeDoPrato.innerHTML;

    continuar();

}

let nomeBebida;
let valorBebida;

function selecionandoBebida(Bebida){

    const pratoSelecionado = document.querySelector('.bebidas .selecionado');

    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }

    Bebida.classList.add("selecionado");

    const valorDaBebida = Bebida.querySelector('.preco');

    valorBebida = valorDaBebida.innerHTML;
    valorBebida = valorBebida.slice(3,8);
    valorBebida = valorBebida.replace(',','.');
    valorBebida = parseFloat(valorBebida);

    const nomeDaBebida = Bebida.querySelector('.nome-alimento');

    nomeBebida = nomeDaBebida.innerHTML;

    continuar();

}

let nomeSobremesa;
let valorSobremesa;

function selecionandoSobremesa(Sobremesa){

    const pratoSelecionado = document.querySelector('.sobremesas .selecionado');

    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }

    Sobremesa.classList.add("selecionado");

    const valorDaSobremesa = Sobremesa.querySelector('.preco');

    valorSobremesa = valorDaSobremesa.innerHTML;
    valorSobremesa = valorSobremesa.slice(3,8);
    valorSobremesa = valorSobremesa.replace(',','.');
    valorSobremesa = parseFloat(valorSobremesa);

    const nomeDaSobremesa = Sobremesa.querySelector('.nome-alimento');

    nomeSobremesa = nomeDaSobremesa.innerHTML;

    continuar();

}

function continuar(){

    if(valorPrato !== undefined && valorBebida !== undefined && valorSobremesa !== undefined){
        document.querySelector('.botao').removeAttribute('disabled');
        document.querySelector('.botao').classList.add('botao-ativado');
        document.querySelector('.texto-botao').innerHTML = 'Fechar pedido';
    }
}

function fecharPedido(){
    let somaTotal = valorPrato+valorBebida+valorSobremesa;
    somaTotal = somaTotal.toFixed(2);
    somaTotal = somaTotal.replace('.',',');
    const texto = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${somaTotal}`;
    const textoCompleto = encodeURIComponent(texto);
    window.open(`https://wa.me/+5592999999999?text=${textoCompleto}`);
}