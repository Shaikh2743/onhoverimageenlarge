function foodorder(orderdfood, callback) {
    console.log('you orderes' + orderdfood )
    setTimeout(() => {
        callback();
        }, 1000)
}

function eat(){
    console.log('food is ready')
}

foodorder('pizza', + eat)

function foodorder(orderdfood, callback) {
    console.log('you ordered ' + orderdfood); // Added a space after 'ordered'
    setTimeout(() => {
        callback();
    }, 1000);
}

function eat() {
    console.log('food is ready');
}

foodorder('pizza', eat); // Added a comma and separated 'pizza' and 'eat'
