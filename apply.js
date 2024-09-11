
const applyButton = document.getElementById('applyButton');
const hostButton = document.getElementById('hostButton');

applyButton.addEventListener('click', function() {

    let googleForm = `<iframe class="googleForm" scrolling="no" src="https://docs.google.com/forms/d/e/1FAIpQLSdoN6IgMDjlyCqaWToXzRzm13gNQMjORa5UauaFOuU1GS3Azw/viewform?embedded=true" >Loading…</iframe>`
    
    left.innerHTML = `${googleForm}`
    defaultImages()
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
        imageGrid.innerHTML = '';
        addImage('christmasLunch.jpg',"Christmas Lunch")
        });