const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('input[type="search"]'); 
const profileCard = document.querySelector('.card');
const darkBtn = document.getElementById('dark-light');
const whiteBtn = document.getElementById('white-light');
const body = document.querySelector('body');
const section = document.querySelector('section');
const card = document.querySelector('.card1');

let isDarkMode = false;

searchButton.addEventListener('click', async () => {
  const username = searchInput.value.trim();

  if (!username) {
    alert('Veuillez entrer un nom d\'utilisateur GitHub.');
    return;
  }

  const apiUrl = `https://api.github.com/users/${username}`;
  
  try {
    const response = await axios.get(apiUrl);
    const userData = response.data;
  
    updateProfileCard(userData);
  } catch (error) {
    console.error('Erreur lors de la requête API :', error);
    profileCard.innerHTML = `
      <div class="text-center text-red-500 font-semibold">
        Utilisateur introuvable. Veuillez vérifier le nom d'utilisateur.
      </div>
    `;
  }
});


function updateProfileCard(data) {

    if (!isDarkMode) {
        profileCard.innerHTML = `
        <div class="card1 w-[90%] h-96 pt-5 bg-white shadow-xl shadow-gray-300 rounded-md">
            <div class="flex pl-4">
            <div class="img rounded-[50%] w-20 h-20" style="background-image: url('${data.avatar_url}'); background-size: cover; background-position: center;"></div>
            <div class="ml-4 mt-2">
                <h2 class="font-bold text-2xl text-gray-500">${data.name || 'Nom indisponible'}</h2>
                <h3 class="text-blue-400 font-semibold">@${data.login}</h3>
                <h4 class="text-gray-400 font-semibold md:hidden">Joined ${new Date(data.created_at).toLocaleDateString()}</h4>
                <span class="bio text-gray-400 font-semibold hidden md:block">${data.bio || 'Pas de bio disponible.'}</span>
            </div>
            </div>
            <div class="pt-4 pl-5">
            <div class="md:pl-20">
                <div class="stats-container flex justify-around md:justify-evenly w-[94%] md:w-[75%] bg-slate-100 rounded-md mt-5 mb-4 md:h-20 md:items-center">
                <div>
                    <h1 class="title text-gray-500 font-semibold">Repos</h1>
                    <span class="stats flex justify-center items-center text-gray-500 ">${data.public_repos}</span>
                </div>
                <div>
                    <h1 class="title text-gray-500 font-semibold">Followers</h1>
                    <span class="stats flex justify-center items-center text-gray-500 ">${data.followers}</span>
                </div>
                <div>
                    <h1 class="title text-gray-500 font-semibold">Following</h1>
                    <span class="stats flex justify-center items-center text-gray-500 ">${data.following}</span>
                </div>
                </div>
            </div>
            <div class="flex flex-col items-start gap-2 md:gap-10 pt-4 md:items-center">
                <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                <div class="flex gap-5">
                    <img src="../github-user-search-app-icons/icon-location.svg" alt="">
                    <h2 class="text-blue-950">${data.location || 'Non disponible'}</h2>
                </div>
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-website.svg" alt="">
                    <h2 class=" text-gray-500 ">
                    <a href="${data.blog || '#'}" target="_blank">${data.blog || 'Non disponible'}</a>
                    </h2>
                </div>
                </div>
                <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-twitter.svg" alt="">
                    <h2 class=" text-gray-500 ">
                    <a href="https://twitter.com/${data.twitter_username || ''}" target="_blank">${data.twitter_username || 'Non disponible'}</a>
                    </h2>
                </div>
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-company.svg" alt="">
                    <h2 class=" text-gray-500 ">${data.company || 'Non disponible'}</h2>
                </div>
                </div>
            </div>
            </div>
        </div>
        `; 
    } else {
        profileCard.innerHTML = `<div class="card1 w-[90%] h-96 pt-5 bg-slate-700 shadow-xl rounded-md">
            <div class="flex pl-4">
            <div class="img rounded-[50%] w-20 h-20" style="background-image: url('${data.avatar_url}'); background-size: cover; background-position: center;"></div>
            <div class="ml-4 mt-2">
                <h2 class="font-bold text-2xl text-white">${data.name || 'Nom indisponible'}</h2>
                <h3 class="text-blue-400 font-semibold">@${data.login}</h3>
                <h4 class="text-white font-semibold md:hidden">Joined ${new Date(data.created_at).toLocaleDateString()}</h4>
                <span class="bio text-white font-semibold hidden md:block">${data.bio || 'Pas de bio disponible.'}</span>
            </div>
            </div>
            <div class="pt-4 pl-5">
            <div class="md:pl-20">
                <div class="stats-container flex justify-around md:justify-evenly w-[94%] md:w-[75%] bg-slate-500 rounded-md mt-5 mb-4 md:h-20 md:items-center">
                <div>
                    <h1 class="title text-white font-semibold">Repos</h1>
                    <span class="stats flex justify-center items-center text-white">${data.public_repos}</span>
                </div>
                <div>
                    <h1 class="title text-white font-semibold">Followers</h1>
                    <span class="stats flex justify-center items-center text-white">${data.followers}</span>
                </div>
                <div>
                    <h1 class="title text-white font-semibold">Following</h1>
                    <span class="stats flex justify-center items-center text-white">${data.following}</span>
                </div>
                </div>
            </div>
            <div class="flex flex-col items-start gap-2 md:gap-10 pt-4 md:items-center">
                <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                <div class="flex gap-5">
                    <img src="../github-user-search-app-icons/icon-location.svg" alt="">
                    <h2 class="text-white">${data.location || 'Non disponible'}</h2>
                </div>
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-website.svg" alt="">
                    <h2 class="text-white">
                    <a href="${data.blog || '#'}" target="_blank">${data.blog || 'Non disponible'}</a>
                    </h2>
                </div>
                </div>
                <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-twitter.svg" alt="">
                    <h2 class="text-white">
                    <a href="https://twitter.com/${data.twitter_username || ''}" target="_blank">${data.twitter_username || 'Non disponible'}</a>
                    </h2>
                </div>
                <div class="flex gap-4">
                    <img src="../github-user-search-app-icons/icon-company.svg" alt="">
                    <h2 class="text-white">${data.company || 'Non disponible'}</h2>
                </div>
                </div>
            </div>
            </div>
        </div>`
    }


            
}
function darkTheme() {
    darkBtn.addEventListener('click', function () {
        isDarkMode = true;

        darkBtn.classList.add('hidden');
        whiteBtn.classList.remove('hidden')
        whiteBtn.classList.add('block');
        
        body.classList.remove('bg-gray-100');
        body.classList.add('bg-gray-700', 'text-white');
    
       const dynamicCard = document.querySelector('.card1');
       const titles = document.querySelectorAll('h1, h2, h4, span');
       const bio = document.querySelectorAll('.bio');
       const stats = document.querySelectorAll('.stats');
       const container = document.querySelector('.stats-container');
       const navbar = document.querySelector('.nav5');
       const searchBar = document.querySelector('input[type="search"]');

       if(searchBar) {
        searchBar.classList.remove('bg-white');
        searchBar.classList.add('bg-slate-700');
       }

       if(navbar) {
        navbar.classList.remove('bg-white', 'shadow-gray-300');
        navbar.classList.add('bg-slate-700');
       }

       if (dynamicCard) {
        dynamicCard.classList.remove('bg-white', 'shadow-gray-300');
        dynamicCard.classList.add('bg-slate-700');
       }

       if(container) {
            container.classList.remove('bg-slate-100');
            container.classList.add('bg-slate-500')
       }

       titles.forEach(function (title) {
        title.classList.remove('text-gray-500', 'bg-slate-100');
        title.classList.add('text-white');
       })

       
       if (bio) {
            bio.classList.remove('text-gray-500');
            bio.classList.add('text-white');
       }

       
       stats.forEach(function (stats) {
        stats.classList.remove('bg-slate-100');
        stats.classList.add('text-white');
       })
    })    
}


