import { Connection, Repository } from 'typeorm';
import { usuarios } from  '../models/usuarios.entity';
import { cliente } from 'src/models/cliente.entity';

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