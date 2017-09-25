process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET add', () => {
    for(let i = -10; i < 11; i++) {
        for(let j = -10; j < 11; j++) {
            it('it should GET the sum of parameters', done => {
                chai.request(server)
                .get(`/add/${i}/${j}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql(`${i + j}`);
                    done();
                });
            });
        }
    }
});

describe('/GET subtract', () => {
    for(let i = -10; i < 11; i++) {
        for(let j = -10; j < 11; j++) {
            it('it should GET the subtraction of parameters', done => {
                chai.request(server)
                .get(`/subtract/${i}/${j}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql(`${i - j}`);
                    done();
                });
            });
        }
    }
});

describe('/GET multiply', () => {
    for(let i = -10; i < 11; i++) {
        for(let j = -10; j < 11; j++) {
            it('it should GET the multiplication of parameters', done => {
                chai.request(server)
                .get(`/multiply/${i}/${j}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql(`${i * j}`);
                    done();
                });
            });
        }
    }
});

describe('/GET divide', () => {
    for(let i = -10; i < 11; i++) {
        for(let j = -10; j < 11; j++) {
            it('it should GET the division of parameters', done => {
                chai.request(server)
                .get(`/divide/${i}/${j}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql(`${i / j}`);
                    done();
                });
            });
        }
    }
});

describe('/GET pow', () => {
    for(let i = -10; i < 11; i++) {
        for(let j = -10; j < 11; j++) {
            it('it should GET the power of parameters', done => {
                chai.request(server)
                .get(`/pow/${i}/${j}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    res.text.should.be.eql(`${Math.pow(i, j)}`);
                    done();
                });
            });
        }
    }
});

describe('/GET kramer', () => {
    let a1 = Math.floor(Math.round() * 100);
    let b1 = Math.floor(Math.round() * 100);
    let c1 = Math.floor(Math.round() * 100);

    let a2 = Math.floor(Math.round() * 100);
    let b2 = Math.floor(Math.round() * 100);
    let c2 = Math.floor(Math.round() * 100);

    let delta = a1 * b2 - b1 * a2;
    let delta1 = c1 * b2 - b1 * c2;
    let delta2 = c1 * a2 - a1 * c2;
    let x = delta1 / delta;
    let y = delta2 / delta;

    it('it should GET the kramer equation result of parameters', done => {
        chai.request(server)
        .get(`/kramer/${a1}/${b1}/${c1}/${a2}/${b2}/${c2}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.text.should.be.a('string');
            res.text.should.be.eql(`x = ${x}, y = ${y}`);
            done();
        });
    });
});