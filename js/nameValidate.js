const nameInput = document.getElementById("name")

function isValidName(name) {
    return /^[a-zA-Z]+\s[a-zA-Z][a-zA-Z]+\s[a-zA-Z\.-\s]+$/.test(name)
};

function formatName(text) {
    const regex = /^([a-zA-Z]+)\s([a-zA-Z])[a-zA-Z]+(\s[a-zA-Z\.-\s]+)$/
    return text.replace(regex, '$3, $1 $2.');
}