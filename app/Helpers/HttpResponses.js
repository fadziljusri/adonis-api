function Res200(res, data = {}, message = "Ok") {
    res.status(200).json({ status: "success", data, message });
  }
  
  function Res201(res, data = {}, message = "Created") {
    res.status(201).json({ status: "success", data, message });
  }
  
  function Res204(res, message = "No Content") {
    res.status(204).json({ status: "success", data: null, message });
  }
  
  const errorStatus = {
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict"
  }
  
  function Abort(res, code, message = null, data = null) {
    let statusText = errorStatus[code] || "Error";
    res.status(code).json({ status: "failed", statusText, data, message })
  }
  
  
  module.exports = {
    Res200,
    Res201,
    Res204,
    Abort
  }