const page = document.querySelector("#page");
var currPage = "";
// BIO STRINGS
var bioString =
  "Hello! My name is Aidan Grieve. I am a senior at Portland State University expecting to graduate in March 2024.";
var bioString2 =
  "I am pursuing a Bachelors of Science in Computer Science and a minor in Mathematics at the Masseh College of Engineering and Computer Science.";
var bioString3 =
  "Both in school and out I enjoy learning new skills and broadening my understanding of my various interests and hobbies. I am always eager to find ways to improve and grow as an individual.";

// EDUCATION STRINGS
var educationString = "Education";
// create link to school websites
var educationString2 = "Portland State University";
var educationString3 = "Bachelors of Science: Computer Science 2022 - 2024";
var educationString4 = "Portland Community College";
var educationString5 = "Bachelors of Science: Computer Science 2018 - 2022";

// COURSES STRINGS
var coursesList = [
  "Algorithms & Complexity",
  "Intro to Web Development",
  "Elementary Software Engineering",
  "Intro to Operating Systems",
  "Programming Methods and Software Implementations",
  "Data Structures",
  "Applied Linear Algebra",
  "Calculus I-IV",
  "Discrete Mathematics I-II",
  "Differential Equations",
];

// WORK STRINGS
// FORMAT: [COMPANY, TITLE, DESCRIPTION PARAS, ...]
var workList = [
  [
    "Scratch Meats",
    "Role: Meat Processing",
    "Participated in the entire sausage making process including: ",
    " - Cut large pieces of meat into grindable sizes and removing lingering pieces of bone",
    " - Feed meat through the grinder",
    " - Season meat using recipes of the 40 varieties of sausage made and mix manually",
    " - Regrind meat for finer pieces and further mixing",
    " - Pump meat into casings",
    " - Twirl and cut links",
    " - Package and label each pack",
  ],
  [
    "Hammy's Pizza",
    "Role: Delivery Driver, Cashier, Line Cook",
    "Participated in every role at the Pizza Shop including:",
    " - Take orders and cashier",
    " - Make pizzas and sides",
    " - Manage the oven",
    " - Box and bag delivery orders",
    " - Deliver across the greater Portland Area",
  ],
  [
    "Bristol Mountain, Powder Mills Ski Hill",
    "Role: Ski Instructor",
    "Taught people of all ages and skill levels how to ski.",
    " - Ran daily group classes for children under the age of 10",
    " - Ran private lessons on demand",
    " - Ran weekly lessons for ASD students",
    " - Assisted in mountain maintence",
  ],
];

// Projects Strings
var projectList = [
  [
    "Primes",
    "desc",
    "./images/primes.gif",
    "A gif of prime numbers being printed on a screen up to 10 million",
    "https://github.com/grievepdx/primes",
  ],
  [
    "BattleTyper",
    "desc",
    "./images/battletyper.jpg",
    "An image of BattleTyper's console menu",
    "https://github.com/grievepdx/battletyper",
  ],
];

