const request = require("supertest");
const app = require("../src/app.js");

describe("app unit tests", () => {
  it("should get on /", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ msg: "Successful GET Request" });
  });

  it("should post on /", async () => {
    const response = await request(app).post("/").send({ data: "Steve" });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual({
      msg: "This is what was sent in req.body.data: Steve",
    });
  });
});
