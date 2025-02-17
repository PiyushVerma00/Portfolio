class ApiError extends Error{
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
    ){
        super(message)
        this.statuscode = statusCode,
        this.data = null,
        this.message = message,
        this.success = false
        this.errors = errors
        Error.captureStackTrace(this, this.constructor); // Helps with debugging
    }
}
export {ApiError}