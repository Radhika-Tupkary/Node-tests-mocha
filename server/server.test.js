const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {

    describe('GET /', () => {
        it('should return hi there response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hi there!')
                .end(done);
        });

    });

    describe('GET /users', () => {
        it('should return an array of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(function(res){
                    expect(res.body).toInclude({name:"Radhika Tupkary", age:27})
                })
                .end(done);
        });
    });
});

