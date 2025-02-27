const questions = [
    { question: "Quels sont les mérites du mois de jeûne de Ramadhan ?", answer: "Le mois du jeûne de ramadhan est un moyen de parvenir à la crainte révérencielle d'Allah (at-taqwa) ainsi qu'à la piété. Il est également une expiation des péchés antérieurs pour la personne qui l'observe avec foi et espérance en la récompense d'Allah." },
    { question: "En quoi consiste le jeûne ?", answer: "Dans la langue arabe, as-siyâm signifie l'abstinence. Dans la législation islamique, il s'agit de s'abstenir des choses qui font rompre le jeûne avec la présence de l'intention, et ce, depuis l'apparition de l'aube jusqu'au coucher du soleil. Le jeûne du mois de Ramadhan est le quatrième pilier de l'islam." },
    { question: "Par quels moyens sont déterminés le début et la fin du mois de Ramadhan ?", answer: "Le début et la fin du mois de Ramadhan sont déterminés par deux moyens : soit par l'observation du nouveau croissant de lune marquant le début du nouveau mois lunaire, soit par le fait de compléter trente jours du mois si l'observation du nouveau croissant est impossible." },
    { question: "Qui a l'obligation de jeûner le mois de Ramadhan ?", answer: "La personne pour qui il est obligatoire de jeûner le mois de Ramadhan doit réunir les conditions suivantes : être musulmane, être douée de raison, être pubère, être résident, être en capacité physique d'effectuer le jeûne et ne pas être frappé d'un empêchement au jeûne." },
    { question: "À quel moment dois-je mettre l'intention de jeûner ?", answer: "Tu dois mettre l'intention de jeûner au cours de la nuit précédant la journée de jeûne, avant l'apparition de l'aube. Le mieux est de mettre l'intention au moment du Sahour, le repas pris avant l'aube, et nul besoin de la prononcer car l'intention est un acte du cœur." },
    { question: "Qu'est-ce qui invalide le jeûne ?", answer: "Les choses qui invalident le jeûne sont : avoir un rapport charnel, manger ou boire volontairement et consciemment, l'éjaculation de sperme avec désir et volontairement, se faire vomir volontairement, se faire pratiquer une saignée (Hijama), les saignements des menstrues et les saignements post-accouchement (lochies)." },
    { question: "Que doit faire la personne qui rompt volontairement son jeûne sans excuse valable ?", answer: "Rompre le jeûne durant la journée de Ramadhan sans excuse valable représente un péché capital. Il lui incombe de se repentir à Allah et de rattraper ce jour de jeûne manqué." },
    { question: "Que doit faire une personne qui n’a pas jeûné pour raison de maladie passagère ou voyage ?", answer: "Ces personnes doivent uniquement rattraper les jours non jeûnés et n'ont pas à nourrir de pauvres en compensation, car leur maladie ou leur empêchement n'est que passager." },
    { question: "Que doit faire la personne souffrant d'une maladie chronique ou incapable de jeûner en permanence ?", answer: "Ces personnes n'ont pas à jeûner ni à rattraper leurs jours manqués. Elles doivent en compensation nourrir un pauvre par jour de jeûne manqué." },
    { question: "Est-ce que manger ou boire par oubli invalide le jeûne ?", answer: "Non, si une personne mange ou boit par oubli, son jeûne reste valide. C'est Allah qui l'a nourri et abreuvé." },
    { question: "Si, involontairement, je saigne du nez, cela invalide-t-il mon jeûne ?", answer: "Non, l'écoulement de sang indépendamment de la volonté du jeûneur ne nuit en rien à la validité du jeûne." },
    { question: "Les injections nutritives invalident-elles le jeûne ?", answer: "Oui, car elles apportent un apport nutritif au corps, semblable à la nourriture et la boisson." },
    { question: "Un voyageur doit-il obligatoirement rompre son jeûne ?", answer: "Non, s'il n'éprouve pas de difficulté à jeûner, il peut jeûner. Mais s'il ressent une pénibilité, il est préférable qu'il rompt son jeûne." },
    { question: "Voyager juste pour éviter le jeûne est-il permis ?", answer: "Non, c'est une tromperie et ce voyage devient illicite." },
    { question: "Les péchés diminuent-ils la valeur du jeûne ?", answer: "Oui, bien qu'ils ne l'annulent pas, ils réduisent sa récompense." },
    { question: "Embrasser son épouse invalide-t-il le jeûne ?", answer: "Non, sauf si cela mène à l'éjaculation ou à un rapport sexuel." },
    { question: "L'abstinence sexuelle est-elle requise aussi bien le jour que la nuit ?", answer: "Non, les rapports sont permis la nuit, mais interdits en journée." },
    { question: "Travailler ou passer un examen est-il une excuse pour rompre le jeûne ?", answer: "Non, ce ne sont pas des excuses légitimes." },
    { question: "Que doit-on faire au moment de la rupture du jeûne ?", answer: "Il est recommandé de hâter la rupture du jeûne et d’invoquer Allah." },
    { question: "La prière de Tarawih est-elle obligatoire ?", answer: "Non, elle est recommandée mais pas obligatoire." },
    { question: "Peut-on tenir un Coran pendant Tarawih ?", answer: "Ce n'est pas recommandé, sauf si l'imam a besoin d'aide pour la récitation." },
    { question: "La Nuit du Destin tombe-t-elle forcément le 27 ?", answer: "Non, elle peut tomber dans n'importe quelle nuit impaire des dix dernières nuits." },
    { question: "Quand doit-on donner la Zakat al-Fitr ?", answer: "Avant la prière de l’Aïd, mais pas après." },
    { question: "Peut-on donner la Zakat al-Fitr en argent ?", answer: "Non, elle doit être donnée en nourriture." },
    { question: "La prière de l’Aïd est-elle obligatoire ?", answer: "Les savants ont divergé : certains la considèrent comme obligatoire, d'autres comme fortement recommandée." },
    { question: "Se baigner en journée de jeûne est-il permis ?", answer: "Oui, tant qu’on évite d’avaler de l’eau." },
    { question: "Faire une prise de sang invalide-t-il le jeûne ?", answer: "Non, mais donner une grande quantité de sang est déconseillé." },
    { question: "Peut-on utiliser du siwak, du parfum ou du khôl en jeûne ?", answer: "Oui, cela n’invalide pas le jeûne." },
    { question: "Le jeûne a-t-il des bienfaits spirituels et physiques ?", answer: "Oui, il purifie l'âme et le corps, et apporte des bienfaits spirituels et sanitaires." }
];

// Mélanger les questions
questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;

function showQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    document.getElementById("answer").textContent = "";
}

function showAnswer() {
    document.getElementById("answer").textContent = questions[currentQuestionIndex].answer;
}

document.getElementById("next-btn").onclick = () => {
    if (currentQuestionIndex < questions.length - 1) currentQuestionIndex++;
    showQuestion();
};

document.getElementById("prev-btn").onclick = () => {
    if (currentQuestionIndex > 0) currentQuestionIndex--;
    showQuestion();
};

document.getElementById("show-answer-btn").onclick = showAnswer;

showQuestion();
