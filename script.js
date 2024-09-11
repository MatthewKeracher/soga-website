
//Buttons
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
const aboutButton = document.getElementById('aboutButton');
const packagesButton = document.getElementById('packagesButton');
const applyButton = document.getElementById('applyButton');
const policyButton = document.getElementById('policyButton');
const hostButton = document.getElementById('hostButton');

const left = document.getElementById('left');

const policyNames = [
    'Student Handbook',
    'Parents Handbook',
    'Alternative Accomodation',
    'Anti-Bullying Including Cyber-Bullying',
    'Anti-Radicalism and Extremism',
    'Basic First Aid',
    'Basic Food and Kitchen Hygiene',
    'Complaints',
    
    'Confidentiality and Data Protection',
    'Fire Safety Notice',
    'Infection Control',
    'Job Descriptions',
    'Low Level Concerns',
    'Management of Ill Student',
    'Missing Student',
    'Online Guidance',
    'Privacy Notice',
    'Professional Code of Conduct',
    'Safe Care Plan for Hosts',
    'Safer Recruitment',
    'Whistleblowing',
    'Welfare, Health, and Safety',

    
];

//Start
window.onload = function() {
    showHomePage();
};

function showHomePage(){
left.innerHTML = `${introEnglish}${introChinese}`;
}

//Homepage
let introEnglish = `
<section id="intro-english">
<h2>
Why Have An Overseas Guardian? 
</h2>
<br>
<p>
The Scottish Overseas Guardianship Agency (SOGA) offers pastoral care and academic guardianship services for international students whilst they are studying in Scotland and under the age of eighteen.
</p> 
<br>
<p>
Most independent schools in the United Kingdom now require parents to a appoint a guardian.  This is easy if you have family or friends nearby but is more difficult if you do not have a social network in Scotland. SOGA works to place your child with a guardian family to support them in case of illness, suspension, or half-term holidays.
</p> 
<br>
<p>
SOGA allows you to be more confident and relaxed in your decision to give your child an overseas experience. In choosing SOGA, you ensure that your child has the pastoral support they need.
</p> 
<br>
<p>
Sending your child overseas to be educated is a life-changing journey full of fantastic oppurtunites. Children learning overseas develop fluency in other languages, expand their cultural worldview and develop a sense of their own abilities. However, sending your child abroad also raises a lot of questions:
</p> 
<br>

<p>
Who will accompany your child at school functions and parent teacher meetings? 
</p> 

<p>
Where will your child go during exeats and half-term holidays?
</p> 

<p>

How will your child go home for Christmas or during the Easter holidays?
</p> 
<br>

<p>

Despite the advantages to studying overseas, there are still stresses and issues that can get in the way of a child's potential. Enrolling your student with the Scottish Overseas Guardianship Agency means having these questions answered before your child starts their journey to adulthood at one of Scotland's ancient schools. Because they are with SOGA, parents and children alike can relax and focus on what is really important.
</p> 
</section>`;
let introChinese = `
<section id="intro-chinese">
<h2>
为何要有海外监护人？
</h2>
<br>
<p>
留学是场改变生活的体验。贵子女不仅有机会游览异域风光，而且能练就一口流利的外语。同时，他们能拓展世界观，进行自我审查和自我提升。
</p><br>

<p>
但是，您的孩子在海外也将面临许多问题，比如：
</p><br>

<p>
谁陪同您的孩子去参加家长会？
</p><br>

<p>
假期期间，您的孩子应该住哪？
</p><br>

<p>
圣诞节，复活节等节日里，如何安排您孩子的行程？
</p><br>

<p>
在海外学习有许多好处，但这些困难将妨碍他们去探索自身的潜力。
</p><br>

<p>
The Scottish Overseas Guardianship Agency (SOGA) 能帮您轻松解决这些问题。在这里注册，让您的孩子在苏格兰历史悠久的学校里快乐学习。SOGA专注于您的需求，让父母和孩子放心！
</p>
</section>`;

homeButton.addEventListener('click', function() {
showHomePage();
});

//Contact Us
let contactUs = `<section id="contact-soga">
<h2>
How to Contact Us
</h2>
<br>
<h3>E-Mail</h3>
<p>pamelakeracher@gmail.com</p>
<br>
<h3>Telephone</h3>
<p>(+44)7762 791 805</p>
<br>
<h3>Address</h3>
<p>Pamela Keracher</p>
<p>52 Glasgow Road</p>
<p>Perth</p>
<p>Perthshire</p>
<p>Scotland</p>
<p>PH2 0PB</p>
<br>
</section>`;

