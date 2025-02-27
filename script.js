const questions = [
    {
        question: "Quels sont les mérites du mois de jeûne de Ramadhan ?",
        answers: [
            "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs."
        ],
        correct: 0
    },
    {
        question: "En quoi consiste le jeûne ?",
        answers: [
            "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention."
        ],
        correct: 0
    },
    {
        question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
        answers: [
            "Le début et la fin du mois de Ramadhan sont déterminés soit par l'observation du croissant lunaire, soit par l'achèvement de 30 jours du mois précédent."
        ],
        correct: 0
    },
    {
        question: "Qui a l'obligation de jeûner le mois de Ramadhan ?",
        answers: [
            "Toute personne musulmane, pubère, saine d'esprit, résidente et en capacité physique de jeûner."
        ],
        correct: 0
    },
    {
        question: "À quel moment dois-je mettre l'intention de jeûner ?",
        answers: [
            "L'intention doit être formulée avant l'aube, idéalement lors du Sahour, sans nécessité de la prononcer à haute voix."
        ],
        correct: 0
    },
    {
        question: "Qu'est-ce qui invalide le jeûne ?",
        answers: [
            "Manger, boire, avoir des relations intimes, se faire vomir volontairement, la saignée (Hijama), et les menstrues ou lochies."
        ],
        correct: 0
    },
    {
        question: "Quel est le jugement pour une personne qui rompt son jeûne sans excuse ?",
        answers: [
            "Rompre le jeûne sans excuse est un péché majeur. La personne doit se repentir et rattraper ce jour de jeûne."
        ],
        correct: 0
    },
    {
        question: "Que doit faire celui qui mange ou boit par oubli pendant le jeûne ?",
        answers: [
            "Il doit continuer à jeûner, car c'est Allah qui l'a nourri et abreuvé, selon le hadith authentique."
        ],
        correct: 0
    },
    {
        question: "Un enfant de 12 ou 13 ans doit-il jeûner ?",
        answers: [
            "Si l'enfant est pubère (menstruations, éjaculation, 15 ans révolus), il est obligé de jeûner."
        ],
        correct: 0
    },
    {
        question: "Puis-je me maquiller, me parfumer ou utiliser du siwak en jeûnant ?",
        answers: [
            "Oui, tant que cela ne mène pas à l'inhalation d'éléments invalidant le jeûne."
        ],
        correct: 0
    },
    {
        question: "Puis-je me rafraîchir ou me baigner durant le jeûne ?",
        answers: [
            "Oui, il est permis de se baigner ou de se rafraîchir en évitant d'avaler de l'eau."
        ],
        correct: 0
    },
    {
        question: "Puis-je faire une prise de sang ou un don de sang en jeûnant ?",
        answers: [
            "Une prise de sang est permise. Un don de sang est déconseillé sauf nécessité, car assimilé à la saignée (Hijama)."
        ],
        correct: 0
    },
    {
        question: "Que doit faire une personne malade qui ne peut pas jeûner ?",
        answers: [
            "Si la maladie est temporaire, elle doit rattraper le jeûne. Si elle est chronique, elle doit nourrir un pauvre par jour non jeûné."
        ],
        correct: 0
    },
    {
        question: "Dois-je rattraper un jeûne si j'étais malade le matin et guéri l'après-midi ?",
        answers: [
            "Non, si la cause de rupture du jeûne était valable le matin, la personne ne doit pas jeûner le reste de la journée, mais elle devra rattraper ce jour."
        ],
        correct: 0
    }
];

let currentQuestionIndex = -1;

document.getElementById("show-question-btn").onclick = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("choices").style.display = "block";
        document.getElementById("next-btn").style.display = "none";
    } else {
        alert("Quiz terminé !");
        document.getElementById("show-question-btn").style.display = "none";
    }
};

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;

    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    let btn = document.createElement("button");
    btn.textContent = "Afficher la réponse";
    btn.classList.add("choice-btn");
    btn.onclick = function () {
        btn.textContent = q.answers[0];
        btn.style.backgroundColor = "#28a745";
        btn.style.color = "white";
        document.getElementById("next-btn").style.display = "block";
    };
    choicesDiv.appendChild(btn);
}

document.getElementById("next-btn").onclick = function () {
    document.getElementById("show-question-btn").click();
};
