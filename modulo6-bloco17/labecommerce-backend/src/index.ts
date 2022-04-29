import App from './app'
import { AddressInfo } from 'net'

const app = App()

const server = app.listen(process.env.PORT || 3004, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})