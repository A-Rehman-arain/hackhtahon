var form = document.getElementById("resumeForm");
var resumePreview = document.getElementById("resume-preview");
var resumeContent = document.getElementById("resume-content");
var pictureInput = document.getElementById("picture");
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // Personal Information Inputs
    var name = document.getElementById("fullName").value;
    var resumeName = document.getElementById("resume");
    var fatherName = document.getElementById("fatherName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var genderSelect = document.getElementById("gender");
    var genderInput = genderSelect.value;
    var dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    var maritalStatusSelect = document.getElementById("maritalStatus");
    var maritalStatus = maritalStatusSelect.value;
    // Validate Inputs
    if (maritalStatus === "") {
        alert("🚫 Please select a marital status before proceeding.");
        maritalStatusSelect.focus();
        return;
    }
    if (name === "" || !isNaN(Number(name))) {
        alert("🚫 Please enter a valid full name before proceeding.");
        document.getElementById("fullName").focus();
        return;
    }
    if (fatherName === "" || !isNaN(Number(fatherName))) {
        alert("🚫 Please enter a valid father's name before proceeding.");
        document.getElementById("fatherName").focus();
        return;
    }
    if (phone === "" || isNaN(Number(phone))) {
        alert("🚫 Please enter a valid phone number before proceeding.");
        document.getElementById("phone").focus();
        return;
    }
    if (genderInput === "") {
        alert("🚫 Please select a gender before proceeding.");
        genderSelect.focus();
        return;
    }
    var cutoffDate = new Date("2015-01-01");
    if (dateOfBirth > cutoffDate) {
        alert("📅 Your date of birth is too recent. Please enter a valid date of birth that makes you eligible!");
        return;
    }
    // Validate Age
    var age = new Date().getFullYear() - dateOfBirth.getFullYear();
    if (age < 10) {
        alert("🧒 Age is too young! You must be at least 10 years old to proceed.");
        return;
    }
    else if (age > 90) {
        alert("🎉 Wow, that’s impressive! But let's be realistic - age should not be greater than 90.");
        return;
    }
    // Educational Information Inputs
    var education = document.getElementById("education").value;
    var institute = document.getElementById("institute").value;
    var grade = document.getElementById("grade").value;
    var awards = document.getElementById("awards").value;
    if (education === "") {
        alert("🚫 Please enter your degree before proceeding.");
        document.getElementById("education").focus();
        return;
    }
    if (institute === "") {
        alert("🚫 Please enter your institution before proceeding.");
        document.getElementById("institute").focus();
        return;
    }
    if (grade === "") {
        alert("🚫 Please select your grade before proceeding.");
        document.getElementById("grade").focus();
        return;
    }
    // Skills Information Inputs
    var skills = document.getElementById("skills").value;
    var computerSkills = document.getElementById("computerSkills").value;
    // Experience Information Inputs
    var experience = document.getElementById("experience").value;
    var companyName = document.getElementById("company").value;
    // Handle Picture
    var pictureFile = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePicUrl = "";
    if (pictureFile) {
        var resume = resumeName.value;
        var unique_path = "resume".concat(resume.replace(/\s+/g, ""), "cv.html");
        var reader = new FileReader();
        reader.onload = function (event) {
            profilePicUrl = event.target.result;
            // Generate Resume Content with CSS Styles
            resumeContent.innerHTML = "\n        <style>\n          .resume-container {\n            font-family: Arial, sans-serif;\n            max-width: 800px;\n            margin: auto;\n            padding: 20px;\n            border: 1px solid #ddd;\n            background-color: white;\n            color: #333;\n          }\n          .resume-header {\n            display: flex;\n            align-items: center;\n            margin-bottom: 20px;\n          }\n          .name {\n            flex: 1;\n            font-size: 24px;\n            font-weight: bold;\n          }\n          .profile-pic {\n            width: 80px;\n            height: 80px;\n            border-radius: 50%;\n            object-fit: cover;\n            margin-left: 20px;\n          }\n          .personal-info, .education, .skills, .experience {\n            margin-bottom: 20px;\n          }\n          .personal-info h2, .education h2, .skills h2, .experience h2 {\n            font-size: 20px;\n            margin-bottom: 10px;\n            border-bottom: 1px solid #ddd;\n            padding-bottom: 5px;\n            color: #4a4a4a;\n          }\n          p {\n            margin: 5px 0;\n          }\n          strong {\n            color: #555;\n          }\n        </style>\n        <div class=\"resume-container\">\n          <div class=\"resume-header\">\n            <h3 class=\"name\">".concat(name, "</h3>\n            <img src=\"").concat(profilePicUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\" />\n          </div>\n          <div class=\"personal-info\">\n            <h2>Personal Information</h2>\n            <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Gender:</strong> ").concat(genderInput, "</p>\n            <p><strong>Age:</strong> ").concat(age, "</p>\n            <p><strong>Date of Birth:</strong> ").concat(dateOfBirth.toDateString(), "</p>\n            <p><strong>Marital Status:</strong> ").concat(maritalStatus, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n          </div>\n          <div class=\"education\">\n            <h2>Education</h2>\n            <p><strong>Degree:</strong> ").concat(education, "</p>\n            <p><strong>Institute:</strong> ").concat(institute, "</p>\n            <p><strong>Grade:</strong> ").concat(grade, "</p>\n            <p><strong>Awards:</strong> ").concat(awards, "</p>\n          </div>\n          <div class=\"skills\">\n            <h2>Skills</h2>\n            <p><strong>General Skills:</strong> ").concat(skills, "</p>\n            <p><strong>Computer Skills:</strong> ").concat(computerSkills, "</p>\n          </div>\n          <div class=\"experience\">\n            <h2>Experience</h2>\n            <p><strong>Job Title:</strong> ").concat(experience, "</p>\n            <p><strong>Company Name:</strong> ").concat(companyName, "</p>\n          </div>\n        </div>\n      ");
            resumePreview.innerHTML = resumeContent.innerHTML;
            resumePreview.style.display = "block";
            resumeContent.classList.add("hidden");
            form.style.display = "none";
        };
        reader.readAsDataURL(pictureFile);
    }
});
