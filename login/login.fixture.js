(function() {
    
    function aValidUser() {
        return {
            subject: 'this is a valid user credential',
            username: 'pcoip2',
            password: 'ca$hc0w'
        }
    }

    function anInvalidUser() {
        return {
            subject: 'this is an invalid user credential',
            username: 'lol',
            password: 'lmao'
        }
    }

    module.exports = {
        aValidUser: aValidUser,
        anInvalidUser: anInvalidUser
    }
})