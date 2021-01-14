const request = require("supertest");
const app = require("../index");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    request(app)
      .get("/sms")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});
