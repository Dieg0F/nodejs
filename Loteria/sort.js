const userFile = 'userNumbers.txt';
const sortedFile = 'sortedNumbers.txt';

var sort = new Array();
var user = new Array();

function main() {    
    init()
    sortNumbers()
    compareResult()
}

function init() {
    sort = [];
    combinedNumbers = [];
    user = []
    clearHtml();
    for (let index = 0; index < 6; index++) {
        var userNumber = document.getElementById("user_" + (index + 1)).value
        if (parseInt(userNumber) > 60 || parseInt(userNumber) < 1) {
            alert("Insita um valor entre 1 e 60");
            return null;            
        } else {
            user[index] = parseInt(userNumber);
        }
    }
}

function sortNumbers() {
    for (let index = 0; index < 6;) {
        let sortedNumber = Math.floor((Math.random() * 60) + 1);
        if (index == 0) {
            sort[index] = sortedNumber
            index++
        } else if (!sort.includes(sortedNumber)) {
            sort[index] = sortedNumber
            index++
        }
    }    
}

function compareResult() {    
    sort.forEach((element, index) => {
        let p = document.createElement('p');
        p.id = 'sort_' + (index + 1);        
        if (user.includes(element)) {
            p.innerHTML = '<b>' + element + '</b>'            
        } else {            
            p.innerHTML = element
        }
        document.getElementById('sortedNumbersView').appendChild(p)
    });
}

function readFile() {    
    user = []
    fs.open(userFile, 'r', (err, fl) => {
        if (err) throw err;
        fs.readFile(userFile, 'utf-8', function (err, data) {
            if (err) throw err;
            var linhas = data.split(/\r?\n/);
            linhas.forEach(function (linha) {
                console.log(linha)
            })
        })
    });
}

function writeFile(numbers) {
    fs.writeFile(sortedFile, numbers + '\n', { encoding: 'utf-8', flag: 'a' }, function (err) {
        if (err) throw err;
        console.log('Gravado com sucesso!');
    });
}

function clearHtml() {
    let sortedNumbersView = document.getElementById('sortedNumbersView');
    for (let index = 0; index < 6; index++) {
        let p = document.getElementById('sort_' + (index + 1))
        if (p != null) {
            sortedNumbersView.removeChild(p)
        }
    }
}