// ABOUT ----------------------------------
const aboutPage = () => {
  if (checkPage("about")) {
    return;
  }

  resetPage("about");

  const headshot = document.createElement("img");
  headshot.setAttribute("src", "./images/headshot.jpg");
  headshot.setAttribute(
    "alt",
    `An image of Aidan Grieve. He has long curly reddish hair, round glasses, and is wearing a grey buttoned up shirt.`
  );
  headshot.setAttribute("class", "headshot");

  // bio section
  const bio = document.createElement("div");
  const bio1 = document.createElement("p");
  const bio2 = document.createElement("p");
  const bio3 = document.createElement("p");
  bio.setAttribute("class", "para");
  const bioText = document.createTextNode(bioString);
  const bioText2 = document.createTextNode(bioString2);
  const bioText3 = document.createTextNode(bioString3);
  bio1.append(bioText);
  bio2.append(bioText2);
  bio3.append(bioText3);
  bio.append(bio1);
  bio.append(bio2);
  bio.append(bio3);

  // education section
  // clean up
  const education = document.createElement("div");
  education.setAttribute("class", "para wide");
  const edu1 = document.createElement("p");
  const edu2 = document.createElement("p");
  const edu3 = document.createElement("p");
  const edu4 = document.createElement("p");
  const edu5 = document.createElement("p");
  const eduText = document.createTextNode(educationString);
  const eduText2 = document.createTextNode(educationString2);
  const eduText3 = document.createTextNode(educationString3);
  const eduText4 = document.createTextNode(educationString4);
  const eduText5 = document.createTextNode(educationString5);
  edu1.append(eduText);
  edu1.setAttribute("class", "title");
  edu2.append(eduText2);
  edu3.append(eduText3);
  edu4.append(eduText4);
  edu5.append(eduText5);
  education.append(edu1);
  education.append(edu2);
  education.append(edu3);
  education.append(edu4);
  education.append(edu5);
  education.style.width = "60%";

  // courses section
  const courses = document.createElement("div");
  const coursesTitleText = document.createTextNode("Courses Taken");

  const coursesTitle = document.createElement("p");
  coursesTitle.append(coursesTitleText);
  coursesTitle.setAttribute("class", "title");

  courses.append(coursesTitle);
  for (let i = 0; i < 10; i++) {
    let courseText = document.createTextNode(coursesList[i]);
    let currCourse = document.createElement("p");
    currCourse.append(courseText);
    courses.append(currCourse);
  }

  courses.setAttribute("class", "wide para");
  courses.style.width = "60%";

  //page append
  page.append(headshot);
  page.append(bio);
  //page.append(divider);
  page.append(education);
  page.append(courses);
};
// ----------------------------------------

// WORK -----------------------------------
function createWork(i) {
  const businessText = document.createTextNode(workList[i][0]);
  const business = document.createElement("p");
  business.append(businessText);
  business.setAttribute("class", "title");

  const titleText = document.createTextNode(workList[i][1]);
  const titleTextStrong = document.createElement("b");
  titleTextStrong.append(titleText);
  const title = document.createElement("p");
  title.append(titleTextStrong);

  const workDiv = document.createElement("div");
  workDiv.append(business);
  workDiv.append(titleText);

  for (let j = 2; j < workList[i].length; j++) {
    let jobArr = workList[i];
    const descriptionText = document.createTextNode(jobArr[j]);
    const description = document.createElement("p");
    description.append(descriptionText);
    workDiv.append(description);
  }

  workDiv.setAttribute("class", "para wide");
  return workDiv;
}

const workPage = () => {
  if (checkPage("work")) {
    return;
  }
  resetPage("work");

  const workTitleText = document.createTextNode("Work History");
  const workTitle = document.createElement("h1");
  workTitle.append(workTitleText);
  workTitle.setAttribute("class", "wide title");
  workTitle.style["font-size"] = "xx-large";
  page.append(workTitle);

  for (let i = 0; i < workList.length; i++) {
    const job = createWork(i);
    job.style["width"] = "80%";
    page.append(job);
  }
};
// ----------------------------------------

// PROJECT --------------------------------
function leaveSite(link) {
  window.location = link;
}

function createProject(title, description, imgPath, altText, link) {
  // create Elements
  const projImg = document.createElement("img");
  const projImgDiv = document.createElement("div");
  projImgDiv.style.position = "relative";
  const projBlurb = document.createElement("p");
  const projTitle = document.createElement("h2");
  projTitle.setAttribute("class", "title");
  const projDesc = document.createElement("div");
  const descNode = document.createTextNode(description);
  const titleNode = document.createTextNode(title);

  // set up Image
  projImg.setAttribute("src", imgPath);
  projImg.setAttribute("alt", altText);
  projImg.setAttribute("class", "projImg");
  projImgDiv.append(projImg);
  const hoverText = document.createElement("p");
  hoverText.setAttribute("class", "clickMe");
  hoverText.innerHTML = "Click me to view the code!";
  projImgDiv.append(hoverText);
  projImgDiv.onclick = function () {
    leaveSite(link);
  };

  // set up description
  projBlurb.append(descNode);
  projTitle.append(titleNode);
  projDesc.setAttribute("class", "para");
  projDesc.style.width = "90%";
  projDesc.append(projTitle);
  projDesc.append(projBlurb);

  // finalize results and return
  return [projImgDiv, projDesc];
}

