//Packages
const packagesButton = document.getElementById('packagesButton');



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
A guardian may also be needed during emergency situations throughout the school year. Although the phrase "emergency" may typically refer to extremely serious circumstances, in guardianship terms it often means accommodation at short notice. </p> 
<br>
<h3>
Illness or Injury
</h3>
<p>If your child falls ill, the school may not be able to accommodate them in the medical suite. Especially if the illness is infectious such as cold, flu or stomach bugs.  In such times, the school will want the student to be off the premises to reduce the risk of the illness spreading throughout the school community. </p> 
<br>
<h3>
Exclusion from School
</h3>
<p>Other situations which often require an emergency guardianship include suspension or exclusion. These are punishments that the school may enforce when the school rules are broken. </p> 
<br>
<h3>
Travel Emergencies
</h3>
<p> Another example may be related to travel. Sometimes, flights can be delayed or cancelled. Occasionally a young person can miss a flight. This could be due to weather conditions, time differences and misinterpretation of flight times. If any such case arises, the school will often seek out emergency guardians for accommodation. The Scottish Overseas Guardianship Association offer accommodation in these emergency situations. Each case is discussed and organised between SOGA and the school and parents on an individual basis.</p> 
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
right.style.width = '40%'

defaultImages()
});