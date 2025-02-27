const questions = [
    {
        question: "Quels sont les mérites du mois de jeûne de Ramadhan ?",
        answers: [
            "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
        ],
        correct: 0
    },
    {
        question: "En quoi consiste le jeûne ?",
        answers: [
            "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam."
        ],
        correct: 0
    },
    {
        question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
        answers: [
            "Le début et la fin du mois de Ramadhan est déterminé par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
        ],
        correct: 0
    },
    {
        question: "Qui a l'obligation de jeûner le mois de Ramadhan ?",
        answers: [
            "La personne pour qui il est obligatoire de jeûner le mois de Ramadhan doit réunir les conditions suivantes : être musulmane, être douée de raison, être pubère, être résident, être en capacité physique d'effectuer le jeûne et ne pas être frappé d'un empêchement au jeûne."
        ],
        correct: 0
    },
    {
        question: "À quel moment dois-je mettre l'intention de jeûner ?",
        answers: [
            "Tu dois mettre l'intention de jeûner au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube. Le mieux est de mettre l'intention au moment du Sahour, le repas pris avant l'aube, et nul besoin de la prononcer car l'intention est un acte du cœur."
        ],
        correct: 0
    },
    {
        question: "Qu'est-ce qui invalide le jeûne ?",
        answers: [
            "Avoir un rapport charnel, manger ou boire volontairement et consciemment, l'éjaculation de sperme avec désir et volontairement, se faire vomir volontairement, se faire pratiquer une saignée (Hijama), les saignements des menstrues et les saignements post accouchement (lochies)."
        ],
        correct: 0
    },
    {
        question: "Quel est le jugement au sujet de la personne qui rompt volontairement son jeûne sans en avoir l'excuse et que lui incombe-t-il de faire ?",
        answers: [
            "Rompre le jeûne durant la journée de Ramadhan sans excuse valable représente un péché capital. Il lui incombe de se repentir à Allah, de rattraper ce jour de jeûne manqué."
        ],
        correct: 0
    },
    {
        question: "Que doit faire la personne qui mange ou boit par ignorance, erreur, oubli et involontairement ?",
        answers: [
            "Elle doit continuer à jeûner et sa journée de jeûne demeure valide car elle ne s'est pas nourrie ou abreuvée volontairement mais l'a fait par oubli sans avoir l'intention de rompre son jeûne ou bien par erreur."
        ],
        correct: 0
    },
    {
        question: "Mon fils ou ma fille de douze ou treize ans, est-il/elle dans l'obligation de jeûner ?",
        answers: [
            "Si l'un des signes de la puberté se manifeste (15 ans, pilosité pubienne, éjaculation ou menstruations), alors oui, il/elle est dans l'obligation de jeûner."
        ],
        correct: 0
    },
    {
        question: "Ai-je le droit de me maquiller, de me parfumer, de mettre du k'hol dans mes yeux, d'utiliser le siwak durant la journée de Ramadhan ?",
        answers: [
            "En l'absence de preuves textuelles au sujet de ces choses-ci, rien n'interdit de les utiliser durant la journée de Ramadhan, si ce n'est qu'il est interdit à la femme de se montrer maquillée devant les hommes étrangers et de sortir parfumée de chez elle."
        ],
        correct: 0
    },
    {
        question: "Ai-je le droit de me rafraîchir ou de me baigner durant la journée de Ramadhan ?",
        answers: [
            "Il est tout à fait permis de se rafraîchir ou de se baigner durant les journées de Ramadhan en évitant bien évidemment de faire pénétrer de l'eau dans sa gorge."
        ],
        correct: 0
    },
    {
        question: "Puis-je me faire faire une prise de sang ou faire un don de sang durant le jeûne ?",
        answers: [
            "Il n'y a pas de mal à se faire faire une prise de sang. Pour le don de sang, il est préférable de l'éviter sauf en cas de nécessité impérieuse."
        ],
        correct: 0
    },
    {
        question: "Que doit faire la personne souffrant d'une maladie chronique ou étant dans l'incapacité continuelle de jeûner ?",
        answers: [
            "Ces catégories de personnes n'ont pas à jeûner en raison de leur maladie chronique ou d'une incapacité totale et continuelle. Elles ne sont pas concernées non plus par le rattrapage des jours manqués. Elles doivent en compensation nourrir un pauvre par nombre de jours du mois."
        ],
        correct: 0
    },
    {
        question: "La personne qui n'a pas jeûné en début de journée pour une cause valable islamiquement, doit-elle le faire si au cours de la journée, cette cause n'a plus de raison d'être ?",
        answers: [
            "Non, car la raison pour laquelle cette personne n'a pas jeûné en début de journée était légiférée. Ces personnes n'ont pas à jeûner le reste de la journée après que la cause de leur rupture de jeûne ait disparu, mais elles devront rattraper ce jour en dehors du mois de Ramadhan."
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";  // Efface les anciennes réponses
    
    q.answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        choicesDiv.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answers[questions[currentQuestionIndex].correct]) {
        alert("Bonne réponse !");
    } else {
        alert("Mauvaise réponse !");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz terminé !");
    }
}

// Lancer la première question au chargement
showQuestion();
