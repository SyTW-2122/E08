const request = require('supertest')

const app = require('../src/index')

describe("CRUD de Usuario", () => {
    it("Create", (done) => {
        const data = {
            nombre: "Name",
            apellido: "Last Name",
            email: "test@ull.edu.es",
            password: "123456"
        }
        request(app)
            .post('/api/usuarios')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            })
    })
    it("Request", (done) => {
        const data = {
            email: "test@ull.edu.es",
            password: "123456" 
        }
        request(app)
            .get('/api/usuarios')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            })
    })
    it("Delete", (done) => {
        const data = {
            email: "test@ull.edu.es",
            password: "123456"
        }
        request(app)
            .delete('/api/usuarios')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            })
    })
});