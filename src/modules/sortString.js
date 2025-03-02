function sortString(str, key){
    return str.sort((a,b)=> a[key].replace(/\s+/g, '').localeCompare(b[key].replace(/\s+/g, '')))
}
module.exports = { sortString }