/*const email = document.getElementById("mailto");
email.click() {
  let gender, name, location, message;
  name = document.getElementById("name").innerHTML;
  location = document.getElementById("loca").innerHTML;
  message = document.getElementById("mess").innerHTML;
  gender = document.getElementById("gend").innerHTML;
  email.href="mailto:cemmanuel.njoku@gmail.com?subject=FUTALOO%20COMPLAINT&body="+{name}+{location}+"\n"+{gender}+"\n"+{message}
};*/

const itemList = document.querySelector('.item-list');
const gridViewBtn = document.getElementById('grid-active-btn');
const detailsViewBtn = document.getElementById('details-active-btn'); 

gridViewBtn.classList.add('active-btn');

gridViewBtn.addEventListener('click', () => {
    gridViewBtn.classList.add('active-btn');
    detailsViewBtn.classList.remove('active-btn');
    itemList.classList.remove('details-active');
});

detailsViewBtn.addEventListener('click', () => {
    detailsViewBtn.classList.add('active-btn');
    gridViewBtn.classList.remove("active-btn");
    itemList.classList.add("details-active");
});

function myFunction() {
  // Declare variables
  var input, filter, list, item, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  list = document.getElementsByClassName("item");
  item = document.getElementsByClassName('item-price');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < item.length; i++) {
    a = item[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}






const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


