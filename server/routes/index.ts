import { Routes, response, routing } from "kretes";

const { OK } = response;
const {
  route: { GET, POST },
} = routing;

import { ssr } from "../handlers";

export const routes: Routes = [
  // implicit `return` with a `text/plain` response
  GET("/", ssr),
  GET("/hello", (_) => "Hello, Kretes!"),
  POST("/bim", (request) => {
    // request body is parsed in `params` by default
    return `Hello POST! ${request.params.name}`;
  }),
];