contactButton.addEventListener('click', function() {
left.innerHTML = `${contactUs}`
});

//About Us
let aboutEnglish = `<section id="about-soga-english">
<h2>
About Us
</h2>
<br>
<p>
SOGA is based in the historic city of Perth, in Scotland's central belt. Its central location is situated within an hour’s drive to both Edinburgh and Glasgow airports. SOGA is a family business managed by Pamela Keracher, husband Peter Keracher, and a small admin team. SOGA works to liaise between parents and schools to make arrangements best suited to their pastoral care and travel arrangements. Pamela Keracher, or a member of her small team, will visit the students at school. SOGA will also represent parents at any school events including teacher-parent evenings. 
</p> 
<br>
<p>
Students stay with host families, chosen by Pamela Keracher, and are held to the highest level of scrutiny. This includes police checks. All checks are in-line with Child Care Legislation and Government Guidelines in relation to good childcare practice.  
</p> 
<br>
<p>
The families chosen as guardian families have all been selected for their ability to readily share their home and family.  SOGA will attempt from the outset to place your child with a family that meets a student’s individual needs. Many students with SOGA over the years have developed lifelong friendships within and around their guardian families.
</p> 
<br>
<p>
Because SOGA places students with families, students have the opportunity to experience Scottish and British society. Students are given the comfort of a home to relax, but also as a foundation from which to explore Scotland, and meet new people. 
</p> 
</section>`;
let historyEnglish = `<h2>
The History of SOGA
</h2>
<br>
<p>
SOGA was founded in 1987 by Jeanne Hackett. After a life lived around independent schools, Jeanne recognised the need to develop a flexible and affordable guardianship service for students from overseas who were studying in Scotland. For Jeanne, it quickly became apparent that different families required different types of guardianships. As a result, she felt a growing need to try out new ideas and packages of guardianship. 
</p> 
<br>
<p>
In 2007, Jeanne retired and the organisation was bought over by the current director, Pamela Keracher (known as Pam). Pam was well known to students, families and hosts as she herself was a host for a number of years. Prior to taking over SOGA, Pam had been involved with guardians and guardianships most of her life. She had been an overseas student herself. Therefore, she knew firsthand the importance of a settled, happy, stable and safe place for young people when they were away from home. 
</p> 
<br>
<p>
Like Jeanne, Pam is committed to meet the needs of all parents and students. She believed that it was important that parents did not opt for a lesser guardianship arrangement because they considered Guardianship Agencies too expensive. As a result, she developed the current range of guardianship packages. 
</p> 
</section>`

let aboutChinese = `<section id="about-soga-chinese">
<h2>
关于我们
</h2>
<p>
The Scottish Overseas Guardianship Agency (下称SOGA) 给予18岁以下留学苏格兰的国际学生一个合法的监护人服务。
</p> 
<br>
<p>
将子女送往一所苏格兰寄宿学校对于所有家庭都是一项挑战。 SOGA能够充分理解孩子在每个家庭的地位是无法取替的，所以家长们可以透过SOGA这个平台得知子女在苏格兰有一个安全的寄宿生活。
</p> 
<br>
<p>
大部分的英国独立学校都会要求家长为子女寻找一个本地的监护人。对于一些有亲朋戚友在附近的家长们可能并非难事，但对于许多在苏格兰没有熟人的家长们可是一大难题。 SOGA能够将贵子女在假期、生病或停学期间安排寄宿家庭以便提供最合适的协助。
</p> 
<br>
<p>
SOGA位置于苏格兰的中心地带、历史悠久的珀斯(Perth)。其位置方可在一小时内驾驶至爱丁堡以及格拉斯哥两个苏格兰的主要机场。 SOGA是由Pamela Keracher，其丈夫Peter Keracher，以及一个小型管理团队运作的家族企业。 SOGA充当着一个在家长以及学校之间的联络人角色，以便给孩子一个最合适的服务及交通安排。 Pamela Keracher，或管理团队成员会定期前往学校关心学生的现况。 SOGA亦能代表家长出席家长日在内的学校活动。
</p> 
<br>
<p>
学生将会入住由Pamela Keracher精心安排的寄宿家庭。这些家庭都受过最高级别的审查。这包括犯罪纪录，以及英国政府推出有关保护儿童的相关指引。  
</p> 
<br>
<p>
所有当选的寄宿家庭都具备良好的设施以及能力去支援寄宿学生。 SOGA活尽力因应学生的个人需要而分布去最适合的家庭。因此多年来，寄宿家庭与许多学生建立了深厚的友谊。
</p> 
<br>
<p>
亦正是因为学生能够分配往不同的本地家庭，这能让学生有更多机会体验苏格兰及英国的地道文化。在给予学生一个舒适的家的同时，亦能为他们种下能够探索苏格兰，认识新朋友的良好根基。
</p> 
</section>`;

