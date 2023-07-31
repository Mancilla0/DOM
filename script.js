const btn = document.querySelector("[data-form-btn]");
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input);
}

console.log(btn);

//Arrow Function o Funcion anónima
btn.addEventListener("click", createTask);