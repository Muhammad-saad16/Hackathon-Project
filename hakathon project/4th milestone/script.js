"use strict";
// Get form elements and resume output
const resumeForm = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');
// Get editable resume sections
const outputName = document.getElementById('outputName');
const outputEmail = document.getElementById('outputEmail');
const outputPhone = document.getElementById('outputPhone');
const outputEducation = document.getElementById('outputEducation');
const outputExperience = document.getElementById('outputExperience');
const outputSkills = document.getElementById('outputSkills');
// Handle form submission to generate resume
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Populate the resume fields
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputPhone.textContent = phone;
    outputEducation.textContent = education;
    outputExperience.textContent = experience;
    outputSkills.textContent = skills;
    // Display resume
    resumeOutput.style.display = 'block';
});
// Automatically save changes as user types in editable sections
document.querySelectorAll('.editable').forEach((element) => {
    element.addEventListener('input', () => {
        // Real-time update happens as the user types in the editable sections
        // ContentEditable automatically handles the inline editing
    });
});