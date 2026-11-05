function Etudiant({ nom, prenom, age, filiere }) {
  return (
    <div className="etudiant">
      <h3>Carte étudiant</h3>
      <p><strong>Nom :</strong> {nom}</p>
      <p><strong>Prénom :</strong> {prenom}</p>
      <p><strong>Âge :</strong> {age} ans</p>
      <p><strong>Filière :</strong> {filiere}</p>
    </div>
  );
}

export default Etudiant;