import { Connection, Repository } from 'typeorm';
import { usuarios } from  '../models/usuarios.entity';
import { cliente } from 'src/models/cliente.entity';
import { cobrador } from 'src/models/cobrador.entity';
import { ruta } from 'src/models/ruta.entity';
import { tipo_gasto } from 'src/models/tipoGasto.entity';

export const usuariosProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(usuarios),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const clientesProviders = [
  {
    provide: 'CLIENTES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(cliente),
    inject: ['DATABASE_CONNECTION'],
  },
];

export const cobradorProviders = [
  {
    provide: 'COBRADOR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(cobrador),
    inject: ['DATABASE_CONNECTION']
  }
];

export const rutasProvider = [
  {
    provide: 'RUTA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ruta),
    inject: ['DATABASE_CONNECTION']
  }
];

export const TiposDeGastoProvider = [
  {
    provide: 'TIPO_GASTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(tipo_gasto),
    inject: ['DATABASE_CONNECTION']
  }
];