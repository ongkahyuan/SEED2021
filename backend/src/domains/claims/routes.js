const { Router } = require("express");

const {
  createUserClaims,
  getUserGeneralClaims,
  getUserSpecificClaims,
  updateUserClaim,
  deleteUserClaims,
} = require("./controller");

const router = Router();

router.post("/claims", createUserClaims);
router.get("/claims", getUserGeneralClaims);
router.get("/claims/:claimId", getUserSpecificClaims);
router.patch("/claims", updateUserClaim);
router.delete("/claims", deleteUserClaims);

module.exports = router;
