const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
    const newCustomer = await prisma.customer.create({
        data:{
            firstName: "Tony",
            lastName: "Stark",
            dateOfBirth: new Date("1986-05-24")
        },
    })
  const allCustomers = await prisma.customer.findMany()
  console.log(allCustomers)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })