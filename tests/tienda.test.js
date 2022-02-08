const request = require("supertest");
const app = require("../index");

describe("Tests para las rutas de la tienda", () => {
  it("Muestra las baterias en venta", (done) => {
    request(app)
      .get("/api/tienda")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
