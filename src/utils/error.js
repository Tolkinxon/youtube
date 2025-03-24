export class ClientError extends Error {
    constructor(message, status){
        super(message)
        this.message = `ClientError: ${message}`;
        this.status = status;
    }
}

export class ServerError extends Error {
    constructor(message){
        super(message)
        this.message = `ServerError: ${message}`;
        this.status = 500;
    }
}

export const globalError = (res, err) => {
    const error = {
        message: err.message,
        status: err.status || 500
    };
    res.writeHead(error.status, {"content-type": "application/json"});
    return res.end(JSON.stringify(error))
}