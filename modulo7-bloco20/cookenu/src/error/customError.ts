export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado")
    }

}

export class invalidMakeFriendship extends CustomError{
    constructor(){
        super(401, "invalid the MakeFriendship is required to pass the query.")
    }
}

export class invalidBeFriendsAgain extends CustomError{
    constructor(){
        super(409, "You are already a friend of the user")
    }
}