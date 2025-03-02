const ss = require('./sortString');
const dl = require('./dataLoading');
const fs = require('./fileSystem');

const url = 'https://jsonplaceholder.typicode.com/users';
const folderPath = 'C:/КБиП/WebПрограммирование/лаба 4.2/src/modules/users'
console.log()
dl.dataLoadingWithCallback(url,(result)=>{
    const data = result;
    const sortData = ss.sortString(data.data, 'name');
    const dataNames = sortData.map((elem)=>{
        return elem.name
    }).join('\n');
    const dataEmails = sortData.map((elem)=>{
        return elem.email
    }).join('\n');
    fs.writeFileSync(folderPath+'/names.txt', dataNames)
    fs.writeFileSync(folderPath+'/emails.txt', dataEmails)
});
