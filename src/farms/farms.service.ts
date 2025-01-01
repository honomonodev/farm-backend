import { Injectable } from '@nestjs/common';

@Injectable()
export class FarmsService {
    private farms = [
        {
            id: 1,
            name: 'Hippie Huerto',
        },
        {
            id: 2,
            name: 'Bai San',
        },
        {
            id: 3,
            name: 'La Granja del Paco',
        },
        {
            id: 4,
            name: 'El Campo del Pepito',
        },
    ];

    findAll() {
        return this.farms;
    }

    findOneById(id: number) {
        const farm = this.farms.find(farm => farm.id === id);
        return farm;
    }
}