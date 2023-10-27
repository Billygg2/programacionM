import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('categories',{schema:'ventas'})

export class CategoryEntity
{
@PrimaryGeneratedColumn('uuid')
id:string;

@CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
createAt: Date;

@UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default:() => 'CURRENT_TIMESTAMP',
})
updateAt: Date;

@DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
})
deleteAt: Date;

@OneToMany(() => ProductEntity, product => product.category )
products:ProductEntity[];


@Column('varchar',{
    name: 'title',
    nullable: false,
    comment: 'category name',
})
title:string;

@Column('varchar',{
    name: 'descripcion',
    nullable: true,
    comment: 'category descripcion',
})
description: string;

@BeforeInsert()
@BeforeUpdate()
async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.split('').reverse().join('');
}

@BeforeInsert()
@BeforeUpdate()
async setDescription() {
    if (!this.description) {
        return;
    }
    this.description = this.description.substring(0, 2).toUpperCase();
}

}