import { Request, Response } from "express";
import ExampleService from "@modules/example/services/ExampleService";

export default class ExampleController {
  public async post(req: Request, res: Response): Promise<Response> {
    const exampleService = new ExampleService();
    return res.json(await exampleService.execute(req.body));
  }

  public async get(_req: Request, res: Response): Promise<Response> {
    return res.json({
      message: "this is an example",
    });
  }
}
