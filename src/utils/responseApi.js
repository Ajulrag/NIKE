/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 */
const success = (message, results) => {
  return {
    message,
    results
  }
}

module.exports = {
  success
}
