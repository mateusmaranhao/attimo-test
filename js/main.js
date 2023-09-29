// Apoio
const btnModalApoio = document.querySelectorAll('.js-open-modal-apoio');
const apoio = document.getElementById('js-apoio');
const btnCloseModalApoio = document.querySelector('.js-close-modal-apoio');
function openModalApoio() {
    apoio.classList.add('active');
}
function closeModalApoio() {
    apoio.classList.remove('active')
}
btnModalApoio.forEach(open => {
    open.addEventListener('click', openModalApoio)
})
btnCloseModalApoio.addEventListener('click', closeModalApoio);


// GESTÃO
const btnModalGestao = document.querySelectorAll('.js-open-modal-gestao');
const gestao = document.getElementById('js-gestao');
const btnCloseModalGestao = document.querySelector('.js-close-modal-gestao');
function openModalGestao() {
    gestao.classList.add('active');
}
function closeModalGestao() {
    gestao.classList.remove('active')
}
btnModalGestao.forEach(open => {
    open.addEventListener('click', openModalGestao)
})
btnCloseModalGestao.addEventListener('click', closeModalGestao);

// FORMAÇÃO
const btnModalFormacao = document.querySelectorAll('.js-open-modal-formacao');
const formacao = document.getElementById('js-formacao');
const btnCloseModalFormacao = document.querySelector('.js-close-modal-formacao');
function openModalFormacao() {
    formacao.classList.add('active');
}
function closeModalFormacao() {
    formacao.classList.remove('active')
}
btnModalFormacao.forEach(open => {
    open.addEventListener('click', openModalFormacao)
})
btnCloseModalFormacao.addEventListener('click', closeModalFormacao);


// EVENTOS
const btnModalEventos = document.querySelectorAll('.js-open-modal-eventos');
const eventos = document.getElementById('js-eventos');
const btnCloseModalEventos = document.querySelector('.js-close-modal-eventos');
function openModalEventos() {
    eventos.classList.add('active');
}
function closeModalEventos() {
    eventos.classList.remove('active')
}
btnModalEventos.forEach(open => {
    open.addEventListener('click', openModalEventos)
})
btnCloseModalEventos.addEventListener('click', closeModalEventos);


// PODER PÚBLICO
const btnModalPublico = document.querySelectorAll('.js-open-modal-publico');
const publico = document.getElementById('js-publico');
const btnCloseModalPublico = document.querySelector('.js-close-modal-publico');
function openModalPublico() {
    publico.classList.add('active');
}
function closeModalPublico() {
    publico.classList.remove('active')
}
btnModalPublico.forEach(open => {
    open.addEventListener('click', openModalPublico)
})
btnCloseModalPublico.addEventListener('click', closeModalPublico);