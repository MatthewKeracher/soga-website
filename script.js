
//Buttons
const homeButton = document.getElementById('homeButton');
const contactButton = document.getElementById('contactButton');
const left = document.getElementById('left');
const imageGrid = document.getElementById('imageGrid'); 

//Start
window.onload = function() {
    showHomePage();
};

function showHomePage(){
left.innerHTML = `${introEnglish}${introChinese}`;
defaultImages()
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
Most independent schools in the United Kingdom now require parents to appoint a guardian.  This is easy if you have family or friends nearby but is more difficult if you do not have a social network in Scotland. SOGA works to place your child with a guardian family to support them in case of illness, suspension, or half-term holidays.
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
imageGrid.innerHTML = '';
addMap();
});

function addMap() {
    const html = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793075.2352009034!2d-6.253587279252112!3d56.46827075863899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48863b3bc31db2a3%3A0x263d913f96652820!2s52%20Glasgow%20Rd%2C%20Perth%20PH2%200PB%2C%20UK!5e0!3m2!1sen!2sno!4v1726060286965!5m2!1sen!2sno" class="googleMap" allowfullscreen="no" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    
    const map = document.createElement('div'); 
    map.innerHTML = html;
    imageGrid.appendChild(map); // Append the image to the grid
}


function addImage(src, altText) {
    const img = document.createElement('img'); // Create a new <img> element
    img.src = 'images/' + src; // Set the image source
    img.alt = altText; // Set the alt text
    imageGrid.appendChild(img); // Append the image to the grid
}

function defaultImages(){

    imageGrid.innerHTML = '';
    addImage('sogaLogo.png',"SOGA Logo by Evan Scott/Krumbsie")
    addImage('bsaLogo.jpg',"BSA Logo")
    addImage('AEGIS.jpg',"AEGIS Accreditation Certificate")

}









