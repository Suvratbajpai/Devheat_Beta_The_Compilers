import { useState } from "react";
import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function AfterSignup() {
  const [formData, setFormData] = useState({
    specialization: "",
    Institution: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { specialization, institute } = formData;

    try {
      const response = await fetch("http://localhost:5483/HackedIn/v1/form", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({ specialization, institute }),
      });

      if (response.status === 200) {
        const { username } = await response.json();
        localStorage.setItem("username", username);
        navigate(`/HackedIn/v1/userpage`);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 skills-institute">
        <label
          htmlFor="exampleDataList1"
          className="add_mem-formtext form-label"
        >
          Specialization :
        </label>
        <input
          className="mb-5 form-control"
          list="datalistOptions1"
          id="exampleDataList1"
          placeholder="Add Your Skills"
          name="specialization"
          onChange={handleChange}
        />
        <datalist id="datalistOptions1">
          <option value="JavaScript" />
          <option value="Python" />
          <option value="Java" />
          <option value="C++" />
          <option value="C#" />
          <option value="PHP" />
          <option value="Ruby" />
          <option value="Swift" />
          <option value="Kotlin" />
          <option value="Go" />
          <option value="TypeScript" />
          <option value="SQL" />
          <option value="HTML/CSS" />
          <option value="React" />
          <option value="Angular" />
          <option value="Vue.js" />
          <option value="Node.js" />
          <option value="Express.js" />
          <option value="Django" />
          <option value="Ruby on Rails" />
          <option value="Spring Boot" />
          <option value="ASP.NET" />
          <option value="RESTful API Design" />
          <option value="GraphQL" />
          <option value="DevOps" />
          <option value="Containerization (Docker, Kubernetes)" />
          <option value="Continuous Integration/Continuous Deployment (CI/CD)" />
          <option value="AWS" />
          <option value="Azure" />
          <option value="Google Cloud Platform (GCP)" />
          <option value="Database Management (MySQL, PostgreSQL, MongoDB)" />
          <option value="Front-End Development" />
          <option value="Back-End Development" />
          <option value="Full-Stack Development" />
          <option value="Mobile App Development" />
          <option value="Web Development" />
          <option value="Software Architecture" />
          <option value="Software Testing and QA" />
          <option value="Machine Learning" />
          <option value="Data Science" />
          <option value="Big Data" />
          <option value="Blockchain Development" />
          <option value="Game Development" />
          <option value="Cybersecurity" />
          <option value="UI/UX Design" />
          <option value="Scrum" />
          <option value="Version Control (Git)" />
          <option value="Android Development" />
          <option value="iOS Development" />
        </datalist>
        <label
          htmlFor="exampleDataList2"
          className="add_mem-formtext form-label"
        >
          Institution:
        </label>
        <input
          className="mb-5 form-control"
          list="datalistOptions2"
          id="exampleDataList2"
          placeholder="Add Your Institution"
          name="institute"
          onChange={handleChange}
        />
        <datalist id="datalistOptions2">
          <option value="Indian Institute of Technology Bombay (IIT Bombay)" />
          <option value="Indian Institute of Technology Delhi (IIT Delhi)" />
          <option value="Indian Institute of Technology Kanpur (IIT Kanpur)" />
          <option value="Indian Institute of Technology Madras (IIT Madras)" />
          <option value="Indian Institute of Technology Kharagpur (IIT Kharagpur)" />
          <option value="Indian Institute of Technology Roorkee (IIT Roorkee)" />
          <option value="Indian Institute of Technology Guwahati (IIT Guwahati)" />
          <option value="Indian Institute of Technology Hyderabad (IIT Hyderabad)" />
          <option value="Indian Institute of Technology Patna (IIT Patna)" />
          <option value="Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar)" />
          <option value="Indian Institute of Technology Gandhinagar (IIT Gandhinagar)" />
          <option value="Indian Institute of Technology Jodhpur (IIT Jodhpur)" />
          <option value="Indian Institute of Technology Ropar (IIT Ropar)" />
          <option value="Indian Institute of Technology Indore (IIT Indore)" />
          <option value="Indian Institute of Technology Mandi (IIT Mandi)" />
          <option value="Indian Institute of Technology Palakkad (IIT Palakkad)" />
          <option value="Indian Institute of Technology Tirupati (IIT Tirupati)" />
          <option value="Indian Institute of Technology Bhilai (IIT Bhilai)" />
          <option value="Indian Institute of Technology Goa (IIT Goa)" />
          <option value="Indian Institute of Technology Jammu (IIT Jammu)" />
          <option value="Indian Institute of Technology Dharwad (IIT Dharwad)" />
          <option value="National Institute of Technology Tiruchirappalli (NIT Trichy)" />
          <option value="National Institute of Technology Surathkal (NIT Surathkal)" />
          <option value="National Institute of Technology Warangal (NIT Warangal)" />
          <option value="National Institute of Technology Calicut (NIT Calicut)" />
          <option value="National Institute of Technology Rourkela (NIT Rourkela)" />
          <option value="National Institute of Technology Kurukshetra (NIT Kurukshetra)" />
          <option value="National Institute of Technology Durgapur (NIT Durgapur)" />
          <option value="National Institute of Technology Silchar (NIT Silchar)" />
          <option value="National Institute of Technology Jamshedpur (NIT Jamshedpur)" />
          <option value="National Institute of Technology Hamirpur (NIT Hamirpur)" />
          <option value="National Institute of Technology Agartala (NIT Agartala)" />
          <option value="National Institute of Technology Raipur (NIT Raipur)" />
          <option value="National Institute of Technology Patna (NIT Patna)" />
          <option value="National Institute of Technology Nagaland (NIT Nagaland)" />
          <option value="National Institute of Technology Srinagar (NIT Srinagar)" />
          <option value="National Institute of Technology Meghalaya (NIT Meghalaya)" />
          <option value="National Institute of Technology Manipur (NIT Manipur)" />
          <option value="National Institute of Technology Mizoram (NIT Mizoram)" />
          <option value="National Institute of Technology Arunachal Pradesh (NIT Arunachal Pradesh)" />
          <option value="Indian Institute of Information Technology Hyderabad (IIIT Hyderabad)" />
          <option value="Indian Institute of Information Technology Bangalore (IIIT Bangalore)" />
          <option value="Indian Institute of Information Technology Delhi (IIIT Delhi)" />
          <option value="Indian Institute of Information Technology Allahabad (IIIT Allahabad)" />
          <option value="Indian Institute of Information Technology Gwalior (IIIT Gwalior)" />
          <option value="Indian Institute of Information Technology Kancheepuram (IIIT Kancheepuram)" />
          <option value="Indian Institute of Information Technology Jabalpur (IIIT Jabalpur)" />
          <option value="Indian Institute of Information Technology Kurnool (IIIT Kurnool)" />
          <option value="Indian Institute of Information Technology Kota (IIIT Kota)" />
          <option value="Indian Institute of Information Technology Lucknow (IIIT Lucknow)" />
          <option value="BITS Pilani (Birla Institute of Technology and Science)" />
          <option value="Delhi Technological University (DTU)" />
          <option value="Vellore Institute of Technology (VIT)" />
          <option value="National Institute of Industrial Engineering (NITIE)" />
          <option value="Jamia Millia Islamia - Faculty of Engineering and Technology (JMI)" />
          <option value="Birla Institute of Technology, Mesra (BIT Mesra)" />
          <option value="Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad)" />
          <option value="College of Engineering, Pune (COEP)" />
          <option value="Indian School of Mines, Dhanbad (ISM Dhanbad)" />
          <option value="National Institute of Technology Surat (SVNIT Surat)" />
          <option value="Punjab Engineering College, Chandigarh (PEC Chandigarh)" />
          <option value="Thapar Institute of Engineering and Technology, Patiala (TIET Patiala)" />
          <option value="Visvesvaraya National Institute of Technology, Nagpur (VNIT Nagpur)" />
          <option value="Bengal Engineering and Science University, Shibpur (BESU Shibpur)" />
          <option value="Coimbatore Institute of Technology (CIT)" />
          <option value="Manipal Institute of Technology (MIT)" />
          <option value="RV College of Engineering (RVCE)" />
          <option value="National Institute of Technology Kurukshetra (NIT Kurukshetra)" />
          <option value="Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)" />
          <option value="Indian Institute of Information Technology Sri City (IIIT Sri City)" />
          <option value="Indian Institute of Information Technology Kottayam (IIIT Kottayam)" />
          <option value="Indian Institute of Information Technology Una (IIIT Una)" />
          <option value="Indian Institute of Information Technology, Vadodara (IIIT Vadodara)" />
          <option value="Indian Institute of Information Technology Pune (IIIT Pune)" />
          <option value="Indian Institute of Information Technology, Nagpur (IIIT Nagpur)" />
          <option value="Indian Institute of Information Technology Bhagalpur (IIIT Bhagalpur)" />
          <option value="Indian Institute of Information Technology Surat (IIIT Surat)" />
          <option value="Indian Institute of Information Technology Bhopal (IIIT Bhopal)" />
          <option value="Indian Institute of Information Technology, Ranchi (IIIT Ranchi)" />
          <option value="Indian Institute of Information Technology, Lucknow (IIIT Lucknow)" />
          <option value="Indian Institute of Technology Goa (IIT Goa)" />
          <option value="Indian Institute of Technology Jammu (IIT Jammu)" />
          <option value="Indian Institute of Technology Dharwad (IIT Dharwad)" />
          <option value="Indian Institute of Technology Palakkad (IIT Palakkad)" />
          <option value="Indian Institute of Technology Bhilai (IIT Bhilai)" />
          <option value="Indian Institute of Technology Tirupati (IIT Tirupati)" />
          <option value="Indian Institute of Technology (IIT) Goa" />
          <option value="Indian Institute of Technology (IIT) Jammu" />
          <option value="Indian Institute of Technology (IIT) Dharwad" />
          <option value="Indian Institute of Technology (IIT) Bhilai" />
          <option value="Indian Institute of Technology (IIT) Tirupati" />
          <option value="National Institute of Technology Sikkim (NIT Sikkim)" />
          <option value="National Institute of Technology Manipur (NIT Manipur)" />
          <option value="National Institute of Technology Mizoram (NIT Mizoram)" />
          <option value="National Institute of Technology Meghalaya (NIT Meghalaya)" />
          <option value="National Institute of Technology Nagaland (NIT Nagaland)" />
          <option value="National Institute of Technology Arunachal Pradesh (NIT Arunachal Pradesh)" />
          <option value="National Institute of Technology Uttarakhand (NIT Uttarakhand)" />
          <option value="National Institute of Technology Goa (NIT Goa)" />
          <option value="National Institute of Technology Puducherry (NIT Puducherry)" />
          <option value="National Institute of Technology Manipur (NIT Manipur)" />
          <option value="National Institute of Technology Andhra Pradesh (NIT Andhra Pradesh)" />
          <option value="National Institute of Technology Agartala (NIT Agartala)" />
        </datalist>

        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AfterSignup;
