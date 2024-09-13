const policyButton = document.getElementById('policyButton');

const policyNames = [
    'Aims, Principles, and Practice',
    'Alternative Accomodation',
    'Anti-Bullying Including Cyber-Bullying',
    'Anti-Radicalism and Extremism',
    'Basic First Aid',
    'Basic Food and Kitchen Hygiene',
    'Complaints',
    'Confidentiality and Data Protection',
    'Fire Safety Notice',
    'Host Family Handbook',
    'Infection Control',
    'Job Descriptions',
    'Low Level Concerns',
    'Management of Ill Student',
    'Missing Student',
    'Online Guidance',
    'Parents Handbook',
    'Privacy Notice',
    'Professional Code of Conduct',
    'Safe Care Plan for Hosts',
    'Safer Recruitment',
    'Student Handbook',
    'Whistleblowing',
    'Welfare, Health, and Safety', 
];

let policies = `<section id="policy-intro">

<h2>
Our Policies
</h2>
<p>
The Scottish Overseas Guardianship Association adheres to a strict set of policies to ensure that our students are kept in a safe and secure environment while on leave from their boarding schools. These policies range from internet and online safety to safe care practice and health and safety. 
</p> 
<br>
<p>
Our policies are designed to make sure that there are fundamental guidelines in place to protect students, and that these are communicated to everyone associated with SOGA (host families, parents and schools) to ensure that we are all working towards the same goal. Our set of policies are in place to avoid chaos and confusion while clarifying our legal obligations on a range of different matters. 
</p> 
<br>
<p>
All of our policies are written in line with the Scottish Government recommendations for good practise when working with young people. Please find our policies documents below. These policies outline what we, at SOGA, expect from both host families and students. 
</p> 

<br>

<ul class="bullet-list" id="fileList"></ul>

</section>`

policyButton.addEventListener('click', function() {
    left.innerHTML = `${policies}`;
    right.style.width = '40%'
    
    const fileList = document.getElementById('fileList');
        policyNames.forEach(file => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = `documents/${file}.pdf`;
                a.target = '_blank'; // Open in a new tab
                a.textContent = file;
                li.appendChild(a);
                fileList.appendChild(li);
            });

            defaultImages()
});