import { CreateExcuseUseCase } from './createExcuse/createExcuseUseCase';
import { GetAllExcusesUseCase } from './getAllExcuses/getAllExcusesUseCase';
import { GetExcuseByHttpCodeUseCase } from './getExcuseByHttpCode/getExcuseByHttpCodeUseCase';

export const UseCases = [
  CreateExcuseUseCase,
  GetAllExcusesUseCase,
  GetExcuseByHttpCodeUseCase,
];
