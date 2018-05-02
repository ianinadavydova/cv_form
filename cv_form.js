const list = document.getElementById('skills');
function on_add_skill_click() {
    const input = document.getElementById('skill_field')
    const new_skill = input.value;
    if (new_skill === "") {
        alert('Пустой навык? :-(');
    }
    else {
        const entry = document.createElement('li');
        entry.appendChild(document.createTextNode(new_skill));
        list.appendChild(entry);
        input.value = ""
    }
}