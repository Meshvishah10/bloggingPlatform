import { resType } from "../response/res.types.js";

export async function userValidator(req, res, next) {
  const result = req.body;
  //console.log(result);
  if (
    !result.name ||
    !result.email ||
    !result.password ||
    typeof result.email !== "string" ||
    typeof result.name !== "string" ||
    typeof result.password !== "string"
  )
    return await res
      .status(400)
      .json({ res: resType.VALIDAION, statusCode: 400 });
  next();
}












// import { createBlogPostController } from "../src/controller/blogPost.controller";
// import { creatBlogPostService } from "../src/service/blogPost.service";
// import { jest } from "@jest/globals";

// // jest.mock("../src/service/blogPost.service");

// describe("createBlogPostController", () => {
//   it("should return a successful response with the correct data", async () => {
//     const req = {
//       body: {
//         heading: "Sample Heading",
//         subheading: "Sample Subheading",
//         detail: "Sample Detail",
//       },
//     };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     // Mock createBlogPostService function
//     const mockResult = {
//       /* Mocked result from the service */
//     };
//     creatBlogPostService.mockResolvedValue(mockResult);

//     // Call the controller function
//     await createBlogPostController(req, res);

//     // Check if the response was sent with the correct data
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({
//       data: mockResult,
//       res: "SUCCESS",
//       statusCode: 200,
//     });

//     // Optionally, you can also check if the service function was called with the correct data
//     expect(creatBlogPostService).toHaveBeenCalledWith(req.body);
//   });
// });
