const fs = require("node:fs/promises");
const path = require("node:path");

const [ , , ...items] = process.argv

;( async function(items){
    if(items) {
        const newUser = items.join(' ');
        let users = await fs.readFile(path.join(__dirname, "users.json"), 'utf8');

        users = users ? JSON.parse(users) : [];
        
                
        if(users.some(user => user.name == newUser)) return console.log("This user already excist");

        const user = {id: users.length ? users.at(-1) + 1 : 1, name:newUser};
        users.push(user);

        fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(users, null, 4));
        console.log("User successfully added");
    }
    return console.log('Semething went wrong')
})(items);
