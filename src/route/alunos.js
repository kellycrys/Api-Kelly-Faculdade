import { Router } from "express"
const controlador = require('../controlador/aluno-controller.js')

const router = Router()

router.get('/alunos', controlador.listar)
router.post('/alunos', controladro.criar)
router.put('/alunos/:id',controlador.editar)
router.delete('/alunos/:id', controlador.deletar)

export const router 