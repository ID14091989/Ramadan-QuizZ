const questions = [
    {
        question: "Quels sont les mérites du mois de jeûne de Ramadhan ?",
        answers: [
            "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
        ],
        correct: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
    },
    {
        question: "En quoi consiste le jeûne ?",
        answers: [
            "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam."
        ],
        correct: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam."
    },
    {
        question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
        answers: [
            "Le début et la fin du mois de Ramadhan est déterminé par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
        ],
        correct: "Le début et la fin du mois de Ramadhan est déterminé par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
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
    if (answer === questions[currentQuestionIndex].correct) {
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
