import { Controller, Get, Query, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getAllCities(
    @Query('continent') continent?: string,
    @Query('minPopulation') minPopulation?: string,
    @Query('maxPopulation') maxPopulation?: string,
    @Query('landmark') landmark?: string,
  ) {
    return this.citiesService.getAllCities({
      continent,
      minPopulation,
      maxPopulation,
      landmark,
    });
  }

  @Get(':name')
  getCityByName(@Param('name') name: string) {
    const city = this.citiesService.getCityByName(name);
    return city ? city : { message: 'City not found' };
  }
}
