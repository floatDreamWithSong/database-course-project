import prisma from '../utils/prisma'

export default defineEventHandler(async (event) => {
  const method = event.method
  
  switch (method) {
    case 'GET':
      return await prisma.user.findMany()
      
    case 'POST':
      const body = await readBody(event)
      return await prisma.user.create({
        data: {
          name: body.name,
          email: body.email
        }
      })
      
    default:
      return { error: 'Method not allowed' }
  }
})

export const getUserById = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '')
  return await prisma.user.findUnique({
    where: { id }
  })
})

export const updateUser = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '')
  const body = await readBody(event)
  
  await prisma.user.update({
    where: { id },
    data: {
      name: body.name,
      email: body.email
    }
  })
  
  return { message: 'User updated successfully' }
})

export const deleteUser = defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '')
  
  await prisma.user.delete({
    where: { id }
  })
  
  return { message: 'User deleted successfully' }
})