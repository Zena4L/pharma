import request from "supertest";
import app from "../../../app";

it("should not return with a 404", async () => {
  const response = await request(app).post("/api/v1/product/new").send({});
  expect(response.status).not.toEqual(404);
});
