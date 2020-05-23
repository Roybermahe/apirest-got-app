import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Types } from "mariadb";
import { cobrador } from "./cobrador.entity";
import { tipo_gasto } from "./tipoGasto.entity";

@Entity()
export class gasto {
    @PrimaryGeneratedColumn()
    id_gasto: number;

    @Column({ type: "decimal", scale: 2, precision: 15,  default: 0, nullable: false })
    valor_gasto: number;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_gasto: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_gasto: Types.TIME;

    @Column({ type: "date", nullable: false })
    fecha_actualizacion_gasto: Date;

    @Column({ type: "time", nullable: false })
    hora_actualizacion_gasto: Types.TIME;

    @Column({ type: "int", nullable: false })
    tipo_gasto_gasto: number;

    @Column({ type: "int", nullable: false })
    cobrador_gasto: number;

    @Column({ type: "varchar", length: 120, nullable: true })
    comprobante_gasto: string;

    @Column({ type: "varchar", length: 120, nullable: false })
    descripcion_gasto: string;

    @ManyToOne(type => tipo_gasto, tipoGasto => tipoGasto.GastosAsociados)
    @JoinColumn({ name: "tipo_gasto_gasto", referencedColumnName: "id_tipo_gasto" })
    tipo_gasto: tipo_gasto;

    @ManyToOne(type => cobrador, cobrador => cobrador.gastos)
    @JoinColumn({ name: 'cobrador_gasto', referencedColumnName: "id_cobrador" })
    cobrador: cobrador;

}