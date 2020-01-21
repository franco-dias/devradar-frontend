import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';
import DevItem from'./components/DevItem';
import DevForm from './components/DevForm';

function App() {

  const [devs, setDevs] = useState([]);

  async function handleAddDev(formData) {
    api.post(
      '/devs',
      formData,
    )
    .then( res => {
      setDevs( (devs) => {
        return [
          ...devs,
          res.data
        ];
      });
    })
    .catch( err => console.log(err))
  }

  useEffect( () => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])
  
  return (
    <div id="app">
      <aside>
        <strong> Cadastrar </strong>
        <DevForm handleAddDev={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {
            devs.map( dev => {
              return (
                <DevItem dev={dev} key={dev._id} />
              )
            })
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