const projectPage = () => {
  if (checkPage("projects")) {
    return;
  }
  resetPage("projects");

  for (let i = 0; i < projectList.length; i++) {
    var projectArr = projectList[i];
    var project = createProject(
      projectArr[0],
      projectArr[1],
      projectArr[2],
      projectArr[3],
      projectArr[4]
    );
    page.append(project[0]);
    page.append(project[1]);
  }
};
// ----------------------------------------

// CONTACT --------------------------------
const contactPage = () => {
  if (checkPage("contact")) {
    return;
  }
  resetPage("contact");

  const form = document.createElement("form");
  form.setAttribute("class", "form wide");
  const formHeader = document.createElement("h1");
  formHeader.setAttribute("class", "formHeader");
  const formHeaderText = document.createTextNode("Contact Form");
  formHeader.append(formHeaderText);

  // name
  const nameBox = document.createElement("input");
  nameBox.setAttribute("class", "input-box");
  nameBox.setAttribute("type", "text");
  nameBox.setAttribute("id", "name");
  nameBox.setAttribute("placeholder", "Name");

  // email
  const emailBox = document.createElement("input");
  emailBox.setAttribute("class", "input-box");
  emailBox.setAttribute("type", "email");
  emailBox.setAttribute("id", "email");
  emailBox.setAttribute("placeholder", "Email");

  // message
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("class", "label");
  messageLabel.setAttribute("for", "message");
  messageLabel.innerHTML = "Message for Aidan:";
  const messageBox = document.createElement("textarea");
  messageBox.setAttribute("class", "message-box");
  messageBox.setAttribute("type", "text");
  messageBox.setAttribute("id", "message");
  messageBox.setAttribute("placeholder", "Your message here!");
  messageBox.setAttribute("rows", "15");
  messageLabel.append(messageBox);

  // submit
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("class", "btn");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Submit");

  // reset
  const resetBtn = document.createElement("input");
  resetBtn.setAttribute("class", "btn");
  resetBtn.setAttribute("type", "reset");
  resetBtn.setAttribute("value", "Reset");

  form.append(formHeader);
  form.append(nameBox);
  form.append(emailBox);
  form.append(messageLabel);
  form.append(submitBtn);
  form.append(resetBtn);
  page.append(form);
};
// ----------------------------------------

// RESET
function resetPage(name) {
  var child = page.lastElementChild;
  while (child) {
    page.removeChild(child);
    child = page.lastElementChild;
  }
  currPage = name;
}
// ----------------------------------------

// CHECK
function checkPage(name) {
  if (currPage === name) {
    return true;
  }
  return false;
}
// ----------------------------------------

// navbar buttons
let about = document.querySelector("#about");
let work = document.querySelector("#work");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");

// add onclick listeners to each tab in navbar
about.addEventListener("click", aboutPage);
work.addEventListener("click", workPage);
projects.addEventListener("click", projectPage);
contact.addEventListener("click", contactPage);

// saves page so reload brings up page user was on
window.onbeforeunload = () => {
  window.name = currPage;
};

// loads intended page on load/reload
if (window.name === "") {
  aboutPage();
} else {
  if (window.name === "about") {
    aboutPage();
  }
  if (window.name === "work") {
    workPage();
  }
  if (window.name === "projects") {
    projectPage();
  }
  if (window.name === "contact") {
    contactPage();
  }
}
