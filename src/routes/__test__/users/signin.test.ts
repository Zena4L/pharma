import request from "supertest";
import app from "../../../app";

describe("for testing the signin", () => {
  it("return a 400 if email is incorrect", async () => {
    await request(app)
      .post("/api/v1/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
        profile: {
          name: "test",
          address: "123 str",
        },
      })
      .expect(201);
    await request(app)
      .post("/api/v1/users/signin")
      .send({
        email: "test",
        password: "password",
      })
      .expect(400);
  });
  it("return a 400 if not password is incorrect", async () => {
    await request(app)
      .post("/api/v1/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
        profile: {
          name: "test",
          address: "123 str",
        },
      })
      .expect(201);
    await request(app)
      .post("/api/v1/users/signin")
      .send({
        email: "test@test.com",
        password: "pass",
      })
      .expect(400);
  });
  it("return a 200 if email and password is valid", async () => {
    await request(app)
      .post("/api/v1/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
        profile: {
          name: "test",
          address: "123 str",
        },
      })
      .expect(201);
    await request(app)
      .post("/api/v1/users/signin")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(200);
  });
  it("return a valid token", async () => {
    await request(app)
      .post("/api/v1/users/signup")
      .send({
        email: "test@test.com",
        password: "password",
        profile: {
          name: "test",
          address: "123 str",
        },
      })
      .expect(201);
    const response = await request(app)
      .post("/api/v1/users/signin")
      .send({
        email: "test@test.com",
        password: "password",
      })
      .expect(200);

    expect(response.get("Set-Cookie")).toBeDefined();
  });
});
