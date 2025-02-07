import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all cities', () => {
    const result = service.getAllCities();
    expect(result).toBeDefined();
  });

  it('should return a city by name', () => {
    const result = service.getCityByName('New York City');
    expect(result).toBeDefined();
  });

  it('should return null if city not found', () => {
    const result = service.getCityByName('Paris');
    expect(result).toEqual(undefined);
  });
});
