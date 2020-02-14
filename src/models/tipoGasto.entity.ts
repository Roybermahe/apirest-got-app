import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Types } from "mariadb";

@Entity()
export class tipo_gasto {
    @PrimaryGeneratedColumn()
    id_tipo_gasto: number;

    @Column({ length: 45, charset: 'utf8', default: ''})
    nombre_tipo_gasto: string;

    @Column({ default: '2000-01-01' , nullable: false})
    fecha_registro_tipo_gasto: Date;

    @Column({ default: '00:00:00' , nullable: false})
    hora_registro_tipo_gasto: Types.TIME;

    @Column({ default: '2000-01-01' , nullable: false})
    fecha_actualizacion_tipo_gasto: Date;

    @Column({ default: '00:00:00' , nullable: false})
    hora_actualizacion_tipo_gasto: Types.TIME;
}