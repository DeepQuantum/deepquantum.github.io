let commands = {
    "help": {
        req: {
            lvl: 0,
            login: "",
        },
        response: [
            "This is a list of all the commands available:",
            "       - help: Show this message.",
            "       - shownet: Show the users in the current network.",
            "       - connect <address> <password>: Connect to a user.",
        ]
    },
    "clear": {
        req: {
            lvl: 0,
            login: "",
        },
        response: [

        ]
    }
}

const input_field = document.getElementById("input-field");
const output_field = document.getElementById("output-field");

const respond = (key) => {
    commands[key]["response"].forEach(s => {
        appl(s);
    });
}

const appl = (msg) => {
    output_field.value += `>> ${msg}\n`
    output_field.scrollTop = output_field.scrollHeight;
}

const parseMessage = (e) => {
    var msg = e.target.value;
    if (msg.includes("\n")) {
        if (msg.slice(0, -1) in commands) {
            respond(msg.slice(0, -1))
        }
        else {
            appl(`Unknown command '${msg.slice(0, -1)}'. Type 'help' for a list of all commands.`)
        }
        e.target.value = "";
    }
}


input_field.addEventListener("input", parseMessage)