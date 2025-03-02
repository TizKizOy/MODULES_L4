const bcrypt = require('bcryptjs');
const { config } = require('dotenv');
require('dotenv').config();

const password=[
    "vxhel0kdCn", 'CaprldD3xQ', 'gwc3tJzye4',
    'sWEp5TyOBA', 'AJEVZ3sdLS', 'k4un8SX0hQ',
    'OmvTGJMHfP', 'atVPeG0zIs', 'tsVjayd4pJ',
    'khtoUSmRN5', '6uy0btUE', 'j9bbn0Vl', 'ArqHCZlO'
]

password.forEach((elem, index)=>{
    console.time(`hashTime ${index+1}`);
    const hash = bcrypt.hashSync(elem,10);
    console.timeEnd(`hashTime ${index+1}`);
    console.log(`hash: ${index+1}: ${hash}`)
})
console.log(`Вывод: время хэширования пароля может отличаться
из-за нагруженности системы, ресурсов процессора, cостояние памяти. 
Также от формата пароля и заданного количества соли при хеширования.`)

console.log(`Mode=${process.env.MODE}`)