aboutButton.addEventListener('click', function() {
left.innerHTML = `${aboutEnglish} ${historyEnglish}`// ${aboutChinese} `
});

//Packages
let contentsTable = `
<br>
<h2>Guardianship Packages</h2>
<nav class="bullet-list"">
    <ul>
    <li><a href="#emergency-package">Emergency Guardianship Services</a></li>
    <li><a href="#european-package">European Guardianship Package</a></li>
    <li><a href="#bronze-package">Worldwide Bronze Package</a></li>
    <li><a href="#silver-package">Worldwide Silver Package</a></li>
    <li><a href="#gold-package">Worldwide Gold Package</a></li>
    <li><a href="#plat-package">Worldwide Platinum Package</a></li>
    </ul>
</nav><br>`
let emergencyPackage = `<section id="emergency-package">
<h2>
Emergency Guardian Services
</h2>
<p>
A guardian may also be needed during emergency situations throughout the school year. Although the phrase "emergency" may typically refer to extremely serious circumstances, in guardianship terms it often means accommodation at short notice. </p><br><p>If your child falls ill, the school may not be able to accommodate them in the medical suite. Especially if the illness is infectious such as cold, flu or stomach bugs.  In such times, the school will want the student to be off the premises to reduce the risk of the illness spreading throughout the school community. </p><br><p>Other situations which often require an emergency guardianship include suspension or exclusion. These are punishments that the school may enforce when the school rules are broken. </p><br><p> Another example may be related to travel. Sometimes, flights can be delayed or cancelled. Occasionally a young person can miss a flight. This could be due to weather conditions, time differences and misinterpretation of flight times. If any such case arises, the school will often seek out emergency guardians for accommodation. The Scottish Overseas Guardianship Association offer accommodation in these emergency situations. Each case is discussed and organised between SOGA and the school and parents on an individual basis.  
</p> 
<br>
</section>`;
let europeanPackage = `<section id="european-package">

<h2>
European Guardianship Package
</h2>
<p>
Parents who live within Europe - including in the UK - are often able to have a more active involvement in their child's school life. As distance does not create such an obstacle, they are more likely to be able to attend school events and parent-teacher meetings. Children from such families are more likely to go home at half terms and longer exeats. 
</p> 
<br>
<h3>
Accommodation & Practical Assistance
</h3>
<p>
SOGA will provide a host family for your child to stay with if the student chooses to remain in Scotland during holidays. Our team will make sure that the host home is both comfortable and clean, where your child will be safe and looked after. In order to comply with UK child safety laws and legislation, SOGA verifies all of our host families. This includes police checks. The SOGA team will arrange any transport between travel links, airport, host family and school.
</p> 
<br>
<h3>
Academic Support
</h3>
<p>
SOGA can provide academic support for students while they are in school. For example:
</p>
<br>
<p>
        <ul class="bullet-list">
            <li>A representative from SOGA can attend any Parent Teacher Meetings if you so wish.</li>
            <li>We will provide practical assistance where required such as shopping for school uniform and equipment.</li>
            <li>We will liaise with the school on curriculum issues and other matters.</li>
            <li>We will visit the school to monitor  your child's wellbeing and academic progress once a term.</li>
            <li>Support to boarding house during term time.</li>
        </ul>
</p>
<br>
<h3>
Pastoral Care
</h3>
<p>
Pastoral care the term used to refer to any emotional, spiritual, academic, personal and practical support the young person may require during the year. SOGA acts as a Legal Guardian for your child during their stay in the UK and as such, we provide pastoral care as and when required. This may include:
</p><br>
<p>
<ul class="bullet-list">
            <li>Introductory meeting with the young person and the SOGA team.</li>
            <li>Support documentation for Visa Applications, Immigration papers and Passports.</li>
            <li>Organising accommodation for exeats, and the beginning and end of term.</li>
            <li>Arranging to open the appropriate bank account.</li>
            <li>Being on hand to offer assistance at the airport.</li>
            <li>Meeting and greeting at arrival airport within term timetable.</li>
            <li>24-hour emergency cover.</li>
            <li>Helping to book flights and tickets as required.</li>
            <li>Offering academic and cultural trips and tours.</li>
            <li>Luggage storage.</li>
        </ul>
</p> 
<br>

</section>`;
let bronzePackage = `<section id="bronze-package">

<h2>
Worldwide Bronze Package
</h2>
<p>
This guardianship package is for students who are aged 16 and older. Often, we find that older students are more mature.  SOGA realises the importance of giving them their own sense of independence. Which is why we have designed the Bronze Package. This package includes elements of accommodation and practical assistance, academic support and pastoral care. 
</p> 
<br>
<h3>
Accommodation & Practical Assistance
</h3>
<p>
SOGA will provide a host family for your child to stay with. Our team will make sure that the host home is comfortable and clean.  All to ensure that your child will be safe and looked after. In order to be compliant with child safety laws and legislation, we verify all of our host families. This includes police checks. The SOGA team will arrange any transport between airport, host family and school.
</p> 
<br>
<h3>
Academic Support
</h3>
<p>
SOGA can provide academic support for students while they are in school. For example:
</p>
<br>
<p>
        <ul class="bullet-list">
            <li>There will be a named person who will direct the student through their boarding life.</li>
            <li>SOGA will send a representative to attend any Parent Teacher Meetings.</li>
            <li>We will liaise with the school on curriculum issues and other matters.</li>
            <li>We will visit the school to monitor  your child's wellbeing and academic progress once a term.</li>
            <li>Support as required at the boarding house, buying school uniform, etc.</li>
        </ul>
</p>
<br>
<h3>
Pastoral Care
</h3>
<p>
Pastoral care is a term used to refer to any emotional, spiritual, academic, personal and practical support the young person may need. SOGA acts as a Legal Guardian for your child during their stay in the UK and we provide pastoral care as required.  This may include:
</p><br>
<p>
<ul class="bullet-list">
            <li>Introductory meeting with the young person and the SOGA team.</li>
            <li>Support documentation for Visa Applications, Immigration papers and Passports.</li>
            <li>Organising accommodation for exeats, and the beginning and end of term.</li>
            <li>Arranging to open the appropriate bank account.</li>
            <li>Being on hand to offer assistance at the airport.</li>
            <li>Meeting and greeting at arrival airport within term timetable.</li>
            <li>24-hour emergency cover.</li>
            <li>Providing opportunities for academic and Cultural trips and tours.</li>
            <li>Helping to book flights and tickets as required.</li>
            <li>Offering academic and cultural trips and tours.</li>
            <li>Luggage storage.</li>
        </ul>
</p> 
<br>

</section>`;
let silverPackage = `<section id="silver-package">

<h2>
Worldwide Silver Package
</h2>
<p>
Before coming to the UK, some families may already have friends or family here. Often they choose for that friend or family member to be the main legal guardian for their child while studying abroad. However, there may be cases where the guardian is unable to fulfil the full role. For example, should the legal guardian stay a considerable distance from the school and require SOGA to provide a localised package. Another example may be that the legal guardian is on holiday at the same time as the school and is therefore unavailable. For families who find themselves in this situation, we have devised the Silver Package. The silver package can include accommodation and practical assistance, academic support and pastoral care as required. This package is tailored to meet the needs of the family and the legal guardian, as well as the young person. Any work which is to be carried out by SOGA will be done so in consultation with the legal guardian.
</p> 
<br>
<h3>
Accommodation & Practical Assistance
</h3>
<p>
SOGA will provide a host family in the event that the legal guardian is unable to provide accommodation.  Your child will stay with a SOGA host family where the accommodation is comfortable and clean.  We ensure that your child will be safe and looked after. In order to be compliant with the child safety laws and legislation of this country, we verify all of our host families. This includes carrying out police checks. SOGA will arrange any transport between the airport, host family and school.
</p> 
<br>
<h3>
Academic Support
</h3>
<p>
Support will be provided as requested by the family or the legal guardian. For example:
</p>
<br>
<p>
        <ul class="bullet-list">
            <li>There will be a named person who will direct the student through their boarding life.</li>
            <li>SOGA will send a representative to attend any Parent Teacher Meetings.</li>
            <li>We will liaise with the school on curriculum issues and other matters.</li>
            <li>We will visit the school to monitor  your child's wellbeing and academic progress once a term.</li>
            <li>Support as required at the boarding house, buying school uniform, etc.</li>
        </ul>
</p>
<br>
<h3>
Pastoral Care
</h3>
<p>
 Pastoral care is a term used to describe any emotional, spiritual, academic, personal and practical support the young person may require during their boarding school life. SOGA will provide any pastoral care for the student upon request.  This may include:
</p><br>
<p>
<ul class="bullet-list">
            <li>Introductory meeting with the young person and the SOGA team.</li>
            <li>Support documentation for Visa Applications, Immigration papers and Passports.</li>
            <li>Organising accommodation for exeats, and the beginning and end of term.</li>
            <li>Arranging to open the appropriate bank account.</li>
            <li>Being on hand to offer assistance at the airport.</li>
            <li>Meeting and greeting at arrival airport within term timetable.</li>
            <li>24-hour emergency cover.</li>
            <li>Providing opportunities for academic and Cultural trips and tours.</li>
            <li>Helping to book flights and tickets as required.</li>
            <li>Offering academic and cultural trips and tours.</li>
            <li>Luggage storage.</li>
        </ul>
</p> 
<br>

</section>`
let goldPackage = `<section id="gold-package">

<h2>
Worldwide Gold Package
</h2>
<p>
The gold package is designed for young people aged below 6th Form. It is aimed at students who are joining their school to work through their academic years. Those who will assimilate with their peers and social groups. Ideal for individuals looking to grow within themselves and become the best that they can be. All while achieving their own personal goal. 
</p> 
<br>
<h3>
Accommodation & Practical Assistance
</h3>
<p>
SOGA will provide a host family for your child to stay with. Our team will make sure that the host home is comfortable and clean.  All to ensure that your child will be safe and looked after. In order to be compliant with child safety laws and legislation, we verify all of our host families. This includes police checks. The SOGA team will arrange any transport between the airport, host family and school.
</p> 
<br>
<h3>
Academic Support
</h3>
<p>
Support will be provided as requested by the family or the legal guardian. For example:
</p>
<br>
<p>
        <ul class="bullet-list">
            <li>There will be a named person who will direct the student through their boarding life.</li>
            <li>We will help your child shop for school uniform and equipment.</li>
            <li>SOGA will send a representative to attend any Parent Teacher Meetings.</li>
            <li>We will liaise with the school on curriculum issues and other matters.</li>
            <li>We will visit the school to monitor  your child's wellbeing and academic progress once a term.</li>
            <li>Support to boarding house during term time.</li>
        </ul>
</p>
<br>
<h3>
Pastoral Care
</h3>
<p>
 Pastoral care is a term used to refer to any emotional, spiritual, academic, personal and practical support the young person may need.  SOGA acts as a Legal Guardian for your child during their stay in the UK and we provide pastoral care as required. This may include:
</p><br>
<p>
<ul class="bullet-list">
            <li>Introductory meeting with the young person and the SOGA team.</li>
            <li>Responsibility for child welfare while the school is closed during half terms and exeat weekends.</li>
            <li>Support documentation for Visa Applications, Immigration papers and Passports.</li>
            <li>Organising accommodation for exeats, and the beginning and end of term.</li>
            <li>Arranging to open the appropriate bank account.</li>
            <li>Helping arrange British mobile phones and SIM cards.</li>
            <li>Being on hand to offer assistance at the airport.</li>
            <li>Meeting and greeting at arrival airport within term timetable.</li>
            <li>24-hour emergency cover.</li>
            <li>Providing opportunities for academic and Cultural trips and tours.</li>
            <li>Helping to book flights and tickets as required.</li>
            <li>Offering academic and cultural trips and tours.</li>
            <li>Luggage storage.</li>
        </ul>
</p> 
<br>

</section>`
let platPackage = `<section id="plat-package">

<h2>
Worldwide Platinum Package
</h2>
<p>
This package is intended for families who believe their child requires additional needs and attention.It is individually tailored to your child’s needs, with an opportunity to provide more personal support to meet the family’s and young person’s needs. The platinum package can include accommodation & practical assistance, academic support and pastoral care. 
</p> 
<br>
<h3>
Accommodation & Practical Assistance
</h3>
<p>
We will provide a host family for your child to stay with. SOGA will ensure that host home is comfortable and clean and that your child will be safe and looked after. In order to be compliant with child safety laws and legislation, all host families are verified, including police checks, by SOGA. SOGA arranges transport between the airport, host family accommodation and school for your child.
</p> 
<br>
<h3>
Academic Support
</h3>
<p>
Support will be provided as requested by the family or the legal guardian. For example:
</p>
<br>
<p>
        <ul class="bullet-list">
            <li>Named person to direct student through their boarding life.</li>
            <li>A representative of SOGA will attend Parent Teacher Meetings.</li>
            <li>Help with Shopping for school uniform and equipment.</li>
            <li>Liaising with the school on curriculum and other matters.</li>
            <li>School visits to monitor wellbeing and academic progress.</li>
            <li>Support to boarding house during term time.</li>
        </ul>
</p>
<br>
<h3>
Pastoral Care
</h3>
<p>
 Pastoral care is a term used to refer to any emotional, spiritual, academic, personal and practical support the young person may need.  SOGA acts as a Legal Guardian for your child during their stay in the UK and we provide pastoral care as required. This may include:
</p><br>
<p>
<ul class="bullet-list">
            <li>Introductory meeting with the young person and the SOGA team.</li>
            <li>Arranging accommodation for all exeats, as well as the beginning and end of term.</li>
            <li>Arranging Accommodation when requested by the family.</li>
            <li>Being available for your child at all times: particularly if they are worried about anything (ie school work, friends, family illness etc).</li>
            <li>Helping the child if things go wrong (ie child gets into trouble at school, falls ill or needs to be admitted to hospital).</li>
            <li>Assisting in problems relating Visa Applications, Immigration papers and Passports.</li>
            <li>Arranging to open the appropriate bank account.</li>
            <li>Helping arrange British mobile phones and SIM cards.</li>
            <li>Being on hand to offer assistance at the airport.</li>
            <li>Meeting and greeting at arrival airport within term timetable.</li>
            <li>24-hour emergency cover.</li>
            <li>Responsibility for child’s welfare while school is closed during half terms and exeat weekends.</li>
            <li>Providing opportunities for academic and Cultural trips and tours.</li>
            <li>Helping to book flights and tickets as required.</li>
            <li>Offering academic and cultural trips and tours.</li>
            <li>Luggage storage.</li>
        </ul>
</p> 
<br>

</section>`

