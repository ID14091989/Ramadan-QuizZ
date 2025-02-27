const questions = [
    { question: "Quels sont les mérites du mois de jeûne de Ramadhan ?", answer: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah." },
    { question: "En quoi consiste le jeûne ?", answer: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam." },
    { question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?", answer: "Le début et la fin du mois de Ramadhan sont déterminés par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible." },
    { question: "Qui a l'obligation de jeûner le mois de Ramadhan ?", answer: "La personne pour qui il est obligatoire de jeûner doit être musulmane, douée de raison, pubère, résidente et en capacité physique d'effectuer le jeûne." },
    { question: "À quel moment dois-je mettre l'intention de jeûner ?", answer: "Tu dois mettre l'intention de jeûner au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube. Il n'est pas nécessaire de la prononcer." },
    { question: "Qu'est-ce qui invalide le jeûne ?", answer: "Les rapports charnels, manger ou boire volontairement, l'éjaculation avec désir, se faire vomir volontairement, la saignée (Hijama), les menstrues et les lochies." },
    { question: "Que doit faire la personne qui rompt volontairement son jeûne sans excuse valable ?", answer: "Elle doit se repentir et rattraper ce jour de jeûne manqué." },
    { question: "Que doit faire une personne qui n’a pas jeûné pour raison de maladie passagère ou voyage ?", answer: "Elle doit rattraper les jours manqués après Ramadhan." },
    { question: "Que doit faire la personne souffrant d'une maladie chronique ou incapable de jeûner en permanence ?", answer: "Elle doit nourrir un pauvre par jour de jeûne manqué en compensation." },
    { question: "Est-ce que manger ou boire par oubli invalide le jeûne ?", answer: "Non, car c’est Allah qui l’a nourri et abreuvé." },
    { question: "Si, involontairement, je saigne du nez, cela invalide-t-il mon jeûne ?", answer: "Non, un saignement involontaire n'annule pas le jeûne." },
    { question: "Les injections nutritives invalident-elles le jeûne ?", answer: "Oui, car elles sont assimilées à la nourriture et la boisson." },
    { question: "Un voyageur doit-il obligatoirement rompre son jeûne ?", answer: "Non, il peut choisir de jeûner ou de reporter." },
    { question: "Voyager juste pour éviter le jeûne est-il permis ?", answer: "Non, c'est une tromperie et cela est interdit." },
    { question: "Les péchés diminuent-ils la valeur du jeûne ?", answer: "Oui, ils réduisent la récompense du jeûne, même s’ils ne l’annulent pas." },
    { question: "Embrasser son épouse invalide-t-il le jeûne ?", answer: "Non, sauf si cela mène à l’éjaculation ou à un rapport sexuel." },
    { question: "L'abstinence sexuelle est-elle requise aussi bien le jour que la nuit ?", answer: "Non, les rapports sont permis la nuit, mais interdits en journée." },
    { question: "Travailler ou passer un examen est-il une excuse pour rompre le jeûne ?", answer: "Non, cela ne constitue pas une excuse valable." },
    { question: "Que doit-on faire au moment de la rupture du jeûne ?", answer: "Hâter la rupture du jeûne et invoquer Allah." },
    { question: "La prière de Tarawih est-elle obligatoire ?", answer: "Non, elle est recommandée mais pas obligatoire." },
    { question: "Peut-on tenir un Coran pendant Tarawih ?", answer: "Ce n’est pas recommandé, sauf si l’imam en a besoin." },
    { question: "La Nuit du Destin tombe-t-elle forcément le 27 ?", answer: "Non, elle peut tomber dans n'importe quelle nuit impaire des dix dernières nuits." },
    { question: "Quand doit-on donner la Zakat al-Fitr ?", answer: "Avant la prière de l’Aïd, mais pas après." },
    { question: "Peut-on donner la Zakat al-Fitr en argent ?", answer: "Non, elle doit être donnée en nourriture." },
    { question: "La prière de l’Aïd est-elle obligatoire ?", answer: "Les savants divergent : certains la considèrent obligatoire, d’autres fortement recommandée." },
    { question: "Se baigner en journée de jeûne est-il permis ?", answer: "Oui, tant qu’on évite d’avaler de l’eau." },
    { question: "Faire une prise de sang invalide-t-il le jeûne ?", answer: "Non, mais donner une grande quantité de sang est déconseillé." },
    { question: "Peut-on utiliser du siwak, du parfum ou du khôl en jeûne ?", answer: "Oui, cela n’invalide pas le jeûne." },
    { question: "Le jeûne a-t-il des bienfaits spirituels et physiques ?", answer: "Oui, il purifie l'âme et le corps et a des bienfaits sanitaires." }
];

// Mélanger les questions
questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;

// ✅ Mise à jour de la barre de progression
function updateProgressBar() {
    let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// ✅ Affichage de la question
function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    document.getElementById("answer").textContent = "Cliquez sur 'Afficher la réponse' pour voir la réponse.";
    updateProgressBar();
}

// ✅ Affichage de la réponse
function showAnswer() {
    document.getElementById("answer").textContent = questions[currentQuestionIndex].answer;
}

// ✅ Gestion des boutons
document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
};

document.getElementById("show-answer-btn").onclick = showAnswer;

// ✅ Afficher la première question au chargement
showQuestion();
