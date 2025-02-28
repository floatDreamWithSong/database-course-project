import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '')
  const method = event.method

  switch (method) {
    case 'GET':
      return await prisma.user.findUnique({
        where: { id }
      })

    case 'PUT':
      const updateBody = await readBody(event)
      return await prisma.user.update({
        where: { id },
        data: {
          name: updateBody.name,
          email: updateBody.email
        }
      })

    case 'DELETE':
      return await prisma.user.delete({
        where: { id }
      })

    default:
      return { error: 'Method not allowed' }
  }
})