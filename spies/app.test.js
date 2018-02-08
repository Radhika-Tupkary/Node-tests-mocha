const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', function () {

    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy("Radhika", 27);
        expect(spy).toHaveBeenCalledWith("Radhika", 27);
    });

    it('should call saveUser with user object', () => {
        let email = "radhe2111@gmail.com";
        let password = "123pqr";

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    });
});