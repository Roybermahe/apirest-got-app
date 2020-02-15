import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToMany } from "typeorm";
import { Types } from "mariadb";
import { ApiProperty } from "@nestjs/swagger";
import { cliente_en_ruta } from "./clienteRuta.entity";

@Entity()
export class cliente {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @ApiProperty()
    @Column({ length: 20 , unique: true})
    numero_identificacion_cliente: string;

    @ApiProperty()
    @Column({ length: 20 })
    primer_nombre_cliente: string;

    @ApiProperty()
    @Column({ length: 20 })
    segundo_nombre_cliente: string;

    @ApiProperty()
    @Column({ length: 20 })
    primer_apellido_cliente: string;

    @ApiProperty()
    @Column({ length: 20 })
    segundo_apellido_cliente: string;

    @ApiProperty()
    @Column({ length: 11 })
    genero_cliente: Types.INT24;

    @ApiProperty()
    @Column({ length: 60 })
    direccion_cliente: string;

    @ApiProperty()
    @Column({ length: 20 })
    telefono_cliente: string;

    @ApiProperty()
    @Column()
    fecha_nacimiento_cliente: Date;

    @ApiProperty()
    @Column()
    fecha_registro_cliente: Date;

    @ApiProperty()
    @Column()
    hora_registro_cliente: Types.TIME;

    @ApiProperty()
    @Column()
    fecha_actualizacion_cliente: Date;

    @ApiProperty()
    @Column()
    hora_actualizacion_cliente: Types.TIME;

    @OneToMany(type => cliente_en_ruta, clienteRuta => clienteRuta.cliente)
    clientesRuta: cliente_en_ruta[];
}