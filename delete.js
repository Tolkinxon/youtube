const fs = require("node:fs/promises");
const path = require("node:path");

const [ , ,idx] = process.argv

;( async function(idx){
    
    if(idx && !isNaN(idx)) {
        idx = Number(idx);
        let users = await fs.readFile(path.join(__dirname, "users.json"), 'utf8');
        users = users ? JSON.parse(users) : [];

        // const index = users.findIndex(item => item.id == idx);
        // users.splice(index, 1);

        users.splice(idx, 1);

        fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(users, null, 4));
        console.log("User successfully deleted");
    } else return console.log('Semething went wrong')
})(idx);
