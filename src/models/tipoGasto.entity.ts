import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Types } from "mariadb";
import { gasto } from "./gasto.entity";

@Entity()
export class tipo_gasto {
    @PrimaryGeneratedColumn()
    id_tipo_gasto: number;

    @Column({ type: "varchar", length: 45, charset: 'utf8', default: '' })
    nombre_tipo_gasto: string;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_tipo_gasto: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_tipo_gasto: Types.TIME;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_actualizacion_tipo_gasto: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_actualizacion_tipo_gasto: Types.TIME;

    @OneToMany(type => gasto, gastos => gastos.tipo_gasto)
    GastosAsociados: gasto[];
}