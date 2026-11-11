// @ts-expect-error Etudiant is a JSX component without a TypeScript declaration.
import Etudiant from './components/Etudiant';
// @ts-expect-error ListeEtudiants is a JSX component without a TypeScript declaration.
import ListeEtudiants from './components/ListeEtudiant';
import Compteur from './components/Compteur';
import './App.css';
import FormulaireEtudiant from './components/FormulaireEtudiant';

import { useEffect, useState } from "react";

function App() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Composant chargé");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Erreur fetch:", error));
  }, []);
 
  return (
    <div>
      <p>bienvenue dans notre application</p>
      <h1>application de gestion de etu</h1>
      
      <ListeEtudiants />
      <Compteur />
      <FormulaireEtudiant />

      <Etudiant
        nom="Ahmed"
        prenom="Alami"
        age={20}
        filiere="Développement informatique"
      />

      <Etudiant
        nom="Sara"
        prenom="Bennani"
        age={22}
        filiere="Réseaux et télécommunications"
      />

      <Etudiant
        nom="Youssef"
        prenom="El Idrissi"
        age={21}
        filiere="Génie logiciel"
      />

      <div style={{ marginTop: "40px", padding: "20px", borderTop: "2px solid #ccc" }}>
        <h2>Utilisateurs de l'API</h2>
        
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #555", padding: "8px" }}>Nom</th>
              <th style={{ border: "1px solid #555", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid #555", padding: "8px" }}>Ville</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #555", padding: "8px" }}>{user.name}</td>
                <td style={{ border: "1px solid #555", padding: "8px" }}>{user.email}</td>
                <td style={{ border: "1px solid #555", padding: "8px" }}>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>

    </div>
  );
}

export default App;