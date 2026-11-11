import { useState } from 'react';

function GestionEtudiants() {
  const [etudiant, setEtudiant] = useState({ nom: '', prenom: '', age: '' });
  const [etudiants, setEtudiants] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtudiant({ ...etudiant, [name]: value });
  };

  const handleClick = () => {
    if (!etudiant.nom || !etudiant.prenom || !etudiant.age) return;

    const nouvelEtudiant = {
      id: Date.now(),
      nom: etudiant.nom,
      prenom: etudiant.prenom,
      age: etudiant.age
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
    setEtudiant({ nom: '', prenom: '', age: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Gestion des étudiants</h2>

      <div style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={etudiant.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          value={etudiant.prenom}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Âge"
          value={etudiant.age}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Ajouter</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #555', padding: '8px' }}>Nom</th>
            <th style={{ border: '1px solid #555', padding: '8px' }}>Prénom</th>
            <th style={{ border: '1px solid #555', padding: '8px' }}>Âge</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id}>
              <td style={{ border: '1px solid #555', padding: '8px' }}>{etudiant.nom}</td>
              <td style={{ border: '1px solid #555', padding: '8px' }}>{etudiant.prenom}</td>
              <td style={{ border: '1px solid #555', padding: '8px' }}>{etudiant.age} ans</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GestionEtudiants;