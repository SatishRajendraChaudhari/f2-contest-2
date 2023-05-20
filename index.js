//Given array
const userList = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// fetch all the elements ...
const filterBtn = document.querySelector("#filter-btn");
const professionSelect = document.querySelector("#profession");
const userContainer = document.querySelector(".user-container");
const addBtn = document.querySelector("#addUser");
const userForm = document.querySelector("#user-form");

function filterUser() {
  // if user not selected any profession...
  if (!professionSelect.value) {
    alert("Please select a valid profession");
    return;
  }

  // filter the user's based on selected profession... 
  const users = userList.filter(user => user.profession === professionSelect.value);

  // print the user's
  displayUser(users);

}

function displayUser(user) {
  let html = "";
  let index = 1;

  user.forEach(element => {
    html += `
      <div class="user-card">
        <p>ID: ${index}.</p>
        <p>Name: <b>${element.name}</b></p>
        <p>Profeesion: <b>${element.profession}</b></p>
        <p>Age: <b>${element.age}</b></p>
      </div>  
    `;

    index++;

    userContainer.innerHTML = html;
  });
}

function addNewUser(e){
  e.preventDefault();

  const newUser = {
    name: e.target.name.value,
    profession: e.target.profession.value,
    age: e.target.age.value,
  };

  userList.push(newUser);
}

filterBtn.addEventListener("click", filterUser);
userForm.addEventListener("submit", addNewUser);
