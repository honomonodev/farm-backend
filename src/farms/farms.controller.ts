import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FarmsService } from './farms.service';

@Controller('farms')
export class FarmsController {
constructor(private readonly farmsService: FarmsService) {}
    
    @Get()
    findAll() {
        return this.farmsService.findAll();
    }

    @Get(':id')
    getFarmById(@Param('id', ParseIntPipe) id: number) {
        console.log({id});
      return this.farmsService.findOneById(id);
    }
}
