import { Character } from './character'

export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};

export interface ValidateCharacterOutput {
  isValid: boolean,
  errors: ValidateCharacterError[]
}

interface ValidateCharacterError {
  key: string,
  value: string
}