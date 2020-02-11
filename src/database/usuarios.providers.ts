import { Connection, Repository } from 'typeorm';
import { usuarios } from  '../models/usuarios.entity';

export const usuariosProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(usuarios),
    inject: ['DATABASE_CONNECTION'],
  },
];