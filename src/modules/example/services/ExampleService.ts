import ExampleDTO from "../dtos/ExampleDTO";
import ExampleViewDTO from "../views/dtos/ExampleViewDTO";

export default class ExampleService {
  constructor() {}

  public async execute(dto: ExampleDTO): Promise<ExampleViewDTO> {
    const response = {
      message: dto.hello === undefined ? `This is an example` : dto.hello,
    };
    return response;
  }
}
