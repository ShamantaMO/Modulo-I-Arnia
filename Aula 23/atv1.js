const io = require('../io/io')

let n1 = [12,34,56,78,910]

for(let i = 0; i < n1.length; i++){
    io.write(`O sucessor do numero ${n1[i]} é ${n1[i]+ 1} `)

}