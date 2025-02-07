import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CitiesService {
  private cities;

  constructor() {
    const data = fs.readFileSync('src/data/cities.json', 'utf8');
    this.cities = JSON.parse(data).cities;
  }

  getAllCities(filters?: any) {
    let filteredCities = this.cities;

    // Filter by continent
    if (filters?.continent) {
      filteredCities = filteredCities.filter(
        (city) =>
          city.continent.toLowerCase() === filters.continent.toLowerCase(),
      );
    }

    // Filter by minimum population
    if (filters?.minPopulation) {
      filteredCities = filteredCities.filter(
        (city) =>
          parseInt(city.population, 10) >= parseInt(filters.minPopulation, 10),
      );
    }

    // Filter by maximum population
    if (filters?.maxPopulation) {
      filteredCities = filteredCities.filter(
        (city) =>
          parseInt(city.population, 10) <= parseInt(filters.maxPopulation, 10),
      );
    }

    // Filter by landmark
    if (filters?.landmark) {
      filteredCities = filteredCities.filter((city) =>
        city.landmarks.some((l) =>
          l.toLowerCase().includes(filters.landmark.toLowerCase()),
        ),
      );
    }

    return filteredCities;
  }

  getCityByName(name: string) {
    return this.cities.find(
      (city) => city.name.toLowerCase() === name.toLowerCase(),
    );
  }
}
