import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class usuarios {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    Id?: number;

    @ApiProperty()
    @Column({ length: 20 })
    User: string;

    @ApiProperty()
    @Column({ length: 300 })
    Pass: string;

    @ApiProperty()
    @Column({ length: 3 })
    Type?: string;
}