import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Types } from "mariadb";
import { cobrador } from "./cobrador.entity";
import { ruta } from "./ruta.entity";

@Entity()
export class cobrador_en_ruta {
    @PrimaryGeneratedColumn()
    id_cobrador_en_ruta: number;

    @Column({ default: '2000-01-01', nullable: false })
    fecha_registro_cobrador_en_ruta: Date;

    @Column({ default: '00:00:00', nullable: false })
    hora_registro_cobrador_en_ruta: Types.TIME;

    @Column({ default: '2000-01-01', nullable: false })
    fecha_actualizacion_cobrador_en_ruta: Date;

    @Column({ default: '00:00:00', nullable: false })
    hora_actualizacion_cobrador_en_ruta: Types.TIME;

    @Column({ nullable: false })
    ruta_cobrador_en_ruta: Types.INT24;

    @Column({ nullable: false })
    cobrador_cobrador_en_ruta: Types.INT24;

    @ManyToOne(type => cobrador, cobradores => cobradores.rutas)
    @JoinColumn({name: 'cobrador_cobrador_en_ruta' , referencedColumnName: 'id_cobrador'})
    cobrador: cobrador;

    @ManyToOne(type => ruta, rutas => rutas.cobradorRutas)
    @JoinColumn({ name: 'ruta_cobrador_en_ruta' , referencedColumnName: 'id_ruta'})
    ruta: ruta;
}