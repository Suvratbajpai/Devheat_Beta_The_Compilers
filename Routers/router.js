const express = require("express");
const {
  postUser,
  getUser,
  authenticateToken,
  postUserDetails,
  getUserHomePage,
  gethackathonPage,
  getMyHackathons,
  getOnehackathon,
  postTeamCreation,
  getTeamDetails,
  SearchMembers,
  RequestMembers,
  HandleRequest,
  postnewHackathon,
} = require("../controllers/functions");

const router = express.Router();
router.route("/signup").post(postUser);
router.route("/login").post(getUser);
router.route("/form").patch(authenticateToken, postUserDetails);
router.route("/userpage").get(authenticateToken, getUserHomePage);
router.route("/my-hackathons").get(authenticateToken, getMyHackathons);
router.route("/my-hackathons/requests").patch(authenticateToken, HandleRequest);
router.route("/hackathons").get(gethackathonPage);
router.route("/hackathons/:hack_id").get(authenticateToken, getOnehackathon);
router
  .route("/hackathons/:hack_id/application")
  .post(authenticateToken, postTeamCreation);
router
  .route("/hackathons/:hack_id/:team_id")
  .get(authenticateToken, getTeamDetails),
  router
    .route("/hackathons/:hack_id/:team_id/search")
    .post(authenticateToken, SearchMembers);
router
  .route("/hackathons/:hack_id/:team_id/search/:user_id")
  .patch(authenticateToken, RequestMembers);

router.route("/hackathons").post(postnewHackathon); //posted using postman
module.exports = router;
