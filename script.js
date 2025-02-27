const questions = [
    { question: "Quels sont les mérites du mois de jeûne de Ramadhan ?", answer: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah." },
    { question: "En quoi consiste le jeûne ?", answer: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam." },
    { question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?", answer: "Le début et la fin du mois de Ramadhan sont déterminés par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible." },
    { question: "Qui a l'obligation de jeûner le mois de Ramadhan ?", answer: "La personne pour qui il est obligatoire de jeûner doit être musulmane, douée de raison, pubère, résidente et en capacité physique d'effectuer le jeûne, ne pas être frappé d'un empêchement au jeûne cette catégorie ne concerne que les femmes." },
    { question: "À quel moment dois-je mettre l'intention de jeûner ?", answer: "Tu dois mettre l'intention de jeûner au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube. et nul besoin de la prononcer car l'intentionest un acte du coeur la prononcer est une innovation." },
    { question: "Qu'est-ce qui invalide le jeûne ?", answer: "Les rapports charnels, manger ou boire volontairement et consciemment, l'éjaculation avec désir et volontairement, se faire vomir volontairement, la saignée (Hijama), les menstrues et les lochies." },
    { question: "Quel est le jugement au sujet de la personne qui rompt volontairement son jeûne sans en avoir l'excuse et que lui incombe-t-il de faire ?", answer: "Rompre le jeûne durant la journée de Ramadhan sans excuse valable représente un péché capital il lui incombe se repentir à Allah et rattraper ce jour de jeûne manqué." },
    { question: "Que doit faire une personne qui n’a pas jeûné en raison d'une incapacité ou maladie passagère ou en raison d'un empêchement passager ou d'un voyage ?", answer: "Ces catégories de personnes sont excusées de ne pas avoir jeûné ou bien rentrent dans le cadre d'une permission de ne pas jeûner comme le cas du voyageur. Pour ces catégories de personnes elles doivent uniquement rattraper les jours non jeûnés et n'ont pas à nourrir les pauvres en compensation." },
    { question: "Que doit faire la personne souffrant d'une maladie chronique ou étant dans l'incapacité continuelle de jeûner ?", answer: "Ces catégories de personnes n'ont pas à jeûner en raison de leur maladie chronique ou d'une incapacité totale et continuelle. Elles ne sont pas concernées non plus par le rattrapage des manqués. Elles doivent en compensation nourrir un pauvre par nombre de jours du mois. Si le mois de Ramadhan totalise 29 jours alors 29 pauvres. si c'est 30 jours alors 30 pauvres." },
    { question: "Que doit faire la personne qui mange ou qui boit par ignorance, erreur, oubli et involontairement ?", answer: "Elle doit continuer à jeûner et sa journée de jeûne demeure valide car elle ne s'est pas nourrie ou abreuvée volontairement mais l'a fait par oubli sans avoir l'intention de rompre son jeûne ou bien par erreur." },
    { question: "Si, involontairement, indépendemment de ma volonté, je viens à saigner du nez durant une journée de jeûne cela l'invalide-t-il ?", answer: "Non, l'écoulement de sang ne nuit en rien la validité du jeûne c'est-à-dire indépendamment de la volonté du jeûneur. s'il se cogne le nez et que celui ci saigne même abondamment, son jeûne demeure valide et il n'a pas à rattraper ce jour là." },
    { question: "Si l'on me pratique une piqûre intraveineuse contenant des éléments nutritifs ceci invalide-t-il mon jeûne ?", answer: "Oui, ceci invalide le jeûne car ces éléments nutritifs sont assimilés dans leur jugement à la nourriture et la boisson. Ceci invalide donc le jeûne et la personne devra rattraper ce jour." },
    { question: "Je suis amené à effectuer un voyage durant le mois de Ramadhan, qu'est-il meilleur de faire, jeûner ou rompre durant cette période ?", answer: "Il est meilleur de jeûner pour celui qui n'éprouve aucune difficulté à le faire, et il est meilleur de rompre pour celui qui rencontre une certaine pénibilité à jeûner alors qu'il voyage." },
    { question: "Qu'en est-il de la personne qui voyage dans l'unique but de pouvoir se servir de la permission de ne pas jeûner ?", answer: "Il n'est pas permis à la personne de se chercher des excuses ou élaborer volontairement des stratagèmes lui permettant de se soustraire à cette obligation. Celui donc qui voyage dans l'unique but de pouvoir rompre son jeûne, alors son voyage est illicite et rompre son jeûne dans cette circonstance l'est tout autant. Il lui est obligatoire de se repentir de rentrer de son voyage et de jeûner, même si il ne rentre pas de voyage." },
    { question: "Est-ce que le fait que je commette des pêchés durant la journée de Ramadhan invalide mon jeûne ?", answer: "Non, à partir du moment où ces actes ne font pas partie de ceux qui invalident le jeûne. Ceci étant dit, le fait de commettre des pêchés pendant Ramadhan diminue la récompense du jeûneur." },
    { question: "J'entends souvent dire que si l'homme embrasse sa femme durant la journée de Ramadhan, ceci invalide son jeûne, est-ce vrai ?", answer: "Embrasser sa femme durant la journée de Ramadhan n'invalide pas le jeûne." },
    { question: "Des personnes me disent que l'abstinence sexuelle doit s'observer aussi bien le jour que la nuit pendant le mois de Ramadhan, est-ce vrai ?", answer: "Ceci est faux, s'abstenir de manger, boire et avoir des rapports charnels avec son épouse ne doit s'observer que durant la journée du jeûne, qui est le laps de temps s'écoulant depuis l'apparition de l'aube jusqu'au coucher du soleil. " },
    { question: "Est-ce que le fait que je travaille ou passe des examens sont des excuses valables pour rompre le jeûne ?", answer: "Non, étudier, passer des examens ou le travail ne sont pas des excuses valables pour rompre son jeûne." },
    { question: "Que convient-il faire au moment de la rupture du jeûne ?", answer: "Il convient de hâter la rupture du jeûne lorsque l'appel à la prière retentit et également invoquer Allah car c'est un moment d'exaucement." },
    { question: "Dois-je obligatoirement assister à la prière de Tarawih ?", answer: "Il n'est pas obligatoire à la personne d'assister à la prière Tarawih, car c'est une prière surérogatoire." },
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
