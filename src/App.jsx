// @ts-expect-error Etudiant is a JSX component without a TypeScript declaration.
import Etudiant from './components/Etudiant';
// @ts-expect-error ListeEtudiants is a JSX component without a TypeScript declaration.
import ListeEtudiants from './components/ListeEtudiant';
import Compteur from './components/Compteur';
import './App.css';
import FormulaireEtudiant from './components/FormulaireEtudiant';

function App() {
  return (
    <div>
      <p>bienvenue dans notre application</p>
      <h1>application de gestion de etu</h1>
      <ListeEtudiants />
      <Compteur />
      <FormulaireEtudiant/>

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
    </div>
  );
}

export default App;