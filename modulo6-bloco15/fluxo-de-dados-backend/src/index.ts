import express, { Request, response, Response } from "express";
import { AddressInfo } from "net";
import { products, Product } from './data'
import { v4 as generateId } from 'uuid';


const app = express();

app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  const productsArray = products

  res.status(200).send(productsArray)
})

//Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

const Errors: { [chave: string]: { status: number, message: string } } = {
  MISSING_PARAMETERS:
  {
    status: 400,
    message: "Alguma informação está faltando Consulte a documentação."
  },
  ERROR_TYPE_NAME:
  {
    status: 400,
    message: "Tipo esperado no nome: string."
  },
  ERROR_TYPE_PRICE:
  {
    status: 400,
    message: "Tipo esperado no preço: number."
  },
  ERROR_PRICE_VALUE:
  {
    status: 400,
    message: "Valor esperado no preço > 0 ."
  },
  PRODUCT_NOT_FOUND:
  {
    status: 404,
    message: "Produto não encontrado"
  },
  SOMETHING_WENT_WRONG:
  {
    status: 500,
    message: "Algo deu errado"
  },
}

app.post('/test', (req: Request, res: Response) => {
  try {
    const { name, price } = req.body

    if (!name || !price) {
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }
    if (typeof name !== 'string') {
      throw new Error(Errors.ERROR_TYPE_NAME.message)
    }
    if (typeof price !== 'number') {
      throw new Error(Errors.ERROR_TYPE_PRICE.message)
    }
    if (price < 0) {
      throw new Error(Errors.ERROR_PRICE_VALUE.message)
    }

    const newProduct: any = {
      id: generateId(),
      name: name,
      price: price
    }
    products.push(newProduct)
  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res.status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.ERROR_TYPE_NAME.message:
        res.status(Errors.ERROR_TYPE_NAME.status)
          .send(Errors.ERROR_TYPE_NAME.message);
        break;
      case Errors.ERROR_TYPE_PRICE.message:
        res.status(Errors.ERROR_TYPE_PRICE.status)
          .send(Errors.ERROR_TYPE_PRICE.message);
        break;
      case Errors.ERROR_PRICE_VALUE.message:
        res.status(Errors.ERROR_PRICE_VALUE.status)
          .send(Errors.ERROR_PRICE_VALUE.message)
        break;
      default:
        res.status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message)
    }
  }
  res.send('Produto adicionado!')
})

app.put('/test/:id/', (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { price } = req.body

    if (!price) {
      throw new Error(Errors.MISSING_PARAMETERS.message);
    }
    if (typeof price !== 'number') {
      throw new Error(Errors.ERROR_TYPE_PRICE.message)
    }
    if (price < 0) {
      throw new Error(Errors.ERROR_PRICE_VALUE.message)
    }

    products.map((product) => {
      if (product.id === id) {
        return product.price = price
      }
    })

  } catch (error: any) {
    switch (error.message) {
      case Errors.MISSING_PARAMETERS.message:
        res.status(Errors.MISSING_PARAMETERS.status)
          .send(Errors.MISSING_PARAMETERS.message);
        break;
      case Errors.ERROR_TYPE_PRICE.message:
        res.status(Errors.ERROR_TYPE_PRICE.status)
          .send(Errors.ERROR_TYPE_PRICE.message);
        break;
      case Errors.ERROR_PRICE_VALUE.message:
        res.status(Errors.ERROR_PRICE_VALUE.status)
          .send(Errors.ERROR_PRICE_VALUE.message)
        break;
      default:
        res.status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message)
    }
  }
  res.send(products)
})

// Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.
app.delete('/test/:id', (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    const productIndex = products.findIndex((product) => {
      return product.id === id
    })
    if (productIndex === - 1) {
      throw new Error(Errors.PRODUCT_NOT_FOUND.message)
    }
    products.splice(productIndex, 1)
  } catch (error: any) {
    switch (error.message) {
      case Errors.PRODUCT_NOT_FOUND.message:
        res.status(Errors.PRODUCT_NOT_FOUND.status)
          .send(Errors.PRODUCT_NOT_FOUND.message);
        break;
      default:
        res.status(Errors.SOMETHING_WENT_WRONG.status)
          .send(Errors.SOMETHING_WENT_WRONG.message)
    }
  }
  res.send(products)
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;