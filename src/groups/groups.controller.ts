import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { GroupsService } from './groups.service'
// import { CreateGroupDto } from './dto/create-group.dto';
// import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto) {
    return this.groupsService.create(createGroupDto)
  }

  @Get()
  findAll() {
    return this.groupsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.groupsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateGroupDto) {
    return this.groupsService.update(id, updateGroupDto)
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.groupsService.remove(id)
  }
}
