// start section
let start = document.querySelector("#start");

// guide  section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continuebtn = document.querySelector("#continue");

//quiz  section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

// question section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//  multiple choices  of  Queries
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and  next button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

// Result  Section
let points = document.querySelector("#points");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#playAgain");
let result = document.querySelector("#result");
// get All h4  from quiz  Section (MCQS)

let choice_que = document.querySelectorAll(".choice_que");

let headin = document.querySelector(".heading");

let index = 0;
let timer = 0;
let interval = 0;

// total points

let correct = 0;

// store  answer value
let UserAns = undefined;

// start button
start.addEventListener("click", function () {
  start.style.display = "none";
  guide.style.display = "block";
});

// exit button
exit.addEventListener("click", function () {
  start.style.display = "block";
  guide.style.display = "none";
});

let countDown = () => {
  if (timer === 20) {
    clearInterval(interval);
    next_question.click();
  } else {
    timer++;
    time.innerHTML = timer;
  }
};

//setInterval(countDown ,1000);

let qna = [
  {
    question: "What Is C ? ",
    1: "Programing Language",
    2: "Markup Lnaguage",
    3: "Arbic Language",
    4: "Hindi Lnaguage",
    ans: 1,
  },

  {
    question: "C Developed By ? ",
    1: "Jhone Don",
    2: "Kyle Mayres",
    3: "Dennis Ritchie",
    4: "Henric Nicholas ",
    ans: 3,
  },

  {
    question: "who's king was the most powerfull of mughal empire   ? ",
    1: "Jahiruddin Muhamamd Babar",
    2: "Jalaluddin Muhammad Akbar",
    3: "Nuruddin Beig Muhammad  Salim",
    4: "MuḥialDīn Muḥammad Aurangzeb",
    ans: 2,
  },

  {
    question: "India's  First Ladies King ? ",
    1: "Rani Chennamma",
    2: "Sucheta Kriplani",
    3: "Indra Gandhi ",
    4: "Raziya Sultana",
    ans: 4,
  },

  {
    question: "Pirates of Carabien Writer Name  ? ",
    1: "Ted Elliott and Terry Rossio",
    2: "Kyle Mayres",
    3: "Dennis Ritchie",
    4: "Henric Nicholas ",
    ans: 1,
  },
];

//continue   to next questiuon
function loadData() {
  questionNo.innerHTML = index + 1 + ". ";
  questionText.innerHTML = qna[index].question;
  option1.innerHTML = qna[index][1];
  option2.innerHTML = qna[index][2];
  option3.innerHTML = qna[index][3];
  option4.innerHTML = qna[index][4];

  timer = 0;
}

loadData();

continuebtn.addEventListener("click", function () {
  quiz.style.display = "block";
  guide.style.display = "none";
  interval = setInterval(countDown, 1000);
  loadData();
  // remove  All active Clases When Conyinue  Button Will click

  choice_que.forEach((removeActive) => {
    removeActive.classList.remove("active");
  });
  total_correct.innerHTML = ` ${(correct = 0)} out  of ${
    qna.length
  } Questions `;
});

choice_que.forEach((choices, choiceNo) => {
  choices.addEventListener("click", () => {
    choices.classList.add("active");
    // check naswer
    console.log("qnaanswer =  " + qna[index].ans);
    console.log("choice  number   =  " + choiceNo);
    if (choiceNo + 1 === qna[index].ans) {
      correct++;
    } else {
      correct += 0;
    }
    //stop counter
    clearInterval(interval);

    // disable ALL  option user  selct an option
    for (let i = 0; i <= 3; i++) {
      choice_que[i].classList.add("disabled");
    }
  });
});

// next will load
next_question.addEventListener("click", function () {
  // if length is less than qna length
  if (index !== qna.length - 1) {
    index++;

    choice_que.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });

    // quuestion
    loadData();

    // result
    total_correct.style.display = "block";
    console.log("correct = " + correct);
    total_correct.innerHTML = `${correct} out  of ${qna.length} Questions `;

    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  } else {
    index = 0;

    // result section

    clearInterval(interval);
    quiz.style.display = "none";
    headin.style.display = "none";
    points.innerHTML = `You  Got ${correct} out  of ${qna.length}  `;
    result.style.display = "block";
  }
  for (let i = 0; i <= 3; i++) {
    choice_que[i].classList.remove("disabled");
  }
});

let heading = document.querySelector(".heading");
quit.addEventListener("click", function () {
  result.style.display = "none";
  headin.style.display = "block";
  heading.innerHTML = `
      Bsdk Gand  Mar Lunga Agr next Time se Quit  kiya  to 
  `;
});

startAgain.addEventListener("click", function () {
  result.style.display = "none";
  start.style.display = "block";
  headin.style.display = "block";
});
