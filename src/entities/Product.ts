import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { ProductCategory } from "./ProductCategory";

@Entity("product")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        nullable: false,
    })
    name: string;

    @Column({
        type: "numeric",
        nullable: false,
    })
    price: number;

    @ManyToOne(() => ProductCategory, (category) => category.product)
    @JoinTable({
        name: "productCategoryId",
    })
    productCategory: ProductCategory;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
