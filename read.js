const fs = require("node:fs/promises");
const path = require("node:path");

;( async function(items){
        let users = await fs.readFile(path.join(__dirname, "users.json"), 'utf8');
        users = users ? JSON.parse(users) : [];
        console.log(users);
})();
