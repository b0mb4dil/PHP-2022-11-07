// Task - 1
// Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".

greeting = (name) => {
    return `Hello, ${name}`;
}
// greeting = name => `Hello, ${name}`; Alternatyvus užrašymas.

console.log(greeting('Eivydas'))

// Task - 2
// Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.

symbolCount = (string) => {
    return string.length;
}
// symbolCount = string => string.length; Alternatyvus užrašymas.

console.log(symbolCount('Tekstas'))

// Task - 3 (1 variantas)
// Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.

function nameLastname(name, lastname) {
    let nameArray = name.split('');
    let lastnameArray = lastname.split('');

    let nameToUpper = (nameArray.shift()).toUpperCase(); 
    let lastnameToUpper = (lastnameArray.shift()).toUpperCase(); 
    nameArray.unshift(nameToUpper);
    lastnameArray.unshift(lastnameToUpper);

    return nameArray.join('') + ' ' + lastnameArray.join('');
}
console.log('3 užduotis - 1 variantas')
console.log(nameLastname('eivydas', 'gricius'))

// Task - 3 (2 variantas)

function capitalize (name, last_name) {
    let nameLetter = name[0].toUpperCase()
    let last_nameLetter = last_name[0].toUpperCase()

    name = nameLetter + name.slice(1)
    last_name = last_nameLetter + last_name.slice(1)
    console.log('3 užduotis - 2 variantas')
    console.log(name, last_name)
}

capitalize('eivydas', 'gricius')


// Task - 4
// Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generate3() {
    first = rand(0, 5);
    second = rand(0, 5);
    third = rand(0, 5);
    return first + ', ' + second + ', ' + third + '.'
}

console.log(generate3())

// Task - 5
// Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". Patikrinkite ar šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

function randomNumberArray(from, to, limit) {
    let array = [];
    
    if (isNaN(from) || isNaN(to) || isNaN(limit)) {
        return 'Duomenų įvedimo klaida.';
    } else {
        for (let i = 0; i < limit; i++) {
            array[i] = rand(from, to);
        }
    }
    return array;
}

console.log(randomNumberArray(1, 10, 5))

