const passwords_angleterre=["123456","password","123456789","qwerty","12345678","12345","1234567","111111","123123","qwertyuiop","letmein","welcome","admin","football","monkey","dragon","sunshine","shadow","superman","michael","charlie","liverpool","chelsea","arsenal","manutd","freedom","whatever","password1","passw0rd","london","england","britain","yankees","rangers","celtic","united","spurs","blackpool","bristol","cambridge","oxford","harvard","kings","queens","royalty","windsor","euston","piccadilly","charingcross","trafalgar","nelson","wellington","beefeater","bigben","westminster","buckingham","kensington","hydepark","regentspark","greenpark","hampstead","battersea","canarywharf","eastend","westend","southbank","cityoflondon","islington","camden","hackney","hack","hacker","cyber","security","privacy","anonymity","darknet","tor","vpn","encryption","locksmith","blacksmith","carpenter","plumber","electrician","mechanic","builder","architect","surveyor","engineer"];
    
const passwords_espagne=["123456","password","123456789","12345678","12345","qwerty","1234567","abc123","111111","123123","letmein","iloveyou","welcome","monkey","dragon","sunshine","football","baseball","qwertyuiop","superman","harley","batman","1234abcd","passw0rd","hola123","espana","madrid","barcelona","sevilla","valencia","vivaespaña","torero","sangria","paella","fiesta","guitarra","flamenco","corazon","estrella","sol","playa","arena","amor","sevillana","bailarina","toros","tapas","cocina","vino","cerveza","ronaldo","messi","realmadrid","barca","atletico","zaragoza","betis","malaga","espanyol","valenciafc", "granada","alaves","getafe","eibar","leganes","levante","osasuna","valladolid","villarreal","cadiz","celta","elche","huesca","mallorca","laspalmas","racing","tenerife","almeria","gijon","numancia","hercules","jaen","leon","burgos","salamanca","merida","soria","segovia","teruel","zamora"];
    
const passwords_france=["123456","azerty","motdepasse","123456789","qwerty","password","abc123","111111","admin","1234","letmein","monchien","monchat","bonjour","soleil","printemps","123123","freedom","whatever","princesse","password1","passw0rd","azertyuiop","azert123","helloworld","monamour","blabla","chocolat","fromage","etoile","juillet","decembre","paris","marseille","nantes","montpellier","toulouse","piscine","tennis","foot","rugby","voiture","mercedes","porsche","citroen","renault","peugeot","volvo","clio","twingo","starwars","batman","superman","spiderman","pokemon","pikachu","naruto","dragonball","goku","vegeta","ferrari","lamborghini","bugatti","tesla","apple","samsung","huawei","xiaomi","nokia","sony","windows","linux","ubuntu","debian","centos","fedora","archlinux","gentoo","kali","redhat","firefox","chrome","safari","opera","edge","explorer","internet","web","reseau","cloud","hack","hacker","cyber","security","securite","privacy","anonymat","darknet","tor","vpn"];

let loadingStatus = false;
let searchStatus = false;

function load1() {
    document.getElementById("resultconsole").innerText = '> Chargement .';
}
function load2() {
    document.getElementById("resultconsole").innerText = '> Chargement ..';
}
function load3() {
    document.getElementById("resultconsole").innerText = '> Chargement ...';
}
function consoleLoadingWork() {
    if (searchStatus === true) {
        setTimeout(load1, 500);
        setTimeout(load2, 1000);
        setTimeout(load3, 1500);
    }
}
function consoleLoading() {
    if (loadingStatus === false && searchStatus === true) {
        setInterval(consoleLoadingWork, 2000);
        loadingStatus = true;
    }
}

var monWorker = new Worker("test.js");

function testerMdp() {
    let password = document.getElementById("passwordInput").value;
    if (password) {
    searchStatus = true;
    document.getElementById("consoleP1").innerText = "> Mot de passe renseigné"
    consoleLoading()
    monWorker.postMessage([password]);
    console.log("Message envoyé au worker");
    } else {
        document.getElementById("consoleP1").innerText = "> veuillez renseigner le mot de passe"
    }
}

monWorker.onmessage = function (e) {
    searchStatus = false;
    setTimeout(function () { document.getElementById("resultconsole").innerText = "> " + e.data; },2000)
  };

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", testerMdp);
});