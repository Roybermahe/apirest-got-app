import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mariadb',
      host: '45.236.130.73',
      port: 3306,
      username: 'admin_remoto',
      password: '19gota_a_gota',
      database: 'gota_a_gota',
      entities: [
          'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];