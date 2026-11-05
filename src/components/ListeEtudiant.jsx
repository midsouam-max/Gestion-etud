function ListeEtudiant() {
  const etudiants = [
    { id: 1, nom: "Alami", prenom: "Ahmed", age: 20 },
    { id: 2, nom: "Benali", prenom: "Sara", age: 21 },
    { id: 3, nom: "Idrissi", prenom: "Youssef", age: 19 },
    { id: 4, nom: "Amrani", prenom: "Salma", age: 22 },
    { id: 5, nom: "Tazi", prenom: "Omar", age: 20 },
  ];

  return (
    <div className="liste-etudiants">
  <h2>Liste des étudiants</h2>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Âge</th>
      </tr>
    </thead>
    <tbody>
      {etudiants.map((etudiant) => (
        <tr key={etudiant.id}>
          <td>{etudiant.nom}</td>
          <td>{etudiant.prenom}</td>
          <td>{etudiant.age} ans</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default ListeEtudiant;