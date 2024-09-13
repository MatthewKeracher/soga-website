const aboutButton = document.getElementById('aboutButton');

//About Us
let aboutEnglish = `<section id="about-soga-english">
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
right.style.width = '40%'

imageGrid.innerHTML = '';
addImage('mumdad.jpg',"Pam and Peter Keracher")

});