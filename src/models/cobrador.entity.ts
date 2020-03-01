import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mariadb";
import { gasto } from "./gasto.entity";
import { cobrador_en_ruta } from "./cobradorRuta.entity";
import { credito } from "./credito.entity";
import { abono } from "./abono.entity";


@Entity()
export class cobrador {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id_cobrador: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, nullable: false, unique: true, charset: 'utf8', default: '' })
    numero_identificacion_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 60, nullable: false })
    nombre_cuenta_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 250, default: '', nullable: false })
    contraseña_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, charset: 'utf8', default: '', nullable: false })
    primer_nombre_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, charset: 'utf8', default: '', nullable: false })
    segundo_nombre_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, charset: 'utf8', default: '', nullable: false })
    primer_apellido_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, charset: 'utf8', default: '', nullable: false })
    segundo_apellido_cobrador: string;

    @ApiProperty()
    @Column({ type: "int", width: 11, default: 0, comment: '0 femenino 1 masculino' })
    genero_cobrador: Types.INT24;

    @ApiProperty()
    @Column({ type: "varchar", length: 60, charset: 'utf8', default: '', nullable: false })
    direccion_cobrador: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 20, charset: 'utf8', default: '', nullable: false })
    telefono_cobrador: string;

    @ApiProperty()
    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_nacimiento_cobrador: Date;

    @ApiProperty()
    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_cobrador: Date;

    @ApiProperty()
    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_cobrador: Types.TIME;

    @ApiProperty()
    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_actualizacion_cobrador: Date;

    @ApiProperty()
    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_actualizacion_clobrador: Types.TIME;

    @ApiProperty()
    @Column({ type: "int", default: 1, nullable: false, comment: '0 con permisos 1 sin permisos' })
    estado_cobrador: Types.INT24;

    @ApiProperty()
    @Column({ type: "tinyint", default: 0, nullable: false, comment: '0 cobrador 1 administrador' })
    uni: Types.TINY;

    @OneToMany(type => gasto, gastos => gastos.cobrador)
    gastos: gasto[];

    @OneToMany(type => cobrador_en_ruta, cobradorRutas => cobradorRutas.cobrador)
    rutas: cobrador_en_ruta[];

    @OneToMany(type => credito, credito => credito.CobradorCredito)
    creditos: credito[];

    @OneToMany(type => abono, abonos => abonos.cobrador)
    abonos: abono[];
}