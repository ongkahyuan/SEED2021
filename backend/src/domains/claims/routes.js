const { Router } = require("express");

const {
  createUserClaims,
  getUserClaims,
  updateUserClaim,
  deleteUserClaims,
} = require("./controller");

const router = Router();

router.post("/claims", createUserClaims);
router.get("/claims", getUserClaims);
router.patch("/claims", updateUserClaim);
router.delete("/claims", deleteUserClaims);

module.exports = router;
