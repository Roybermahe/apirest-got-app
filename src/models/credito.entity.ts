import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Types } from "mariadb";
import { cliente } from "./cliente.entity";
import { cobrador } from "./cobrador.entity";
import { abono } from "./abono.entity";

@Entity()
export class credito {
    @PrimaryGeneratedColumn()
    id_credito: number;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    valor_credito: number;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    valor_abonado_credito: number;

    @Column({ type: "decimal", scale: 2, precision: 2, default: 0.00, nullable: false })
    valor_restante_credito: number = (this.valor_credito - this.valor_abonado_credito);

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_registro_credito: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_registro_credito: Types.TIME;

    @Column({ type: "date", default: '2000-01-01', nullable: false })
    fecha_actualizacion_credito: Date;

    @Column({ type: "time", default: '00:00:00', nullable: false })
    hora_actualizacion_credito: Types.TIME;

    @Column({ type: "int", default: 1, nullable: false })
    cliente_credito: Types.INT24;

    @Column({ type: "int", nullable: true })
    registrado_por_credito: Types.INT24;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    porcentaje_credito: number;

    @Column({ type: "int", default: 0, nullable: false })
    pago_a_credito: Types.INT24;

    @Column({ type: "int", default: 0, nullable: false })
    cancelado_credito: Types.INT24;

    @Column({ type: "int", default: 0, nullable: false })
    eliminado_credito: Types.INT24;

    @Column({ type: "int", default: 0, nullable: false })
    numero_cuotas_credito: number;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    gasto_papeleria: Types.DECIMAL;

    @Column({ type: "varchar", length: 120, default: '', nullable: false })
    observaciones: string;

    @Column({ type: "int", default: 0, nullable: false })
    cuotas_pagas_credito: Types.INT24;

    @Column({ type: "decimal", scale: 2, precision: 15, default: 0.00, nullable: false })
    valor_cuota_credito: number = ((this.valor_restante_credito*(this.porcentaje_credito/100)) + this.valor_restante_credito) / this.numero_cuotas_credito;

    @Column({ type: "int", default: 0, nullable: false })
    numero_cuotas_canceladas_credito: Types.INT24;

    @Column({ type: "date", nullable: true })
    fecha_ultimo_pago: Date;

    @Column({ type: "time", nullable: true })
    hora_ultimo_pago: Types.TIME;

    @Column({ type: "time", nullable: true })
    fecha_paso_credito: Types.TIME;

    @ManyToOne(type => cobrador, cobrador => cobrador.creditos)
    @JoinColumn({ name: 'registrado_por_credito', referencedColumnName: 'id_cobrador' })
    CobradorCredito: cobrador;

    @ManyToOne(type => cliente, cliente => cliente.credito)
    @JoinColumn({ name: 'cliente_credito', referencedColumnName: 'id_cliente' })
    ClienteCredito: cliente;

    @OneToMany(type => abono, abonos => abonos.credito)
    Abonos: abono[];
}