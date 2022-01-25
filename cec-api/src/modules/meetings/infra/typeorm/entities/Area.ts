import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Pillar } from './Pillar';

@Entity("areas")
class Area {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Pillar)
    @JoinColumn({ name: "pillar_id" })
    pillar: Pillar;

    @Column()
    pillar_id: string;

    @CreateDateColumn() 
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
};

export { Area };