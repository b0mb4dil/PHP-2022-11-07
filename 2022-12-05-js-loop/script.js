function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// Task - 1 //
for (let i = 0; i < 400; i++) {
    if (i % 50 === 0) {
        document.write('<br>');
    }
    document.write('*')
}
document.write('<br>')



// Task - 1 //
// Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>
let randomH = rand(1,6)
document.write(`<h${randomH}>h${randomH}</h${randomH}>`)



// Task - 2 //
// Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
let randArray = []
for (let i = 0; i < 3; i++) {
    randArray.push(rand(-10, 10))
    if (randArray[i] < 0) {
        document.write(`<br><span style="color: green;">${randArray[i]}</span>`)
    }
    if (randArray[i] === 0) {
        document.write(`<br><span style="color: red;">${randArray[i]}</span>`)
    }
    if (randArray[i] > 0) {
        document.write(`<br><span style="color: blue;">${randArray[i]}</span>`)
    }

}


// Task - 3 //
// Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
console.log('Task - 3')
console.log('----------')

let string1 = 'An American in Paris'
let string2 = `Breakfast at Tiffany's`
let string3 = '2001: A Space Odyssey'
let string4 = `It's a Wonderful Life`

// Paverčiu į array //
let string1arr = string1.split('')
let string2arr = string2.split('')
let string3arr = string3.split('')
let string4arr = string4.split('')


const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']

for (let i = 0; i < string1arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (string1arr[i] === vowels[j]) {
            string1arr.splice(i, 1)
            i--;
        }
    }
}
for (let i = 0; i < string2arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (string2arr[i] === vowels[j]) {
            string2arr.splice(i, 1)
            i--;
        }
    }
}
for (let i = 0; i < string3arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (string3arr[i] === vowels[j]) {
            string3arr.splice(i, 1)
            i--;
        }
    }
}
for (let i = 0; i < string4arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (string4arr[i] === vowels[j]) {
            string4arr.splice(i, 1)
            i--;
        }
    }
}

console.log(string1arr.join(''))
console.log(string2arr.join(''))
console.log(string3arr.join(''))
console.log(string4arr.join(''))

// Task - 4 //
// Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

let counter = 0
let result = ''

for (let i = 0; i < 20; i++) {
    const number = rand(0, 300)

    if (number > 150) {
        counter++;
    }
    if (number > 275) {
        result += '<span style="color: red; ">' + number + ' ' +'</span>';
    } else {
        result += number + ' '
    }    
}

document.write('<br>Rezultatas: ', result)




// Task - 5 //
// Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.
document.write('<br><br>')

for (let i = 1; i < 3000; i++) {
    if (i % 77 === 0) {
        document.write(i + ", ");
    }
    if (i === 2926) {
        document.write(i + ".");
    }
}
