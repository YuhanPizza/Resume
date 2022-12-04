const lang = ["JavaScript", "C#", "HTML", "CSS", "C/C++", "C", "Python"];
const provinces = [
    "Ontario",
    "British Columbia",
    "Alberta",
    "Saskatchewan",
    "Prince Edward Island",
    "Manitoba",
    "Newfoundland and Labrador",
    "New Brunswick",
    "Nova Scotia",
    "Quebec",
];
function Run() {
    let cmplist = document.getElementById("language-list");
    let provlist = document.getElementById("provinces");

    lang.forEach((item) => {
        var listItem = document.createElement("li");
        listItem.innerHTML = item;
        cmplist.appendChild(listItem);
    });
    provinces.forEach((item) => {
        var option = document.createElement("option");
        option.value = item;
        provlist.appendChild(option);
    });
}

function Contact() {
    try {
        let newInput = document.getElementById("other");
        const radioButton = document.getElementById("radio");
        if (!newInput) {
            newInput = document.createElement("input");
            newInput.id = "other";
            newInput.className = "other";
            newInput.type = "text";
            newInput.placeholder = "Contact reason";
            newInput.required = true;
            radioButton.after(newInput);
            newInput.focus();
        }
    } catch (error) {
        console.log(error);
    }
}
function HideContact() {
    try {
        let other = document.getElementById("other");
        if (other) {
            other.remove();
        }
    } catch (error) {
        console.log(error);
    }
}


Run();
