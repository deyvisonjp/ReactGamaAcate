import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'

type Repository = {
  full_name: string;
  description: string;
}

function getApiGitHub(){

}


function App() {

  const [repositories, setRepository] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/deyvsonjp/repos')
    .then(response => response.json())
    .then(data => {setRepository(data)
    }).catch(e => console.log("Ocorreu um erro: " + e));
  }, [])

  return (
    <div>
      <h1>API GitHub</h1>
      <h3 htmlFor="nomeRepository">Entre com o nome do repositório</h3>
      <input type="text" id="nomeRepository" /> <br />
      <button onClick={getApiGitHub}>Buscar</button>

    <ul>
      {repositories.map(repo => {
        return (
          <div className="card">
            <li key={repo.full_name} >
            <strong> {repo.full_name} </strong>
            <p> {repo.description} </p> 
            </li>
          </div>
        )
      })}
      <hr />
    </ul>

    </div>
  )
}

export default App
