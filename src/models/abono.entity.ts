import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Types } from "mariadb";
import { credito } from "./credito.entity";
import { cobrador } from "./cobrador.entity";

@Entity()
export class abono {
    @PrimaryGeneratedColumn()
    id_abono: number;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    valor_abono: Types.DECIMAL;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_abono: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_abono: Types.TIME;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_actualizacion_abono: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_actualizacion_abono: Types.TIME;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_abono: Date;

    @Column({ type: "int", nullable: false })
    credito_abono: Types.INT24;

    @Column({ type: "int", nullable: false })
    cobrador_abono: Types.INT24;

    @Column({ type: "decimal", scale: 2, precision: 15, nullable: false })
    saldo_anterior: Types.DECIMAL;

    @ManyToOne(type => credito, credito => credito.Abonos)
    @JoinColumn({ name: 'credito_abono', referencedColumnName: 'id_credito' })
    credito: credito;

    @ManyToOne(type => cobrador, cobrador => cobrador.abonos)
    @JoinColumn({ name: 'cobrador_abono', referencedColumnName: 'id_cobrador' })
    cobrador: cobrador;
}