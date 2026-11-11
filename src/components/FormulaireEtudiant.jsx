import { useState } from 'react';

function FormulaireEtudiant() {

  const [etudiant, setEtudiant] = useState({
    nom: '',
    prenom: '',
    age: ''
  });

  
  const [etudiantAffiche, setEtudiantAffiche] = useState(null);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtudiant({
      ...etudiant, 
      [name]: value 
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    if (!etudiant.nom || !etudiant.prenom || !etudiant.age) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

   
    setEtudiantAffiche(etudiant);

    
    setEtudiant({ nom: '', prenom: '', age: '' });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Ajouter un étudiant</h2>
      
    
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '250px', gap: '10px' }}>
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
        
      
        <button type="submit">Ajouter</button>
      </form>

      
      {etudiantAffiche && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Informations de l'étudiant :</h3>
          <p><strong>Nom :</strong> {etudiantAffiche.nom}</p>
          <p><strong>Prénom :</strong> {etudiantAffiche.prenom}</p>
          <p><strong>Âge :</strong> {etudiantAffiche.age} ans</p>
        </div>
      )}
    </div>
  );
}

export default FormulaireEtudiant;