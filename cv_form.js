const list = document.getElementById('skills');

function on_add_skill_click() {
    const input = document.getElementById('skill_field')
    const new_skill = input.value;
    const parent = list.parentElement;
    const messages = parent.getElementsByClassName('message');

    if (new_skill.replace(/\s/g, "") === "") {

        if (messages.length === 0) {
            message = document.createElement('div');
            message.setAttribute('class', 'message');
            message.appendChild(document.createTextNode('Пустой навык? :-('));
            parent.appendChild(message);
        }
    }
    else {

        if (messages.length > 0) {
            parent.removeChild(messages[0])
        }
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(new_skill));
        list.appendChild(entry);
        input.value = ""
    }
}