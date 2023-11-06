import request from "supertest";
import app from "../../../app";

it("return a status code of 200 on signout", async () => {
  await request(app)
    .post("/api/v1/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
      profile: {
        name: "test",
        address: "123 st",
      },
    })
    .expect(201);

  await request(app).get("/api/v1/users/signout").expect(200);
});
