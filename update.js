const fs = require("node:fs/promises");
const path = require("node:path");

const [ , ,idx, ...items] = process.argv

;( async function(idx, items){
    if(items && idx && !isNaN(idx)) {
        const newUser = items.join(' ');
        let users = await fs.readFile(path.join(__dirname, "users.json"), 'utf8');

        users = users ? JSON.parse(users) : [];

        // id bo'yicha update qilish
        // const index = users.findIndex(item => item.id == idx);
        // if(index == -1) return console.log("ClientError: Wrong id inserted!");
        // users.splice(index, 1, {id:Number(idx), name: newUser});

        //index bo'yida update qilish
        if(users.length <= idx) return console.log("ClientError: Wrong index inserted!");       
        users[idx] = {id: users[idx].id, name: newUser};       

        fs.writeFile(path.join(__dirname, "users.json"), JSON.stringify(users, null, 4));
        console.log("User successfully updated");
    } else return console.log('Semething went wrong')
})(idx, items);
