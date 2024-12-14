
function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;
     
    if(movieTitle == "") {
        document.getElementById("inputTitle").setAttribute("placeholder", "Title is required");
    }
    if(movieYear == "") {
        document.getElementById("inputYear").setAttribute("placeholder", "Year is required");
    }
    if(movieActors == "") {
        document.getElementById("inputActors").setAttribute("placeholder", "Actors are required");
    }

    if (movieTitle == "" || movieYear == "" || movieActors == "") {
        return;
    }

    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = "<input type='checkbox' class='form-check-input me-2'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById('movieList').appendChild(li);
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputActors").value = "";
}


function deleteSelected() {
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
    checkedBoxes[i].parentNode.parentNode.removeChild(checkedBoxes[i].parentNode);
    }
}


