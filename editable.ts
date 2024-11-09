const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePreview = document.getElementById("resume-preview") as HTMLDivElement;
const resumeContent: any = document.getElementById("resume-content") as HTMLDivElement;
const pictureInput = document.getElementById("picture") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Personal Information Inputs
  const name = (document.getElementById("fullName") as HTMLInputElement).value;
  const resumeName = document.getElementById("resume") as HTMLInputElement;
  const fatherName = (document.getElementById("fatherName") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const genderSelect = document.getElementById("gender") as HTMLSelectElement;
  const genderInput = genderSelect.value;
  const dateOfBirth = new Date((document.getElementById("dateOfBirth") as HTMLInputElement).value);
  const maritalStatusSelect = document.getElementById("maritalStatus") as HTMLSelectElement;
  const maritalStatus = maritalStatusSelect.value;

  // Validate Inputs
  if (maritalStatus === "") {
    alert("🚫 Please select a marital status before proceeding.");
    maritalStatusSelect.focus();
    return;
  }
  if (name === "" || !isNaN(Number(name))) {
    alert("🚫 Please enter a valid full name before proceeding.");
    (document.getElementById("fullName") as HTMLInputElement).focus();
    return;
  }

  if (fatherName === "" || !isNaN(Number(fatherName))) {
    alert("🚫 Please enter a valid father's name before proceeding.");
    (document.getElementById("fatherName") as HTMLInputElement).focus();
    return;
  }

  if (phone === "" || isNaN(Number(phone))) {
    alert("🚫 Please enter a valid phone number before proceeding.");
    (document.getElementById("phone") as HTMLInputElement).focus();
    return;
  }

  if (genderInput === "") {
    alert("🚫 Please select a gender before proceeding.");
    genderSelect.focus();
    return;
  }

  const cutoffDate = new Date("2015-01-01");
  if (dateOfBirth > cutoffDate) {
    alert("📅 Your date of birth is too recent. Please enter a valid date of birth that makes you eligible!");
    return;
  }

  // Validate Age
  const age = new Date().getFullYear() - dateOfBirth.getFullYear();
  if (age < 10) {
    alert("🧒 Age is too young! You must be at least 10 years old to proceed.");
    return;
  } else if (age > 90) {
    alert("🎉 Wow, that’s impressive! But let's be realistic - age should not be greater than 90.");
    return;
  }

  // Educational Information Inputs
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const institute = (document.getElementById("institute") as HTMLInputElement).value;
  const grade = (document.getElementById("grade") as HTMLSelectElement).value;
  const awards = (document.getElementById("awards") as HTMLInputElement).value;

  if (education === "") {
    alert("🚫 Please enter your degree before proceeding.");
    (document.getElementById("education") as HTMLInputElement).focus();
    return;
  }

  if (institute === "") {
    alert("🚫 Please enter your institution before proceeding.");
    (document.getElementById("institute") as HTMLInputElement).focus();
    return;
  }

  if (grade === "") {
    alert("🚫 Please select your grade before proceeding.");
    (document.getElementById("grade") as HTMLSelectElement).focus();
    return;
  }

  // Skills Information Inputs
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const computerSkills = (document.getElementById("computerSkills") as HTMLInputElement).value;

  // Experience Information Inputs
  const experience = (document.getElementById("experience") as HTMLInputElement).value;
  const companyName = (document.getElementById("company") as HTMLInputElement).value;

  // Handle Picture
  const pictureFile = pictureInput.files?.[0];
  let profilePicUrl = "";

  if (pictureFile) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      profilePicUrl = event.target.result;

      // Generate Resume Content with CSS Styles
      resumeContent.innerHTML = `
        <style>
          .resume-container {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            background-color: white;
            color: #white;
          }
          .resume-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          .name {
            flex: 1;
            font-size: 24px;
            font-weight: bold;
          }
          .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-left: 20px;
          }
          .personal-info, .education, .skills, .experience {
            margin-bottom: 20px;
          }
          .personal-info h2, .education h2, .skills h2, .experience h2 {
            font-size: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 5px;
            color: #4a4a4a;
          }
          p {
            margin: 5px 0;
          }
          strong {
            color: #555;
          }
          .edit-button {
            padding: 10px 20px;
            background-color: #1A91F0;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 20px;
          }
          .edit-button:hover {
            background-color: #0056b3;
          }
        </style>
        <div class="resume-container">
          <div class="resume-header">
            <h3 class="name">${name}</h3>
            <img src="${profilePicUrl}" alt="Profile Picture" class="profile-pic" />
          </div>
          <div class="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Father's Name:</strong> ${fatherName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${genderInput}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Date of Birth:</strong> ${dateOfBirth.toDateString()}</p>
            <p><strong>Marital Status:</strong> ${maritalStatus}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          <div class="education">
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${education}</p>
            <p><strong>Institute:</strong> ${institute}</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Awards:</strong> ${awards}</p>
          </div>
          <div class="skills">
            <h2>Skills</h2>
            <p><strong>General Skills:</strong> ${skills}</p>
            <p><strong>Computer Skills:</strong> ${computerSkills}</p>
          </div>
          <div class="experience">
            <h2>Experience</h2>
            <p><strong>Job Title:</strong> ${experience}</p>
            <p><strong>Company Name:</strong> ${companyName}</p>
          </div>
        </div>
      `;

      // Create and configure the edit button
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "edit-button";
      editButton.addEventListener("click", () => {
        // Show the form and hide the resume preview
        form.style.display = "block";
        resumePreview.style.display = "none";
        resumeContent.classList.remove("hidden");
      });

      // Append the edit button to resume preview
      resumePreview.innerHTML = resumeContent.innerHTML;
      resumePreview.appendChild(editButton);

      // Display Resume Preview
      resumePreview.style.display = "block";
      resumeContent.classList.add("hidden");

      // Hide the form
      form.style.display = "none";
    };
    reader.readAsDataURL(pictureFile);
  }
});
