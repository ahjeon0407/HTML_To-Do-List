function get_list() {
    if (window.event.keyCode == 13) {

        var input = document.getElementById("input").value;
        var listplus = document.createElement("li");
        listplus.innerHTML = input;
        document.getElementById("list-item").appendChild(listplus);
        document.getElementById("input").value = "";
    }
}
