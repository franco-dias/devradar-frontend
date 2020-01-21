import React from 'react';
import './styles.css';

function DevItem({dev}) {
  const {
    github_username: username,
    techs: techList,
    name,
    avatar_url,
    bio
  } = dev;

  return (
    <li className="dev-item">
      <header>
        <img src={avatar_url || 'https://www.vitae.ac.uk/images/generic_avatar.jpg/@@images/146722ca-a508-430c-bd13-ed3e7a676bd6.jpeg'} alt={name}/>
        <div className="user-info">
          <strong> {name || username } </strong>
          <span> { techList.join(', ') }</span>
        </div>  
      </header>
      <p>
        { bio || 'Não há descrição' }
      </p>
      <a href={`https://github.com/${username}`}>Acessar perfil no Github</a>
    </li>
  )
}

export default DevItem;