let tree = new BST(); /* Check the bst.js file for the implemenation of the BST */

let state = document.getElementById("option");

let staer = 0;

function cleanLogs () {
    while (document.getElementById("outputLog").firstChild) {
        document.getElementById("outputLog").removeChild(document.getElementById("outputLog").firstChild)
    }
};

function redow () {
    document.getElementById("inputNumber").style.display = "inline";
    document.getElementById("inputNumber").style.width = "90%";

    document.getElementById("ok").style.marginTop = "0px"
    document.getElementById("ok").style.width = "6%"
    // document.getElementById("output").innerText = "";
}

document.getElementById('option').addEventListener('click', (e) => {
    if (state.value == "inOrder") {
        document.getElementById("output").innerText = "";
        cleanLogs();
        console.log("Setting inOrder");
        document.getElementById("inputNumber").style.display = "none";
        document.getElementById("ok").style.marginTop = "10px"
        document.getElementById("ok").style.width = "100%"
    } else if (state.value == "hasKey") {
        cleanLogs();
        redow();
        document.getElementById("inputNumber").value = "";
    } else {
        redow();
        document.getElementById("output").innerText = "";
        document.getElementById("inputNumber").value = "";
    }
})

document.getElementById("ok").addEventListener('click', () => {
    if (state.value == "insert") {
        if (isNaN(parseInt(document.getElementById("inputNumber").value, 10))) {
            alert("Please enter a number...")
            document.getElementById("inputNumber").value = "";
            return;
        }
        tree.Insert(document.getElementById("inputNumber").value);
        console.log("inserting " + document.getElementById("inputNumber").value );
        let outputLog = document.createElement("p");
        let outpuLogText = document.createTextNode("Inserting: " +  document.getElementById("inputNumber").value + " to the BST" )
        outputLog.appendChild(outpuLogText);
        document.getElementById("outputLog").appendChild(outputLog);
    } else if (state.value == "hasKey") {
        if (tree.hasKey((document.getElementById("inputNumber").value))) {
            document.getElementById("output").innerText = "The key " + document.getElementById("inputNumber").value + " is in the BST ";
        } else {
            document.getElementById("output").innerText = "The key " + document.getElementById("inputNumber").value + " is NOT in the BST ";
        }
    } else if (state.value == "inOrder") {
        let order = tree.inOrder();
        document.getElementById("output").innerText = order;
    }
});


document.getElementById("inputNumber").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        if (state.value == "insert") {
            if (isNaN(parseInt(document.getElementById("inputNumber").value, 10))) {
                alert("Please enter a number...")
                document.getElementById("inputNumber").value = "";
                return;
            }
            tree.Insert(parseInt(document.getElementById("inputNumber").value));
            console.log("inserting " + document.getElementById("inputNumber").value );
            let outputLog = document.createElement("p");
            let outpuLogText = document.createTextNode("Inserting: " +  document.getElementById("inputNumber").value + " to the BST" )
            outputLog.appendChild(outpuLogText);
            document.getElementById("outputLog").appendChild(outputLog);
        } else if (state.value == "hasKey") {
            if (tree.hasKey(document.getElementById("inputNumber").value)) {
                document.getElementById("output").innerText = "The key " + document.getElementById("inputNumber").value + " is in the BST ";
            } else {
                document.getElementById("output").innerText = "The key " + document.getElementById("inputNumber").value + " is NOT in the BST ";
            }
        } else if (state.value == "inOrder") {
            let order = tree.inOrder();
            document.getElementById("output").innerText = order;
        }
    };
})