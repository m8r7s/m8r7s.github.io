const passwords_angleterre=["123456","password","123456789","qwerty","12345678","12345","1234567","111111","123123","qwertyuiop","letmein","welcome","admin","football","monkey","dragon","sunshine","shadow","superman","michael","charlie","liverpool","chelsea","arsenal","manutd","freedom","whatever","password1","passw0rd","london","england","britain","yankees","rangers","celtic","united","spurs","blackpool","bristol","cambridge","oxford","harvard","kings","queens","royalty","windsor","euston","piccadilly","charingcross","trafalgar","nelson","wellington","beefeater","bigben","westminster","buckingham","kensington","hydepark","regentspark","greenpark","hampstead","battersea","canarywharf","eastend","westend","southbank","cityoflondon","islington","camden","hackney","hack","hacker","cyber","security","privacy","anonymity","darknet","tor","vpn","encryption","locksmith","blacksmith","carpenter","plumber","electrician","mechanic","builder","architect","surveyor","engineer"];
    
const passwords_espagne=["123456","password","123456789","12345678","12345","qwerty","1234567","abc123","111111","123123","letmein","iloveyou","welcome","monkey","dragon","sunshine","football","baseball","qwertyuiop","superman","harley","batman","1234abcd","passw0rd","hola123","espana","madrid","barcelona","sevilla","valencia","vivaespaña","torero","sangria","paella","fiesta","guitarra","flamenco","corazon","estrella","sol","playa","arena","amor","sevillana","bailarina","toros","tapas","cocina","vino","cerveza","ronaldo","messi","realmadrid","barca","atletico","zaragoza","betis","malaga","espanyol","valenciafc", "granada","alaves","getafe","eibar","leganes","levante","osasuna","valladolid","villarreal","cadiz","celta","elche","huesca","mallorca","laspalmas","racing","tenerife","almeria","gijon","numancia","hercules","jaen","leon","burgos","salamanca","merida","soria","segovia","teruel","zamora"];
    
const passwords_france=["123456","azerty","motdepasse","123456789","qwerty","password","abc123","111111","admin","1234","letmein","monchien","monchat","bonjour","soleil","printemps","123123","freedom","whatever","princesse","password1","passw0rd","azertyuiop","azert123","helloworld","monamour","blabla","chocolat","fromage","etoile","juillet","decembre","paris","marseille","nantes","montpellier","toulouse","piscine","tennis","foot","rugby","voiture","mercedes","porsche","citroen","renault","peugeot","volvo","clio","twingo","starwars","batman","superman","spiderman","pokemon","pikachu","naruto","dragonball","goku","vegeta","ferrari","lamborghini","bugatti","tesla","apple","samsung","huawei","xiaomi","nokia","sony","windows","linux","ubuntu","debian","centos","fedora","archlinux","gentoo","kali","redhat","firefox","chrome","safari","opera","edge","explorer","internet","web","reseau","cloud","hack","hacker","cyber","security","securite","privacy","anonymat","darknet","tor","vpn"];


function checkPassword(password) {
    if (passwords_france.includes(password)) {
        return "Le mot de passe est dans la liste française.";
    } else if (passwords_espagne.includes(password)) {
        return "Le mot de passe est dans la liste espagnole.";
    } else if (passwords_angleterre.includes(password)) {
        return "Le mot de passe est dans la liste anglaise.";
    } else {
        return estimateCrackingTime(password);
    }
}

// Fonction pour estimer le temps nécessaire pour craquer le mot de passe par brute force
function estimateCrackingTime(password) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
    let attempts = 0;

    for (let length = 1; length <= password.length; length++) {
        for (let i = 0; i < Math.pow(characters.length, length); i++) {
            attempts++;
            const attempt = Array.from({ length }, (_, j) => characters[Math.floor(i / Math.pow(characters.length, j)) % characters.length]).join('');
            if (attempt === password) {
                // Estimation du temps basé sur 1 milliard de tentatives par seconde
                const timeSeconds = attempts / 1e9;
                return `Le mot de passe n'est pas dans les listes courantes.  Temps estimé pour craquer : ${timeSeconds.toFixed(2)} secondes.`;
            }
        }
    }
}



onmessage = function (e) {
    let workerResult = 'error';
    if (e.data) {
        workerResult = checkPassword(e.data[0]) ;
    } else {
        workerResult = "> Veuillez entrer un mot de passe.";
    }
    console.log(e.data)
    console.log("Envoi du message de retour au script principal");
    postMessage(workerResult);
  };
