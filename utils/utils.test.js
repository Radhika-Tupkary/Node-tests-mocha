const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(34,45);
            expect(res).toBeA('number').toBe(79);
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(34, 45, function(sum){
                expect(sum).toBeA('number').toBe(79);
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            let res = utils.square(4);
            expect(res).toBe(16).toBeA('number');
        });

        it('should square a number async', (done) => {
            utils.asyncSquare(8, function(sq) {
                expect(sq).toBe(64);
                done();
            })
        });
    });

});


it('should verify firstName and LastName are set', () => {
    let obj = {
        age: 27,
        location: "Atlanta"
    };
    let res = utils.setName(obj, "Radhika Tupkary");
    expect(res).toInclude({firstName:"Radhika", lastName:"Tupkary"});
});


// it('should expect some values', () => {
//    expect({name:"Radhika"}).toEqual({name:"Radhika"});
//    expect({name:"Radhika", age: 27, location: "Atlanta"}).toInclude({age:27});
//    expect([2, 4, 7]).toInclude(4);
//    expect([2, 4, 7]).toExclude(5);
// });



// steps

// 1. mkdir node-tests
// 2. cd node-tests
// 3. npm init
// 4. npm install mocha --save-dev
// 5. in package.json test : "mocha **/*.test.js"
// 6. from terminal -> npm test
// 7. install nodemon globally (with -g flag)
// 8. in package.json test-watch : "nodemon --exec \"npm test\""
// 9. from terminal -> npm run test-watch
// 10. npm install expect --save-dev
//11. supertest - a library made specifically for testing node.js http servers
//12. npm install rewire - for spy

// notes

//1. "it" and "describe" come from mocha
//2. spies come with expect module
// TDD - Test Driven Development and BDD - Behavior Driven Development