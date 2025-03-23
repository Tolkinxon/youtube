export const serverConfig = {
    dbPath: (fileName) => process.cvd() + 'db' + fileName + '.json',
    publicPath: (fileName) => process.cvd() + 'public' + fileName
 }