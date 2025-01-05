let form = document.getElementById("taskForm");
let inputs = document.querySelectorAll("input");
let image = document.getElementById("image");
let programmingLanguage = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].id == "image") {
            let imageReader = new FileReader();
            imageReader.readAsDataURL(image.files[0]);

            imageReader.addEventListener("load", () => {
                let imageUrl = imageReader.result;
                localStorage.setItem("image", imageUrl);
            });
        } else if (inputs[i].id == "html" && inputs[i].checked) {
            programmingLanguage.push("HTML");
            localStorage.setItem("Programming Language", programmingLanguage);
        } else if (inputs[i].id == "css" && inputs[i].checked) {
            programmingLanguage.push("CSS");
            localStorage.setItem("Programming Language", programmingLanguage);
        } else if (inputs[i].id == "js" && inputs[i].checked) {
            programmingLanguage.push("JavaScript");
            localStorage.setItem("Programming Language", programmingLanguage);
        } else {
            localStorage.setItem(inputs[i].id, inputs[i].value);
        }
    }
});

////
let imageUrl = localStorage.getItem("image");
let img = new Image();
img.src = imageUrl;
////

function getLocalItems() {
    document.getElementById("nameOutput").innerText =
        "Name: " + localStorage.getItem("name") + "\n\n";
    document.getElementById("ageOutput").innerText =
        "Age: " + localStorage.getItem("age") + "\n\n";
    document.getElementById("genderOutput").innerText =
        "Gender: " + localStorage.getItem("gender") + "\n\n";
    document.getElementById("dateOutput").innerText =
        "Date: " + localStorage.getItem("date") + "\n\n";
    document.getElementById("imageOutput").innerHTML = "Image: " + '<img src="' + imageUrl + '">'+"<br><br>";
    document.getElementById("descriptionOutput").innerText =
        "Description: " + localStorage.getItem("description") + "\n\n";
    document.getElementById("majorOutput").innerText =
        "Major and University: " + localStorage.getItem("major") + "\n\n";
    document.getElementById("programmingLanguagesOutput").innerText =
        "Programming Languages: " +
        localStorage.getItem("Programming Language") +
        "\n\n";
    document.getElementById("siblingsNumOutput").innerText =
        "Siblings Number: " + localStorage.getItem("siblingsNum") + "\n\n";
    document.getElementById("siblingsDesOutput").innerText =
        "Siblings Description: " + localStorage.getItem("siblingsDes") + "\n\n";
}
