const users = require("../models/UserModel.js");
const app = require("../server.js");
const hackathons = require("../models/HackathonModel.js");
const teams = require("../models/TeamModel.js");
const jwt = require("jsonwebtoken");

// const getLandingPage = (req, res) => {
//   res.send("homepage");
// };

const gethackathonPage = (req, res) => {
  res.send("hackathons ");
};

//using postman only :
const postnewHackathon = async (req, res) => {
  const hackathon = await hackathons.create(req.body);
  res.json({ hackathon: hackathon, msg: "Created successfully" });
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
  // await users.deleteMany({ email: null });
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
  res.status(200).send(user);
  console.log("institute and specialization added");
};

const getUserHomePage = async (req, res) => {
  const user = await users.findById(req.user.id);
  res.status(200).send(user);
};

const postTeamCreation = async (req, res) => {
  const { Team_name } = req.body;
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

  // Update the team with the Team_members field
  await team.save();

  // Add the hackathon name to the user's my-hackathon's page
  TeamLeader.my_hackathons.hackathons.push(hackathon.name);
  await TeamLeader.save();
  res.send(team);
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

  res.status(200).send(usersArray);
  console.log("users sent successfully");
};

const RequestMembers = async (req, res) => {
  const { user_id, team_id, hack_id } = req.params;
  const team = await teams.findById(team_id);
  const hackathon = await hackathons.findById(hack_id);
  users.findByIdAndUpdate(
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
  res.status(200).send("request sent successfully");
  console.log("request sent successfully!!");
};

const HandleRequest = async (req, res) => {
  const { Team_name, hackathon_name } = req.body;
  await users.findOneandUpdate(
    hackathon_name,
    { $pull: { "my_hackathons.hackathons ": hackathon_name } },
    { new: true, runValidators: true }
  );
  await users.findOneAndUpdate(hackathon_name, {
    $pull: { "my_hackathons.requests": {} },
  });
  const user = await users.find(req.user.id);
  const updated_team = await teams.findOneAndUpdate(
    Team_name,
    { $pull: { Team_members: user.username } },
    { new: true, runValidators: true }
  );
  res.status(200).send("request accepted successfully");
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
