const obj = {
    Kolya: '200',
    Vasya: '300',
    Petya: '400'
}
for (const key in obj) {
    console.log(`${key} - ${obj[key]} долларов`) ;
}