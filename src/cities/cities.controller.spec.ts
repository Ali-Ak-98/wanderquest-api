import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';

describe('CitiesController', () => {
  let controller: CitiesController;
  let citiesService: CitiesService;

  // Mock implementation of CitiesService
  const mockCitiesService = {
    getAllCities: jest.fn(),
    getCityByName: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [
        {
          provide: CitiesService,
          useValue: mockCitiesService,
        },
      ],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
    citiesService = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "City not found" if city does not exist', async () => {
    const result = await controller.getCityByName('Paris');
    expect(result).toEqual({ message: 'City not found' });
  });
});
