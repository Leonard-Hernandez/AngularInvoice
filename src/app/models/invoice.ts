import { Client } from "./client";
import { Company } from "./company";

export class invoice {
    id!: number;
    name!: string;
    client!: Client;
    company!: Company;
    items!: any;
}