import { PrismaClient, Prisma } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

// 1: Define a type that includes the relation to `Post`
const productWithAll = Prisma.validator<Prisma.ProductArgs>()({
  include: { productOptions: true, productImages: true },
});

type IProduct = Prisma.ProductGetPayload<typeof productWithAll>;