packagesButton.addEventListener('click', function() {
left.innerHTML = `${contentsTable}<hr>${emergencyPackage}<hr>${europeanPackage}<hr>${bronzePackage}<hr>${silverPackage}<hr>${goldPackage}<hr>${platPackage}`
});

//Apply
applyButton.addEventListener('click', function() {

let googleForm = `<iframe class="googleForm" scrolling="no" src="https://docs.google.com/forms/d/e/1FAIpQLSdoN6IgMDjlyCqaWToXzRzm13gNQMjORa5UauaFOuU1GS3Azw/viewform?embedded=true" >Loading…</iframe>`

left.innerHTML = `${googleForm}`
});

//Become a Host Family
hostButton.addEventListener('click', function() {

    let becomeHost = `
    <section>
    <h2>
    Becoming a SOGA Host Family
    </h2>
    <p>
    Bringing an overseas student into your home can be both an incredibly rewarding experience and a way for good families to bring extra income into their households. At SOGA, we are looking for a particular kind of applicant whose home environment is suited to the pastoral needs of our students. 
    </p> 
    <br>
    <p>
    But, why else should you consider becoming a SOGA Host Family?
    </p> 
    </section>
    
    <section>
    <h3>Cultural Exchange</h3>
    <p> Hosting international students in the best way to delve into a different culture while also giving back to the world. A host family in Scotland will be able to introduce a Hong Kong student to their way of life, while having their own children learn about life in the Far East. Every one of our families hosting foreign students have come away with having learnt something new and interesting.
    </p> <br>

    <h3>Watching the Student Grow</h3>
    <p> One of the greatest parts of becoming a host family for foreign students is watching them grow, mature, and learn while they stay with you. You will be able to influence their views on the world and they will influence yours at the same time. You will teach them responsibilities and help them along their path to adulthood.
    </p> <br>

    <h3>Companionship and Friends for Life</h3>
    <p> When hosting foreign students, you’ll form a bond that can last a lifetime. You’ll be in contact with the student’s family, and the student will be a keen companion within your own family. Your guests will appreciate the commitment and responsibility you have taken on and many will stay in contact with yourself and your children throughout later life.
    </p> <br>
    
    <h3>
    If you’re interested in becoming a host family in Scotland please fill out our <a href="documents/host_family_application.pdf" target="_blank">Host Family Application Form</a> and deliver it to SOGA through the information provided in the Contact Us page.
    </h3> 
    `
    
    left.innerHTML = `${becomeHost}`
    });

//Policies

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
});


