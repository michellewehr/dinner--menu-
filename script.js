  function removeLinks(){
       const links = document.getElementsByClassName('picture--links');
       for(let i = 0; i< links.length; i++){
           links[i].classList.remove('active');
       }
   }

   function showSelectedDinner(){

    dinners = ['Pizza','Pasta and Meatballs', 'Chicken Cutlets', 'Pork tenderloin', 'Tacos','Chicken Enchiladas','Hotdogs','Stirfry','Breakfast for dinner','Italian sausage','Steak','Barbeque pulled pork','Quesidillas','Speghetti Squash','Macoroni and cheese'];
    let selectedDinner = dinners[Math.floor(Math.random()* dinners.length)];

    document.getElementById('source').innerText = selectedDinner;

    removeLinks();

    if (selectedDinner === 'Pizza') {
        var dinnerLinks = document.getElementById('pizza');
        dinnerLinks.classList.add('active');}

    if (selectedDinner === 'Pasta and Meatballs') {
        var dinnerLinks = document.getElementById('Pasta_Meatballs');
            dinnerLinks.classList.add('active');}

    if (selectedDinner === 'Chicken Cutlets') {
        var dinnerLinks = document.getElementById('chicken_cutlets');
            dinnerLinks.classList.add('active');}
    
    if (selectedDinner === 'Pork tenderloin') {
        var dinnerLinks = document.getElementById('pork_tenderloin');
        dinnerLinks.classList.add('active');}


    if (selectedDinner === 'Tacos') {
        var dinnerLinks = document.getElementById('tacos');
        dinnerLinks.classList.add('active');}

    if (selectedDinner === 'Chicken Enchiladas') {
        var dinnerLinks = document.getElementById('chicken_enchiladas');
        dinnerLinks.classList.add('active');}
    
    if (selectedDinner === 'Hotdogs') {
        var dinnerLinks = document.getElementById('hotdogs');
        dinnerLinks.classList.add('active');}

    if (selectedDinner === 'Stirfry') {
        var dinnerLinks = document.getElementById('stirfry');
        dinnerLinks.classList.add('active');}

     if (selectedDinner === 'Breakfast for dinner') {
         var dinnerLinks = document.getElementById('breakfast');
         dinnerLinks.classList.add('active');}   
        
    if (selectedDinner === 'Italian sausage') {
        var dinnerLinks = document.getElementById('italian_sausage');
        dinnerLinks.classList.add('active');} 
       
    if (selectedDinner === 'Steak') {
        var dinnerLinks = document.getElementById('italian_sausage');
        dinnerLinks.classList.add('active');} 
    
    if (selectedDinner === 'Barbeque pulled pork'){
        var dinnerLinks = document.getElementById('bbq_pork');
        dinnerLinks.classList.add('active');} 

    if (selectedDinner === 'Quesidillas'){
        var dinnerLinks = document.getElementById('quesidillas');
        dinnerLinks.classList.add('active');} 

    if (selectedDinner === 'Speghetti Squash'){
        var dinnerLinks = document.getElementById('speghetti_sqush');
        dinnerLinks.classList.add('active');} 

    if (selectedDinner === 'Macoroni and cheese'){
        var dinnerLinks = document.getElementById('mac_and_cheese');
        dinnerLinks.classList.add('active');} 
    }
 

    document.getElementById('dinner--button').addEventListener('click', showSelectedDinner)