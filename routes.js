const { Router } = require("express")

const router = Router()

router.get("/apartamentos", (req, res) => {
    return res.json({
        mensagem: "Esta rota retorna todos os apartamentos!", apartamentos: [
            {
                id: crypto.randomUUID(),
                number: "1A",
                andarId: 1
            }
        ]
    })
})
router.get("/apartamentos/:id", (req, res) => {
    return res.json()
})

router.post("/apartamentos", (req, res) => {
    return res.json()
})

router.put("/apartamentos/:id", (req, res) => {
    return res.json()
})

router.delete("/apartamentos/:id", (req, res) => {
    return res.json()
})

module.exports = router