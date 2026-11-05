// 2. Importer le hook useState depuis React
import { useState } from 'react';

function Compteur() {
  // 3. Déclarer un état compteur initialisé à 0
  // 'compteur' contient la valeur, 'setCompteur' permet de la modifier
  const [compteur, setCompteur] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Mon Compteur</h2>
      
      {/* 4. Afficher la valeur actuelle du compteur */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Valeur : {compteur}
      </p>

      {/* Boutons pour interagir */}
      <div>
        {/* 5. Bouton Incrémenter (+1) */}
        <button onClick={() => setCompteur(compteur + 1)}>
          Incrémenter
        </button>

        {/* 6. Bouton Décrémenter (-1) */}
        <button onClick={() => setCompteur(compteur - 1)} style={{ margin: '0 10px' }}>
          Décrémenter
        </button>

        {/* 7. Bouton Remise à zéro (=0) */}
        <button onClick={() => setCompteur(0)}>
          Remise à zéro
        </button>
      </div>
    </div>
  );
}

export default Compteur;