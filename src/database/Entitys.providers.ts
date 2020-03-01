import { Connection, Repository } from 'typeorm';
import { usuarios } from  '../models/usuarios.entity';
import { cliente } from 'src/models/cliente.entity';
import { cobrador } from 'src/models/cobrador.entity';
import { ruta } from 'src/models/ruta.entity';
import { tipo_gasto } from 'src/models/tipoGasto.entity';
import { gasto } from 'src/models/gasto.entity';
import { cliente_en_ruta } from 'src/models/clienteRuta.entity';
import { cobrador_en_ruta } from 'src/models/cobradorRuta.entity';
import { credito } from 'src/models/credito.entity';
import { abono } from 'src/models/abono.entity';

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

export const GastoProvider = [
  {
    provide: 'GASTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(gasto),
    inject: ['DATABASE_CONNECTION']
  }
];

export const ClienteRutaProvider = [
  {
    provide: 'CLIENTE_RUTA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(cliente_en_ruta),
    inject: ['DATABASE_CONNECTION']
  }
];

export const CobradorRutaProvider = [
  {
    provide: 'COBRADOR_RUTA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(cobrador_en_ruta),
    inject: ['DATABASE_CONNECTION']
  }
];

export const creditosProvider = [
  {
    provide: 'CREDITO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(credito),
    inject: ['DATABASE_CONNECTION']
  }
];

export const abonosProvider = [
  {
    provide: 'ABONO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(abono),
    inject: ['DATABASE_CONNECTION']
  }
];