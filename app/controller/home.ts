import { Controller, Get, Context, EggAppConfig, IService, App, Param ,Ctx, UseInterceptors, ParseIntPipe, UsePipes  } from 'nbomb';

@Controller('home')
export default class HomeController {


  constructor(
    private ctx: Context,
    private app: App,
    private config: EggAppConfig,
    private service: IService,
  ){ }


  @Get(':id')
  @UsePipes(ParseIntPipe)
  async index(@Param("id") id: string) {

    return id + 1;
  }


}
