const  {Router} = require("express")
const auth = require("../middlewares/user.auth")

const {getUsers, createUser, getUser} = require("../controllers/usersController")

const router = Router();
router.route("/users").get(auth, getUsers)
router.post("/register", createUser)
router.get("/users/:id", auth, getUser)




module.exports = router;