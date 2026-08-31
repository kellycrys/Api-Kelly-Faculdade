import express from 'express'
import { alunosRoutes } from './rotas/alunos.js'
import { professoresRoutes } from './rotas/professor.js'
import { turmasRoutes } from './rotas/turmas.js'

const app = express ()
app.use(express.json())
app.use(alunosRoutes)
app.use(professoresRoutes)
app.use(turmasRoutes)

export default app