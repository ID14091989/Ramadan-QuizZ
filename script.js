[
  {
    "question": "Quels sont les mérites du mois de jeûne de Ramadhan ?",
    "answer": "Le mois du jeûne de Ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
  },
  {
    "question": "En quoi consiste le jeûne ?",
    "answer": "Dans la langue arabe, as-Siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil."
  },
  {
    "question": "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
    "answer": "Le début et la fin du mois de Ramadhan sont déterminés par deux moyens : soit par l'observation du nouveau croissant de lune, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
  },
  {
    "question": "Qui a l'obligation de jeûner le mois de Ramadhan ?",
    "answer": "Doit jeûner toute personne musulmane, pubère, saine d'esprit, résidente et en capacité physique de jeûner. Les femmes en période de menstrues ou de lochies en sont exemptées jusqu'à la fin de cette période."
  },
  {
    "question": "À quel moment doit-on mettre l'intention de jeûner ?",
    "answer": "L'intention doit être formulée avant l'apparition de l'aube. Il est préférable de l'avoir au moment du Sahour. La prononcer à haute voix n'est pas nécessaire car l'intention est un acte du cœur."
  },
  {
    "question": "Qu'est-ce qui invalide le jeûne ?",
    "answer": "Le jeûne est invalidé par les rapports charnels, le fait de manger ou boire volontairement, l'éjaculation volontaire, le vomissement provoqué, la saignée (Hijama), les menstrues et les lochies."
  },
  {
    "question": "Quel est le jugement au sujet de la personne qui rompt volontairement son jeûne sans excuse valable ?",
    "answer": "Rompre son jeûne sans excuse valable est un péché capital. La personne doit se repentir et rattraper le jour manqué. Si elle a rompu volontairement tout le mois, elle ne pourra pas le rattraper et devra se repentir sincèrement."
  },
  {
    "question": "Que doit faire la personne qui n'a pas jeûné en raison d'une incapacité ou maladie passagère, ou en raison d'un voyage ?",
    "answer": "Elle doit rattraper les jours manqués en dehors du mois de Ramadhan. Elle n'a pas à nourrir des pauvres en compensation car son empêchement était temporaire."
  },
  {
    "question": "Que doit faire la personne souffrant d'une maladie chronique ou étant dans l'incapacité continue de jeûner ?",
    "answer": "Elle n'a pas à jeûner ni à rattraper les jours manqués. En compensation, elle doit nourrir un pauvre pour chaque jour non jeûné."
  },
  {
    "question": "La personne qui n'a pas jeûné en début de journée pour une cause valable doit-elle le faire si cette cause disparaît en cours de journée ?",
    "answer": "Non, elle doit attendre la fin de la journée et rattraper le jeûne plus tard. Cela concerne les voyageurs, les malades guéris ou les femmes ayant fini leurs menstrues."
  }
]

let currentQuestionIndex = 0;

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    
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

document.getElementById("next-btn").onclick = showQuestion;
showQuestion();
