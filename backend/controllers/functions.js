const users = require("../models/UserModel.js");
const app = require("../server.js");
const hackathons = require("../models/HackathonModel.js");
const teams = require("../models/TeamModel.js");
const jwt = require("jsonwebtoken");

const gethackathonPage = (req, res) => {
  res.send("hackathons ");
};

//using postman only :
const postnewHackathon = async (req, res) => {
  const hackathon = await hackathons.create(req.body);
  res.json({ hackathon: hackathon, msg: "Created successf-ully" });
  console.log("hackathon created");
};

const getOnehackathon = async (req, res) => {
  const { hack_id } = req.params;
  try {
    const hackathon = await hackathons.findById(hack_id);
    if (!hackathon) {
      return res.status(500).send("Hackathon not found");
    }
    res.status(200).send(hackathon);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

const postUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await users.create({
    username,
    password,
  });
  console.log("user created");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  res.status(200).json({
    user_id: user._id,
    msg: "User Signed Up Successfully",
    token: token,
  });
};

const getUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await users.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "User not Found" });
    }
    const isPasswordValid = password === user.password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token: token,
      username: user.username,
      message: "user logged in successfully",
      user_id: user._id,
    });
    console.log("user logged in");
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("token:", token);
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token expired or invalid" });
    }
    req.user = user;
    console.log("authenticaton succesfull!!!", user);
    next();
  });
};

const postUserDetails = async (req, res) => {
  const { specialization, institute } = req.body;
  const user = await users.findByIdAndUpdate(
    req.user.id,
    { specialization, institute },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    username: user.username,
  });
  console.log("institute and specialization added");
};

const getUserHomePage = async (req, res) => {
  const user = await users.findById(req.user.id);
  res.status(200).send(user);
};

const postTeamCreation = async (req, res) => {
  const { Team_name } = req.body;
  if (!Team_name) {
    return res.status(400).json({ error: "Team_name is required" });
  }

  const { hack_id } = req.params;
  const TeamLeader_id = req.user.id;
  const TeamLeader = await users.findById(TeamLeader_id);
  const hackathon = await hackathons.findById(hack_id);
  const team = await teams.create({
    Hackathon_id: hackathon._id,
    Team_name,
    Team_leader: TeamLeader.username,
  });
  team.Team_members.push(TeamLeader.username);
  await team.save();

  TeamLeader.my_hackathons.hackathons.push(hackathon.name);
  await TeamLeader.save();
  res.status(200).json({
    teamid: team._id,
    teamleader: TeamLeader.username,
    teamname: Team_name,
    teammembers: team.Team_members,
  });
  console.log("team created!!");
};

const getTeamDetails = async (req, res) => {
  const { team_id } = req.params;
  const team = await teams.findById(team_id);
  res.send(team);
  console.log("team details sent");
};

const SearchMembers = async (req, res) => {
  const { specialization, institute } = req.body;
  const usersArray = await users
    .find({ specialization, institute })
    .select("username specialization institute");

  console.log(usersArray);
  res.status(200).send(usersArray);
  console.log("users sent successfully");
};

const RequestMembers = async (req, res) => {
  const { user_id, team_id, hack_id } = req.params;
  const team = await teams.findById(team_id);
  const hackathon = await hackathons.findById(hack_id);
  const updateUser = await users.findByIdAndUpdate(
    user_id,
    {
      $push: {
        "my_hackathons.requests": {
          team_name: team.Team_name,
          hackathon_name: hackathon.name,
        },
      },
    },
    { new: true, runValidators: true }
  );
  res.status(200).send({
    message: "request sent successfully",
    request: updateUser.my_hackathons.requests,
  });
  console.log("request sent successfully!!");
};

const HandleRequest = async (req, res) => {
  const user = await users.findById(req.user.id);
  const request = user.my_hackathons.requests[0];
  await users.findByIdAndUpdate(
    user._id,
    { $pull: { "my_hackathons.hackathons ": request.hackathon_name } },
    { new: true, runValidators: true }
  );
  const updated_team = await teams.findOneAndUpdate(
    { Team_name: request.team_name },
    { $pull: { Team_members: user.username } },
    { new: true, runValidators: true }
  );

  await users.findByIdAndUpdate(
    user._id,
    { $pull: { "my_hackathons.requests": {} } },
    { new: true, runValidators: true }
  );

  res.status(200).send({
    message: "request accepted successfully",
    updated_team: updated_team,
    my_hackathons: user.my_hackathons,
  });
};

const getMyHackathons = async (req, res) => {
  const user = await users.findById(req.user.id);
  res.send(user.my_hackathons);
  console.log("user's hackathons sent");
};

module.exports = {
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
};
