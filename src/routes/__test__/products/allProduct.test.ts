import app from "../../../app";
import request from "supertest";

it("return with a status of 200 on sucess", async () => {
  await request(app).get("/api/v1/product").send({}).expect(200);
});
