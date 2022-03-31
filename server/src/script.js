const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  //   const newCustomer = await prisma.customer.create({
  //       data:{
  //           firstName: "Tony",
  //           lastName: "Stark",
  //           dateOfBirth: new Date("1986-05-24")
  //       },
  //   })
  //   const newPolicy = await prisma.policy.create({
  //     data:{
  //       customer: {
  //         connect: {id: 1},
  //       },
  //       policyNumber: "100",
  //       provider: "Bajaj",
  //       insuranceType: "Liability",
  //       status: "Active",
  //       startDate: new Date("2022-02-21"),
  //       endDate: new Date("2024-02-21"),
  //       createdAt: new Date()
  //     }
  //   })

  // const allPolicies = await prisma.policy.findMany()

  // console.log(allPolicies)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })