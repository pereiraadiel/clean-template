import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ExampleController from '../controllers/ExampleController';

const exampleRouter = Router();
const exampleController = new ExampleController();

const celebrateMask = {
  example: Joi.string().required(),
  hello: Joi.string(),
}

exampleRouter.post("/", celebrate({
  [Segments.BODY]: celebrateMask
}), exampleController.post
);

exampleRouter.get("/", exampleController.get);

export default exampleRouter;