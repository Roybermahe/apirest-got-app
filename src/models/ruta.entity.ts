import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Types } from "mariadb";
import { ApiProperty } from "@nestjs/swagger";
import { cliente_en_ruta } from "./clienteRuta.entity";
import { cobrador_en_ruta } from "./cobradorRuta.entity";


@Entity()
export class ruta {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_ruta: number;

    @ApiProperty()
    @Column({ length: 60, charset: 'utf8', default: '', nullable: false})
    nombre_ruta: string;

    @ApiProperty()
    @Column({ default: '2000-01-01', nullable: false})
    fecha_registro_ruta: Date;

    @ApiProperty()
    @Column({ default: '00:00:00', nullable: false})
    hora_registro_ruta: Types.TIME;

    @ApiProperty()
    @Column({ default: '2000-01-01', nullable: false})
    fecha_actualizacion_ruta: Date;

    @ApiProperty()
    @Column({ default: '00:00:00', nullable: false})
    hora_actualizacion_ruta: Types.TIME;

    @ApiProperty()
    @Column({ default: 0, nullable: false})
    numero_clientes_ruta: Types.INT24;
    
    @ApiProperty()
    @Column({ default: 0, nullable: false})
    numero_cobradores_ruta: Types.INT24;

    @OneToMany(type => cliente_en_ruta, clienteRutas => clienteRutas.ruta)
    clienteRutas: cliente_en_ruta[];

    @OneToMany(type => cobrador_en_ruta, cobradorRutas => cobradorRutas.ruta)
    cobradorRutas: cobrador_en_ruta[];
}