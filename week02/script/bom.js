const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");




button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

        const listItem = document.createElement("li");
        const deleteButton = document.createElement("buttton");

        listItem.textContent = input.value;
        deleteButton.textContent = "X";

        deleteButton.addEventListener('click', function () {
            list.removeChild(listItem);
            input.focus();
        });

        listItem.append(deleteButton);
        list.append(listItem)

        input.value = '';
        input.focus();

    }

});


