let strings = {
    "help": {
        req: {
            lvl: 0,
            login: "",
        }
    }
}

const input_field = document.getElementById("input-field");
const output_field = document.getElementById("output-field")

const parseMessage = (e) => {
    var msg = e.target.value;
    if (msg.includes("\n")) {
        if (msg.slice(0, -1) in strings) {
            output_field.value = msg;
        }
        else {
            output_field.value = "Unknown command. Please enter something correct."
        }
        e.target.value = "";
    }
}


input_field.addEventListener("input", parseMessage)