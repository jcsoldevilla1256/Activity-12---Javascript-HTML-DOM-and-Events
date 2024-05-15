

document.querySelector("#addTask").addEventListener("click", () => {

  if (document.querySelector("#taskInput").value !== "") {
    document.querySelector("#taskArea").innerHTML += `
    <div>
    <hr />
    <div class="flex">
        <div class="left">
            <div class="pe-1">
                <button class="markButton btn btn-dark p-1 pe-2 ps-2">
                    <small><i class="fa-solid fa-check"></i></small>
                </button>
            </div>
            <div class="pe-3">
                <button class="deleteButton btn btn-danger p-1 ps-2 pe-2">
                    <small><i class="fa-solid fa-trash"></i></small>
                </button>
            </div>
        </div>
        <div class="right">
            <p class="pb-0 mb-0 slash">${
              document.querySelector("#taskInput").value
            }</p>
        </div>
    </div>
    </div>`;
    document.querySelector("#taskInput").value = "";
  } else {
    alert("Field cannot be empty. 😊");
  }

  const markButtons = document.querySelectorAll(".markButton");
  markButtons.forEach((markButton) => {
    markButton.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.lastElementChild.style = "text-decoration: line-through;" ;
    });
  });W

  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    });
  });
});

// how to select an element that is not a child elemet of parent element? 
