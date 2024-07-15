// Fonction pour vérifier si le mot de passe est dans les listes de mots de passe courants
function checkPassword2(password) {
    if (passwords_france.includes(password)) {
        return "Le mot de passe est dans la liste française.";
    } else if (passwords_espagne.includes(password)) {
        return "Le mot de passe est dans la liste espagnole.";
    } else if (passwords_angleterre.includes(password)) {
        return "Le mot de passe est dans la liste anglaise.";
    } else {
        return estimateCrackingTime2(password);
    }
}

// Fonction pour estimer le temps nécessaire pour craquer le mot de passe par brute force
function estimateCrackingTime2(password) {
    const length = password.length;
    const charsetSize = getCharsetSize2(password);

    // Estimation du nombre de tentatives nécessaires
    const attempts = Math.pow(charsetSize, length);

    // Estimation du temps basé sur 1 milliard de tentatives par seconde
    const timeSeconds = attempts / 1e9;
    return `Le mot de passe n'est pas dans les listes courantes. Temps estimé pour craquer : ${timeSeconds.toFixed(2)} secondes.`;
}

// Fonction pour déterminer la taille de l'ensemble de caractères utilisé dans le mot de passe
function getCharsetSize2(password) {
    let charsetSize = 0;
    if (/[a-z]/.test(password)) charsetSize += 26;
    if (/[A-Z]/.test(password)) charsetSize += 26;
    if (/[0-9]/.test(password)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32; // Approximation for punctuation and special characters
    return charsetSize;
}

// Vérification du mot de passe
function testerMdp2() {
    const password = document.getElementById("passwordInput").value;
    if (password) {
        const result = checkPassword2(password);
        document.getElementById("consoleP1").innerText = "> Mot de passe renseigné"
        document.getElementById("resultconsole").innerText = "> " + result;
    } else {
        document.getElementById("consoleP1").innerText = "> Aucun mot de passe"
        document.getElementById("resultconsole").innerText = "> Veuillez entrer un mot de passe.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button2").addEventListener("click", testerMdp2);
});
