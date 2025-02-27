const questions = [
    {
        question: "Quels sont les mérites du mois de jeûne de ramadhan ?",
        answer: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
    },
    {
        question: "En quoi consiste le jeûne ?",
        answer: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil."
    },
    {
        question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
        answer: "Le début et la fin du mois de Ramadhan est déterminé par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
    },
    {
        question: "Qui a l'obligation de jeûner le mois de Ramadhan ?",
        answer: "Les personnes qui doivent jeûner sont celles qui sont musulmanes, douées de raison, pubères, résidentes, en capacité physique de jeûner, et qui ne sont pas frappées d’un empêchement (menstruations, maladie grave, etc.)."
    },
    {
        question: "À quel moment dois-je mettre l'intention de jeûner ?",
        answer: "Tu dois mettre l'intention de jeûner au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube."
    },
    {
        question: "Qu'est-ce qui invalide le jeûne ?",
        answer: "Les choses qui invalident le jeûne sont : les rapports charnels, manger ou boire volontairement, l’éjaculation avec désir, se faire vomir volontairement, se faire pratiquer une saignée (Hijama), les saignements des menstrues et post-accouchement."
    },
    {
        question: "Quel est le jugement au sujet de la personne qui rompt volontairement son jeûne sans en avoir l'excuse ?",
        answer: "Rompre le jeûne sans excuse valable est un péché capital. Celui qui le fait doit se repentir et rattraper le jour manqué."
    },
    {
        question: "Que doit faire la personne qui n'a pas jeûné en raison d'une maladie passagère ou d'un voyage ?",
        answer: "Elle doit rattraper les jours non jeûnés après Ramadhan, sans avoir besoin de nourrir des pauvres."
    },
    {
        question: "Que doit faire la personne souffrant d'une maladie chronique l'empêchant de jeûner ?",
        answer: "Elle n'est pas tenue de jeûner ni de rattraper les jours, mais doit nourrir un pauvre par jour non jeûné."
    },
    {
        question: "Si je saigne du nez involontairement pendant mon jeûne, cela l’invalide-t-il ?",
        answer: "Non, le jeûne reste valide, car ce saignement est indépendant de la volonté du jeûneur."
    },
    {
        question: "Une piqûre contenant des éléments nutritifs invalide-t-elle le jeûne ?",
        answer: "Oui, car elle nourrit le corps comme la nourriture et la boisson."
    },
    {
        question: "Dois-je jeûner si je voyage pendant Ramadhan ?",
        answer: "Tu as le choix. Si le jeûne est trop difficile, tu peux le reporter après Ramadhan."
    },
    {
        question: "Puis-je voyager uniquement pour éviter de jeûner ?",
        answer: "Non, c’est une ruse interdite et ton jeûne reste obligatoire."
    },
    {
        question: "Le fait de commettre un péché annule-t-il le jeûne ?",
        answer: "Non, mais cela diminue sa récompense."
    },
    {
        question: "Un homme peut-il embrasser sa femme pendant Ramadhan ?",
        answer: "Oui, tant qu’il maîtrise son désir et que cela ne mène pas à un rapport intime."
    },
    {
        question: "Dois-je aussi m’abstenir d’avoir des rapports la nuit pendant Ramadhan ?",
        answer: "Non, les rapports sont permis entre le coucher et l’aube."
    },
    {
        question: "Le travail ou les examens justifient-ils la rupture du jeûne ?",
        answer: "Non, sauf en cas d’extrême nécessité."
    },
    {
        question: "Que doit-on faire au moment de la rupture du jeûne ?",
        answer: "Il faut se hâter de rompre et invoquer Allah, car c’est un moment d’exaucement."
    },
    {
        question: "La prière de Tarawih est-elle obligatoire ?",
        answer: "Non, elle est surérogatoire mais fortement recommandée."
    },
    {
        question: "Puis-je lire le Coran en tenant le Mushaf pendant la prière de Tarawih ?",
        answer: "Oui, si nécessaire, par exemple pour aider l’imam en cas d’erreur."
    },
    {
        question: "La Nuit du Destin est-elle toujours le 27e jour de Ramadhan ?",
        answer: "Non, elle peut être n’importe quelle nuit impaire des dix dernières nuits."
    },
    {
        question: "Quand doit-on donner la Zakat al-Fitr ?",
        answer: "Avant la prière de l'Aïd, idéalement le matin du jour de l'Aïd."
    },
    {
        question: "Peut-on donner la Zakat al-Fitr en argent ?",
        answer: "Non, elle doit être donnée sous forme de nourriture de base (riz, dattes, etc.)."
    },
    {
        question: "La prière de l'Aïd est-elle obligatoire ?",
        answer: "Certains savants disent qu’elle est obligatoire, d’autres qu’elle est fortement recommandée."
    },
    {
        question: "Une personne qui mange par erreur doit-elle rattraper son jeûne ?",
        answer: "Non, son jeûne reste valide."
    },
    {
        question: "Un enfant de 12 ans doit-il obligatoirement jeûner ?",
        answer: "Non, sauf s'il est pubère."
    },
    {
        question: "Puis-je me maquiller et me parfumer en journée pendant Ramadhan ?",
        answer: "Oui, tant que cela ne cause pas de tentation et que l’odeur ne se propage pas aux hommes étrangers."
    },
    {
        question: "Puis-je me rafraîchir en me baignant ou en prenant une douche ?",
        answer: "Oui, tant que tu évites d’avaler de l’eau."
    },
    {
        question: "Une prise de sang invalide-t-elle le jeûne ?",
        answer: "Non, sauf en cas de don de sang abondant, qui affaiblit le corps."
    }
];

// Fonction pour mélanger les questions
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

let currentQuestionIndex = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        let q = questions[currentQuestionIndex];
        document.getElementById("question").textContent = q.question;
        document.getElementById("answer").textContent = "";
        document.getElementById("show-answer").style.display = "block";
        document.getElementById("next-btn").style.display = "none";
    } else {
        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz terminé !</h2>
            <button id="restart-btn" onclick="restartQuiz()">Recommencer</button>
        `;
    }
}

function showAnswer() {
    document.getElementById("answer").textContent = questions[currentQuestionIndex].answer;
    document.getElementById("show-answer").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    shuffleQuestions();
    showQuestion();
}

shuffleQuestions();
showQuestion();
