let priceToggle = document.getElementById("flexSwitchCheckDefault");
        priceToggle.addEventListener("click", ()=>{
           let taxInfo = document.getElementsByClassName("tax-info");
           for(info of taxInfo){
            if(info.style.display != "inline"){
                info.style.display = "inline";
            }else{
                info.style.display = "none";
            }
           };
        });
        
//  let darkModeToggle = document.getElementById("darkmodeToggle");
//  let body = document.body;

// darkModeToggle.addEventListener("click", ()=>{
//     body.classList.toggle("dark-mode");

let darkModeToggle = document.getElementById('darkmodeToggle');
        let body = document.body;
        let  moonIcon = darkModeToggle.querySelector('.fa-moon');
        let sunIcon = darkModeToggle.querySelector('.fa-sun');

        let darkMode = localStorage.getItem('darkMode');

     
        if (darkMode === 'enabled') {
            body.classList.add('dark-mode');
            moonIcon.classList.add('d-none');
            sunIcon.classList.remove('d-none');
        }

      darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            moonIcon.classList.toggle('d-none');
            sunIcon.classList.toggle('d-none');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', null);
            }
        });

        if (darkMode === 'enabled') {
            document.querySelector('footer').classList.add('dark-mode');
        }
        
