const validSpacing = (str) => {

    if(!str.includes(' '))
        return true;
    else if(str.length == 1)
        return false
}

module.exports = {
    validSpacing
}