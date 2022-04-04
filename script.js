let url = 'https://significado.herokuapp.com/v2/';

let inputTxt = document.querySelector('#container_inputtxt');
let btnTxt = document.querySelector('#container_btn');
let resultado = document.querySelector('#container_result');

btnTxt.addEventListener('click', () => {
  let palavra = inputTxt.value;
  if (palavra === '') {
    resultado.innerHTML = `<p id="container_significado"><span>4º</span>Escreva alguma palavra no campo de pesquisa!!</p>`
  } else {
      fetch(`${url}${palavra}`)
      .then((resposta) => resposta.json())
      .then((data) => {
          console.log(data)
          resultado.innerHTML = 
            `<h3 id="container_palavra">${palavra}</h3>
            <p id="container_significado"><span>1º</span>${data[0].meanings[0]}</p>
            <p id="container_significado"><span>2º</span>${data[0].meanings[1]}</p>
            <p id="container_significado"><span>3º</span>${data[0].meanings[2]}</p>
            <p id="container_significado"><span>4º</span>${data[0].meanings[3]}</p>`
          }).catch(() => {
            resultado.innerHTML = `<p id="container_significado"><span>Erro!</span><br>Não foi possível buscar essa palavra, por favor confira se ela é realmente do vocabulário português ou até mesmo se ela foi escrita corretamente e tente outra vez...</p>`
          })
  }
})