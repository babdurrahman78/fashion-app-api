import { Controller, Get, Param } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Get()

  @Public()
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return await this.userService.getUserById(id);
  }
}
