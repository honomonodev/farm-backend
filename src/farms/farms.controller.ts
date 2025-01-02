import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { FarmsService } from './farms.service';


@Controller('farms')
export class FarmsController {
constructor(private readonly farmsService: FarmsService) {}
    
    @Get()
    findAllFarms() {
        return this.farmsService.findAll();
    }

    @Get(':id')
    getFarmById(@Param('id', ParseIntPipe) id: number) {
        
      return this.farmsService.findOneById(id);
    }

    @Post()
    createFarm(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    updateFarm(
        @Param('id', ParseIntPipe) id: number, 
        @Body() body: any) 
        {
        return body;
        }

    @Delete(':id')
    deleteFarm(@Param('id', ParseIntPipe) id: number) {
       
        return {
            method: 'delete',
            id,

        };
    }
}
