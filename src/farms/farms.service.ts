import { Injectable, NotFoundException } from '@nestjs/common';
import { Farm } from './interfaces/farm.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FarmsService {
    private farms: Farm[] = [
        {
            id: uuid(),
            name: 'Hippie Huerto',
            director: 'Makiko',
        },
        {
            id: uuid(),
            name: 'Bai San',
            director: 'Bai',
        },
        {
            id: uuid(),
            name: 'La Granja del Paco',
            director: 'Paco',
        },
        {
            id: uuid(),
            name: 'El Campo del Pepito',
            director: 'Pepe',
        },
        {
            id: uuid(),
            name: 'El Gallinero',
            director: 'Betty',
        },
    ];

    findAll() {
        return this.farms;
    }

    findOneById(id: string) {
        const farm = this.farms.find(farm => farm.id === id);
        if (!farm) {
            throw new NotFoundException(`Farm with id ${id} not found.`);}
        return farm;
        
    }
}