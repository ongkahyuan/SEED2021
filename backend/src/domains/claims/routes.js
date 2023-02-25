const { Router } = require("express");

const {
  createUserClaims,
  getUserGeneralClaims,
  getUserSpecificClaims,
  updateUserClaim,
  deleteUserClaims,
} = require("./controller");

const router = Router();

router.post("/", createUserClaims);
router.get("/", getUserGeneralClaims);
router.get("/:claimId", getUserSpecificClaims);
router.patch("/", updateUserClaim);
router.delete("/", deleteUserClaims);

module.exports = router;
