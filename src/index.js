const validSpacing = (str) => {

    if(!str.includes(' '))
        return true;
    else if(str.length == 1)
        return false;
    else if(str[0].includes(' ') || str[str.length - 1].includes(' '))
        return false;
}

module.exports = {
    validSpacing
}