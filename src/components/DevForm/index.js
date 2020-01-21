import React, { useState, useEffect} from 'react';
import './styles.css';

function DevForm({handleAddDev}) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { 
          coords: {
            latitude, longitude
          } 
        } = position;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (error) => {
        console.log(error)
      },
      {
        timeout: 30000
      }
    )  
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
    await handleAddDev(
      {
        github_username: githubUsername,
        techs,
        latitude,
        longitude
      }
    );
    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          value={githubUsername}
          onChange={ e => setGithubUsername(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={ e => setTechs(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            onChange={ e => setLatitude(e.target.value)}
            value={latitude}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            onChange={ e => setLongitude(e.target.value)}
            value={longitude} required
          />
        </div>
      </div>
      <button type="submit"> Salvar </button>
    </form>
  )
}

export default DevForm;