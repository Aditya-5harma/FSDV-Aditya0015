async function f() {
    let response = await fetch('http://xyzurl');
}
//f() becomes a rejected promise
f().catch(alert);