document.getElementById('generateBtn').addEventListener('click', () => {
        // HEADER INFO 
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const branch = document.getElementById('branch').value;
    const role = document.getElementById('role').value;
    const college = document.getElementById('college').value;

    const resumeDisplay = document.getElementById('resume-display');
    document.querySelector('.resume-container #r-name').innerHTML = `${name}`;
    document.querySelector('.resume-container .contact-info').innerHTML = `📞 ${phone} <span>📧 ${email}</span> <span>🔗 LinkedIn</span>`;
    document.querySelector('.resume-container .subtitle').innerHTML = `${role} | B.Tech ${branch} student at ${college}`;

    
      // ABOUT ME 
    const about = document.getElementById('about').value;
    document.querySelector('.resume-container .main-layout .left-col section p').innerHTML = `${about}`;
    

    // WORK EXPERIENCE
    const companyRole = document.getElementById('company-role').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const projectDetails = document.getElementById('project-details').value;
    const projectDescription = document.getElementById('project-description').value;
    
    const workExperienceSection = document.querySelector('.resume-container .main-layout .left-col section:nth-child(2)');
    document.querySelector('.resume-container .main-layout .left-col section:nth-child(2) .entry h3').innerHTML = `${companyRole} | ${company}`;
    document.querySelector('.resume-container .main-layout .left-col section:nth-child(2) .entry .date').innerHTML = `${duration}`;
    document.querySelector('.resume-container .main-layout .left-col section:nth-child(2) .entry ul').innerHTML = `<li>${projectDetails}</li><li>${projectDescription}</li>`;

      // PROJECTS 
    const project1Name = document.getElementById('project1-name').value;
    const project1Description = document.getElementById('project1-description').value;
    const project2Name = document.getElementById('project2-name').value;
    const project2Description = document.getElementById('project2-description').value;

    document.querySelector('#r-proj1-title').innerHTML = `${project1Name}`;
    document.querySelector('#r-proj1-desc').innerHTML = `${project1Description}`;
    document.querySelector('#r-proj2-title').innerHTML = `${project2Name}`;
    document.querySelector('#r-proj2-desc').innerHTML = `${project2Description}`;


    // EDUCATION
    const education1 = document.getElementById('education1').value;
    const institute1 = document.getElementById('institute1').value;
    const education2 = document.getElementById('education2').value;
    const institute2 = document.getElementById('institute2').value;

    document.querySelector('#r-edu-1').innerHTML = `${education1}`;
    document.querySelector('#ins-name-1').innerHTML = `${institute1}`;
    document.querySelector('#r-edu-2').innerHTML = `${education2}`;
    document.querySelector('#ins-name-2').innerHTML = `${institute2}`;

    // SKILLS
    const languages = document.getElementById('languages').value;
    const frameworks = document.getElementById('frameworks').value;
    const coreSkills = document.getElementById('core').value;
    const tools = document.getElementById('tools').value;

    document.querySelector('#r-lang').innerHTML = `<strong>Languages:</strong> ${languages}`;
    document.querySelector('#r-frame').innerHTML = `<strong>Frameworks:</strong> ${frameworks}`;
    document.querySelector('#r-core').innerHTML = `<strong>Core:</strong> ${coreSkills}`;
    document.querySelector('#r-tools').innerHTML = `<strong>Tools:</strong> ${tools}`;


    // LINKS- FOOTER
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const leetcode = document.getElementById('leetcode').value;
    const twitter = document.getElementById('twitter').value;

    document.querySelector('#r-foot').innerHTML = `&copy; 2026 ${name} | Aspiring ${role}`;
    document.querySelector('#r-linkedin').setAttribute('href', linkedin);
    document.querySelector('#r-git').setAttribute('href', github);
    document.querySelector('#r-leet').setAttribute('href', leetcode);
    document.querySelector('#r-x').setAttribute('href', twitter);

    // ENABLE THE RESUME THEME CSS
    document.getElementById('resume-theme').disabled = false;
    document.getElementById('main-theme').disabled = true;
    
    //FINALLY DISPLAY THE RESUME AND HIDE THE FORM
    resumeDisplay.style.display = "block";
    document.getElementById('form-container').style.display = "none";

    // Add this at the very bottom of your generateBtn function

});

// document.getElementById('downloadBtn').addEventListener('click', () => {
//         window.print();
//     });

document.getElementById('downloadBtn').addEventListener('click', () => {
    const element = document.querySelector('.resume-container');
    
    const opt = {
        margin: 0,
        filename: 'Resume_Shubham_Modi.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2, // High resolution
            useCORS: true,
            scrollY: 0
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            // This is the "magic" line: it prevents the library 
            // from splitting content across pages.
            compress: true 
        }
    };

    // New logic to ensure one-page fit without losing data
    html2pdf().set(opt).from(element).toContainer().toCanvas().toImg().toPdf().save();
});
