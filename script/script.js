// https://dummyjson.com/
// https://codebeautify.org/jsonviewer - причисать json

// https://prog-center.pro/ сайт Нелли

// https://dummyjson.com/users - таблица

// вывести Имя, фамилию, позраст, пол.
// В Зависимости от пола цвет заднего пола

const userForm = document.querySelector(".user_form");
const usersContainer = document.querySelector(".users_container");

const request = (num) => {
  fetch(`https://dummyjson.com/users/${num}`)
    .then((response) => response.json())
    // .then(json => console.log(json));
    // .then((json) => render(json.users));
    .then((json) => render(json));
};

// const render = (json) => {
const render = ({
  id,
  firstName,
  lastName,
  maidenName,
  age,
  gender,
  email,
  phone,
  username,
  password,
  birthDate,
  image,
}) => {
  usersContainer.innerText = ""; // чистить контейнер
  const userCard = document.createElement("div");
  const idElem = document.createElement("p");
  const nameElem = document.createElement("p");
  const maidenNameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const genderElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const phoneElem = document.createElement("a");
  const usernameElem = document.createElement("p");
  const passwordElem = document.createElement("p");
  const birthDateElem = document.createElement("p");
  const imageElem = document.createElement("img");

  userCard.append(
    idElem,
    nameElem,
    maidenNameElem,
    ageElem,
    genderElem,
    emailElem,
    phoneElem,
    usernameElem,
    passwordElem,
    birthDateElem,
    imageElem
  );
  usersContainer.append(userCard);

  idElem.innerText = `id: ${id}`;

  nameElem.innerText = `Name: ${firstName} ${lastName}`;
  maidenNameElem.innerText = `Maiden Name: ${maidenName}`;
  ageElem.innerText = `Age: ${age}`;
  genderElem.innerText = `Gender: ${gender}`;

  emailElem.innerText = `${email}`;
  emailElem.href = `mailto:${email}`;
  emailElem.style.margin = "10px";

  phoneElem.innerText = `${phone}`;
  phoneElem.href = `${phone}`;

  usernameElem.innerText = `${username}`;
  usernameElem.classList.add("usernameElem");

  passwordElem.innerText = `Password: ${password}`;

  birthDateElem.innerText = `Birthdate: ${birthDate}`;

  imageElem.src = image;
  imageElem.alt = image;
  imageElem.style.height = "150px";
  imageElem.style.width = "150px";
  imageElem.classList.add("img");

  const Cardbackground = gender === "male" ? "lightgreen" : "lightpink";
  userCard.style.backgroundColor = Cardbackground;
  userCard.classList.add("user_card");
};

// request(1);
// request(5);
// request(6);

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id_number.value;
  request(id);
  event.target.id_number.value = ""; // очистить input
});
