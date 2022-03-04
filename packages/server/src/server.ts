import fastify from 'fastify'
const server = fastify({
  logger: true
})

const PORT = process.env.PORT || 3001

server.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
})

server.listen(PORT, (err, address) => {
  if (err) throw err
  server.log.info(`server listening on ${address}`)
})
