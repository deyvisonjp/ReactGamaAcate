// Variáveis Globais
const buscaProfile = document.getElementById("buscaProfile");
const ul = document.querySelector('ul');
console.log(buscaProfile.value);

function getApiGitHub() {
  fetch(`https://api.github.com/users/${buscaProfile.value}/repos`)
  .then(async response => {
    
    if(!response.ok) {
      throw new Error(response.status)
    }

    var data = await response.json();
    console.log(data)

    data.map(repo => {
      console.log(repo.name, repo.full_name, repo.description)
      var li = document.createElement('li');
      li.classList.add("collection-item", "avatar");

      li.innerHTML = `
      <i class="material-icons circle">GIT</i>
      <span class="title">${repo.name}</span>
      <p> ${repo.full_name}
        <br> ${repo.description}
      </p>
      `
      ul.appendChild(li);
    })

  }).catch(e => console.log("Ocorreu um erro: " + e));
}



