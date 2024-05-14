document.querySelector("#addTask").addEventListener("click", () => {
    document.querySelector("#taskArea").innerHTML += 
    `<hr />
    <div class="flex">
        <div class="left">
            <div class="pe-1">
                <button class="btn btn-success p-1 pe-2 ps-2">
                    <small><i class="fa-solid fa-check"></i></small>
                </button>
            </div>
            <div class="pe-3">
                <button class="btn btn-danger p-1 ps-2 pe-2">
                    <small><i class="fa-solid fa-trash"></i></small>
                </button>
            </div>
        </div>
        <div class="right">
            <p class="pb-0 mb-0">${document.querySelector("#taskInput").value}</p>
        </div>
    </div>`;
    document.querySelector("#taskInput").value = "";
});

