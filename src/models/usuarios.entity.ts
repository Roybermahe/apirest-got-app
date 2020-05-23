import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class usuarios {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    Id?: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 20 })
    User: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 300 })
    Pass: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 3 })
    Type?: string;
}