import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Types } from "mariadb";
import { ruta } from "./ruta.entity";
import { cliente } from "./cliente.entity";

@Entity()
export class cliente_en_ruta {
    @PrimaryGeneratedColumn()
    id_cliente_en_ruta: number;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_cliente_en_ruta: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_cliente_en_ruta: Types.TIME;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_actualizacion_cliente_en_ruta: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_actualizacion_cliente_en_ruta: Types.TIME;

    @Column({ type: "int", nullable: false })
    ruta_cliente_en_ruta: Types.INT24;

    @Column({ type: "int", nullable: false })
    cliente_cliente_en_ruta: Types.INT24;

    @ManyToOne(type => cliente, clientes => clientes.clientesRuta)
    @JoinColumn({ name: 'cliente_cliente_en_ruta', referencedColumnName: 'id_cliente' })
    cliente: cliente;

    @ManyToOne(type => ruta, rutas => rutas.clienteRutas)
    @JoinColumn({ name: 'ruta_cliente_en_ruta', referencedColumnName: 'id_ruta' })
    ruta: ruta;
}