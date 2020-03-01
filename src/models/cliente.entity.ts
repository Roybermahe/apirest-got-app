import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm";
import { Types } from "mariadb";
import { ApiProperty } from "@nestjs/swagger";
import { cliente_en_ruta } from "./clienteRuta.entity";
import { credito } from "./credito.entity";

@Entity()
export class cliente {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, unique: true })
    numero_identificacion_cliente: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    primer_nombre_cliente: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    segundo_nombre_cliente: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    primer_apellido_cliente: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    segundo_apellido_cliente: string;

    @ApiProperty()
    @Column({ type: "int", width: 11 })
    genero_cliente: Types.INT24;

    @ApiProperty()
    @Column({ type: "varchar", length: 60 })
    direccion_cliente: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    telefono_cliente: string;

    @ApiProperty()
    @Column({ type: "date" })
    fecha_nacimiento_cliente: Date;

    @ApiProperty()
    @Column({ type: "date" })
    fecha_registro_cliente: Date;

    @ApiProperty()
    @Column({ type: "time" })
    hora_registro_cliente: Types.TIME;

    @ApiProperty()
    @Column({ type: "date" })
    fecha_actualizacion_cliente: Date;

    @ApiProperty()
    @Column({ type: "time" })
    hora_actualizacion_cliente: Types.TIME;

    @OneToMany(type => cliente_en_ruta, clienteRuta => clienteRuta.cliente)
    clientesRuta: cliente_en_ruta[];

    @OneToMany(type => credito, credito => credito.ClienteCredito)
    credito: credito[];
}