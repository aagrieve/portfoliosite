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
var educationString2 = "Portland State University";
var educationString3 = "2022 - 2024";
var educationString4 = "Portland Community College";
var educationString5 = "2018 - 2022";
// COURSES STRINGS

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

  // divider
  const divider = document.createElement("p");
  divider.setAttribute("class", "divider");
  divider.style["grid-column-end"] = "span 2";

  // education section
  // MAKE THIS INTO A LIST WITH DIVIDER LINES
  const education = document.createElement("div");
  education.setAttribute("class", "para");
  education.setAttribute("class", "wide");
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
  edu2.append(eduText2);
  edu3.append(eduText3);
  edu4.append(eduText4);
  edu5.append(eduText5);
  education.append(edu1);
  education.append(edu2);
  education.append(edu3);
  education.append(edu4);
  education.append(edu5);

  // add a langauges section beneath education

  // courses section
  const courses = document.createElement("p");
  courses.setAttribute("class", "para");
  courses.setAttribute("class", "wide");
  const coursesText = document.createTextNode("courses");
  courses.append(coursesText);

  //page append
  page.append(headshot);
  page.append(bio);
  //page.append(divider);
  page.append(education);
  page.append(courses);
};
// ----------------------------------------

// WORK -----------------------------------
const workPage = () => {
  if (checkPage("work")) {
    return;
  }
  resetPage("work");

  console.log("work page");
};
// ----------------------------------------

// PROJECT --------------------------------
const projectPage = () => {
  if (checkPage("projects")) {
    return;
  }
  resetPage("projects");

  console.log("project page");
};
// ----------------------------------------

// CONTACT --------------------------------
const contactPage = () => {
  if (checkPage("contact")) {
    return;
  }
  resetPage(contact);
  console.log("contact page");
};
// ----------------------------------------

// RESET
function resetPage(name) {
  console.log(`reseting...${name}`);
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
  console.log(`checking...${name}`);
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
