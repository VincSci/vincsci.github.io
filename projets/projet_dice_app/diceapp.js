document.getElementById('roll-dice').addEventListener('click', function() {
    const resultContainer = document.getElementById('result'); //Récupération du conteneur de résultat
    const dice = document.getElementById('dice-type'); // Récupération du type de dé
    const diceValue = parseInt(dice.value); // On s'assure que c'est un nombre
    const numberOfDice = document.getElementById('number-of-dice').value; // Récupération du nombre de dé à lancer
    const rollType = document.getElementById('roll-type').value; // Récupération du type de lancer depuis le select

    const arrayDice = []; // Création du tableau qui contient les résultats
    for (let i = 0; i < numberOfDice; i++) { // Pour chaque dé qu'il faut lancer selon le nombre de dé entrer par l'utilisateur
        arrayDice.push(Math.floor(Math.random() * diceValue) + 1); 
		//On sélectionne un résultat entre 1 et le nombre de face du dé choisi
    }

    // On vide le conteneur avant d'afficher les nouveaux résultats
    resultContainer.innerHTML = '';

    arrayDice.forEach(die => {
        // Création d'un élément span pour chaque dé
        const span = document.createElement('span');
        span.innerText = die;
        span.classList.add('result-span');

        // Application de la couleur selon la logique
        if (rollType !== 'neutral') {
            if (rollType === 'rollOver') {
                if (die === diceValue) span.classList.add('color-gold');
                else if (die === 1) span.classList.add('color-blood');
            } 
            else if (rollType === 'rollUnder') {
                if (die === 1) span.classList.add('color-gold');
                else if (die === diceValue) span.classList.add('color-blood');
            }
        }

        // Ajout du span au conteneur
        resultContainer.appendChild(span);
		
		document.getElementById('p-result').classList.remove('is-hidden');
    });
});