'use server';
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient();

    console.log('LATEST_PRODUCTS_LIMIT:', LATEST_PRODUCTS_LIMIT); // Debug

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: "desc"
        }
    })

    return convertToPlainObject(data);
}