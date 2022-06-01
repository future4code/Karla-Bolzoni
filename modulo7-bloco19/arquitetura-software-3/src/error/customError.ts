export class CustomError extends Error {
  constructor (statusCode: number, message: string) {
    super(message)
  }
}

export class InvalidName extends CustomError{
  constructor(){
    super(400, "Nome precisa conter mais três letras ou mais.")
  }
}

export class InvalidEmail extends CustomError{
  constructor(){
    super(400, "Email inválido. Esperado email@email")
  }
}


export class InvalidPassword extends CustomError{
  constructor(){
    super(400, "Senha precisa ter no mínimo 6 dígitos")
  }
}