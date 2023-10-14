let tree = new BST();

let state = document.getElementById("option");

function redow () {
    document.getElementById("inputNumber").style.display = "inline";
    document.getElementById("inputNumber").style.width = "90%";

    document.getElementById("ok").style.marginTop = "0px"
    document.getElementById("ok").style.width = "6%"
}

document.getElementById('option').addEventListener('click', (e) => {
    if (state.value == "inOrder") {
        console.log("Setting inOrder");
        document.getElementById("inputNumber").style.display = "none";
        document.getElementById("ok").style.marginTop = "10px"
        document.getElementById("ok").style.width = "100%"
    } else {
        redow();
    }
})

document.getElementById("ok").addEventListener('click', () => {
    if (state.value == "insert") {
        tree.Insert(document.getElementById("inputNumber").value);
        console.log("inserting " + document.getElementById("inputNumber").value );
    } else if (state.value == "hasKey") {
        document.getElementById("output").innerText = tree.hasKey((document.getElementById("inputNumber").value))
    }
});