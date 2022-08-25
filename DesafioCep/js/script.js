function consultaCep() {
  let cep = document.querySelector('#cepPesquisado').value;
  if (cep.length !== 8){
    alert('CEP Inválido!')
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function(response){
    response.json().then(mostrarEndereco);
    // response.json().then(function(data){
    //   console.log(data)
    //   mostrarEndereco(data)
    //})
    //.catch(err => console.log("Erro: " + err, message))
  });

  //Fetch Exemplo 
  // fetch(url, {
  //   method: "GET",
  //   headers: {"Content-type": "application/json;charset=UTF-8"}
  // })
  // .then(response => 
  //   response.json().then(console.log(response))) 
  // .then(json => console.log(json))
  // .catch(err => console.log('Erro: '+ err));

  //Sugestão Orientador
  // fetch(url, options) 
  //   .then(response => {
  //      response.json()
  //       .then(data =showData(data))
  //   })
  //   .catch(err => console.log('Erro: '+ err, message));
}

const mostrarEndereco = (dados) => {
  let resultado = document.querySelector('#retornoCepPesquisado');

  resultado.innerHTML = `<p>Localidade: ${dados.localidade}</p>
                          <p>Endereco: ${dados.logradouro}</p>
                          <p>Complemento: ${dados.complemento}</p>
                          <p>bairro: ${dados.bairro}</p>
                          <p>Estado ${dados.uf}</p>`

}