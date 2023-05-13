/**
 * Set error logic behaviour accordingly to server env status
 * @param {ExpressRequest} req Express request object from current middleware
 * @param {ExpressResponse} res Express response object from current middleware
 * @param {number} [code] Server error status code, default `500`
 * @param {string} [message] Message to display, default `"Internal Server Error"`
 * @returns 
 */
const outError = (error) => (req, res, code = 500, message = "Internal Server Error") => {
    if (req === undefined) throw new Error("Req object is required");

    if (process.env.SERVER_ENV === "dev") console.log(error);
    else {} // eventually log (db or file) error logic

    return res.status(code).json({ message });
} 

module.exports = {
    outError,
}