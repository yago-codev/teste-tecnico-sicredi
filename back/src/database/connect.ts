import { createConnection } from 'typeorm'

// essa função ele irá procurar o arquivo de configuração do typeorm
createConnection().then(() => console.log('Successfully connected with database'))