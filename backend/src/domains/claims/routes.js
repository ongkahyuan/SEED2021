const { Router } = require("express");

const { getUserClaims } = require("./controller");

const router = Router();

// router.post("/claims", null);
router.get("/claims", getUserClaims);
// router.patch("/claims", null);
// router.delete("/claims", null);

module.exports = router;
