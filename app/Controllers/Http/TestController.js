'use strict'

const { Res200, Abort } = use('App/Helpers/HttpResponses')
const { validate } = use('Validator')

class TestController {

    async get({ request: req, response: res }) {
        const headers = req.headers();
        const auth = req.header('Authorization');
        // let params = request.get();
        let params = req.only(['email']);

        const rules = {
            email: 'required|email',
        }

        const validation = await validate(params, rules);
        if (validation.fails()) {
            console.log(validation.messages());
            const errLogs = validation.messages();
            return Abort(res,400, "Fields validation failed!", errLogs )
        }

        console.log("GET params", params)

        return Res200(res, { testing: true })
    }

    post({ request: req, response: res }) {
        let body = req.post();

        console.log("POST data", body);

        return Res200(res, { testing: true })
    }
}

module.exports = TestController