const questions = [
    {
        question: "Quels sont les mérites du mois de jeûne de Ramadhan ?",
        answer: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah."
    },
    {
        question: "En quoi consiste le jeûne ?",
        answer: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil."
    },
    {
        question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?",
        answer: "Le début et la fin du mois de Ramadhan est déterminé par deux moyens : soit par l'observation du nouveau croissant de lune, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible."
    },
    {
        question: "Qui a l'obligation de jeûner le mois de Ramadhan ?",
        answer: "La personne pour qui il est obligatoire de jeûner doit être musulmane, douée de raison, pubère, résidente, en capacité physique d'effectuer le jeûne et ne pas être frappée d'un empêchement au jeûne."
    },
    {
        question: "À quel moment dois-je mettre l'intention de jeûner ?",
        answer: "L'intention doit être mise au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube. Le mieux est de la mettre au moment du Sahour."
    },
    {
        question: "Qu'est-ce qui invalide le jeûne ?",
        answer: "Avoir un rapport charnel, manger ou boire volontairement, l'éjaculation avec désir, se faire vomir volontairement, pratiquer une saignée (Hijama), les menstruations et les lochies."
    },
    {
        question: "Quel est le jugement au sujet de la personne qui rompt volontairement son jeûne sans en avoir l'excuse ?",
        answer: "C'est un péché capital. Elle doit se repentir et rattraper son jour de jeûne."
    },
    {
        question: "Que doit faire la personne qui n'a pas jeûné en raison d'une incapacité ou maladie passagère ?",
        answer: "Elle doit uniquement rattraper les jours non jeûnés en dehors du mois de Ramadhan."
    },
    {
        question: "Que doit faire la personne souffrant d'une maladie chronique ou étant dans l'incapacité continuelle de jeûner ?",
        answer: "Elle doit nourrir un pauvre par jour de jeûne non accompli."
    },
    {
        question: "Si je n’ai pas jeûné en début de journée pour une cause valable, dois-je continuer à jeûner si cette cause disparaît ?",
        answer: "Non, mais il faudra rattraper ce jour après Ramadhan."
    },
    {
        question: "Que se passe-t-il si je mange ou bois par oubli ?",
        answer: "Le jeûne reste valide, car c’est Allah qui a nourri et abreuvé le jeûneur par Sa miséricorde."
    },
    {
        question: "Un enfant de 12 ou 13 ans est-il dans l'obligation de jeûner ?",
        answer: "Non, sauf s’il est pubère, ce qui peut être déterminé par l’apparition des menstrues, l’éjaculation, la pilosité ou l’âge de 15 ans."
    },
    {
        question: "Puis-je me maquiller, me parfumer ou utiliser du siwak pendant le jeûne ?",
        answer: "Oui, mais une femme ne doit pas sortir maquillée ou parfumée en présence d'hommes étrangers."
    },
    {
        question: "Puis-je me rafraîchir ou me baigner durant le jeûne ?",
        answer: "Oui, à condition d'éviter que l'eau ne pénètre dans la gorge."
    },
    {
        question: "Une prise de sang ou un don de sang invalide-t-il le jeûne ?",
        answer: "Une prise de sang non, mais un don de sang peut être assimilé à une saignée et invalider le jeûne."
    },
    {
        question: "Si je saigne du nez involontairement, cela invalide-t-il mon jeûne ?",
        answer: "Non, car cela n'est pas intentionnel."
    },
    {
        question: "Une injection intraveineuse contenant des éléments nutritifs invalide-t-elle le jeûne ?",
        answer: "Oui, car cela nourrit le corps comme la nourriture et la boisson."
    },
    {
        question: "Est-il préférable de jeûner ou de ne pas jeûner en voyage ?",
        answer: "Cela dépend des capacités de chacun. Si c’est difficile, il est préférable de ne pas jeûner."
    },
    {
        question: "Si quelqu'un voyage juste pour ne pas jeûner, son jeûne est-il valide ?",
        answer: "Non, car ce voyage est une ruse pour éviter le jeûne."
    },
    {
        question: "Commettre des péchés annule-t-il le jeûne ?",
        answer: "Non, mais cela diminue sa récompense."
    },
    {
        question: "Embrasser son épouse invalide-t-il le jeûne ?",
        answer: "Non, sauf si cela mène à l’éjaculation."
    },
    {
        question: "Faut-il s’abstenir de rapports conjugaux aussi la nuit pendant Ramadhan ?",
        answer: "Non, il est permis d’avoir des rapports conjugaux la nuit."
    },
    {
        question: "Le travail ou les examens permettent-ils de ne pas jeûner ?",
        answer: "Non, ce ne sont pas des excuses valables."
    },
    {
        question: "Que faire au moment de la rupture du jeûne ?",
        answer: "Il faut se hâter de rompre le jeûne et invoquer Allah, car c'est un moment d'exaucement."
    },
    {
        question: "Est-il obligatoire d’assister à la prière de Tarawih ?",
        answer: "Non, mais c'est une grande récompense."
    },
    {
        question: "Peut-on tenir un Coran pendant la prière de Tarawih ?",
        answer: "Il est préférable de ne pas le faire sauf si nécessaire."
    },
    {
        question: "La nuit du destin tombe-t-elle toujours le 27 ?",
        answer: "Non, elle peut tomber dans les 10 dernières nuits impaires."
    },
    {
        question: "Quand doit-on donner la Zakat al-Fitr ?",
        answer: "Avant la prière de l’Aïd, idéalement le matin du jour du ‘Id."
    },
    {
        question: "Peut-on donner la Zakat al-Fitr en argent ?",
        answer: "Non, elle doit être donnée sous forme d’aliments."
    },
    {
        question: "La prière de l'Aïd est-elle obligatoire ?",
        answer: "Les savants divergent, mais elle est fortement recommandée."
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    document.getElementById("answer").textContent = ""; // Cache la réponse
}

function showAnswer() {
    let q = questions[currentQuestionIndex];
    document.getElementById("answer").textContent = q.answer;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

showQuestion();