function whiteTheme() {
    whiteBtn.addEventListener('click', function () {
        isDarkMode = false;

        whiteBtn.classList.add('hidden');
        darkBtn.classList.remove('hidden')
        darkBtn.classList.add('block');
    
        body.classList.remove('bg-gray-700', 'text-white');
        body.classList.add('bg-gray-100');
    
        const dynamicCard = document.querySelector('.card1');
        const titles = document.querySelectorAll('h1, h2, h4');
        const bio = document.querySelector('.bio');
        const stats = document.querySelectorAll('.stats');
        const container = document.querySelector('.stats-container');
        const navbar = document.querySelector('.nav5');
       const searchBar = document.querySelector('input[type="search"]');

       if(searchBar) {
           searchBar.classList.remove('bg-slate-700');
        searchBar.classList.add('bg-white');
       }

       if(navbar) {
           navbar.classList.remove('bg-slate-700');
           navbar.classList.add('bg-white');
       }

        if (dynamicCard) {
            dynamicCard.classList.remove('bg-gray-800', 'shadow-gray-600');
            dynamicCard.classList.add('bg-white');
        }

        if(container) {
            container.classList.remove('bg-slate-500', 'shadow-slate-700')
            container.classList.add('bg-slate-100');
       }

        titles.forEach((title) => {
            title.classList.remove('text-white');
            title.classList.add('text-gray-500');
        });

        if (bio) {
            bio.classList.remove('text-white');
            bio.classList.add('text-gray-500');
        }

        stats.forEach((stats) => {
            stats.classList.remove('text-white');
            stats.classList.add('text-gray-500');
        });
    })
}


darkTheme();
whiteTheme();






