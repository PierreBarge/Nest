import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import User from './entities/user.model';
import { FilterService } from './filter/filter.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly filterService: FilterService,
  ) {}

  @Get()
  getHelloWorld(): string {
    return this.appService.getHello();
  }

  @Get('/hello/:name')
  getHello(@Param('name') name: string): string {
    return `Hello ${name}!`;
  }

  @Post('/hello')
  postHello(@Body() body: User[], @Query('name') name: string): User[] {
    return this.filterService.filterUsers(body, name);
  }
}
