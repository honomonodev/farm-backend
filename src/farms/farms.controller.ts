import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';


@Controller('farms')

export class FarmsController {
constructor(private readonly farmsService: FarmsService) {}
    
    @Get()
    findAllFarms() {
        return this.farmsService.findAll();
    }

    @Get(':id')
    getFarmById(@Param('id', new ParseUUIDPipe({version:'4'})) id: string) {
        
      return this.farmsService.findOneById(id);
    }

    @Post()

    createFarm(@Body() createFarmDto: CreateFarmDto) {
        return this.farmsService.create(createFarmDto);
    }

    @Patch(':id')
    updateFarm(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateFarmDto: UpdateFarmDto) 
        {
        return this.farmsService.update(id, updateFarmDto);
        }

    @Delete(':id')
    deleteFarm(@Param('id', ParseIntPipe) id: number) {
       
        return {
            method: 'delete',
            id,

        };
    }
}
