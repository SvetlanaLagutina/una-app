import { Injectable } from '@angular/core';

@Injectable()
export class CityService {
    getData() {
        return [
            { name: 'Астрахань', code: 'AN' },
            { name: 'Воронеж', code: 'VRN' },
            { name: 'Нижний Новгород', code: 'NN' },
            { name: 'Москва', code: 'MSK' },
            { name: 'Сочи', code: 'SCH' },
        ];
    }

    getCities() {
        return Promise.resolve(this.getData());
    }
};