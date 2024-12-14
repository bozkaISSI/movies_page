function addMovie() {
    const inputs = [
        { id: "inputTitle", placeholder: "Title is required" },
        { id: "inputYear", placeholder: "Year is required" },
        { id: "inputActors", placeholder: "Actors are required" },
    ];

    let isValid = true;

    inputs.forEach(input => {
        const element = document.getElementById(input.id);
        const value = element.value.trim();
        if (value === "") {
            element.value = "";
            element.setAttribute("placeholder", input.placeholder);
            isValid = false;
        } else {
            element.setAttribute("placeholder", "");
        }
    });

    if (!isValid) return;

    const [movieTitle, movieYear, movieActors] = inputs.map(input => document.getElementById(input.id).value.trim());
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<input type='checkbox' class='form-check-input me-2'> ${movieTitle}, ${movieYear}, ${movieActors}`;
    document.getElementById('movieList').appendChild(li);

    inputs.forEach(input => (document.getElementById(input.id).value = ""));
}



function deleteSelected() {
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
    checkedBoxes[i].parentNode.parentNode.removeChild(checkedBoxes[i].parentNode);
    }
}


