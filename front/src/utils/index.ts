import { ValidationError } from 'yup';

interface IValidationErrors {
  [key: string]: string;
}

export const getValidationErrors = (
  errors: ValidationError,
): IValidationErrors => {
  const validationErrors: IValidationErrors = {};

  errors.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export const dateConverter = (date: Date): string => {
  const unformattedDate = new Date(date);

  const formattedDate = unformattedDate.toLocaleDateString();

  return formattedDate;
};
