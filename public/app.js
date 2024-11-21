// Sélectionner les éléments du DOM
const searchButton = document.querySelector('#searchButton'); // Bouton de recherche
const searchInput = document.querySelector('input[type="search"]'); // Champ de recherche
const profileCard = document.querySelector('.card'); // Conteneur de la carte de profil

// Ajouter un événement au bouton de recherche
searchButton.addEventListener('click', async () => {
  const username = searchInput.value.trim(); // Récupérer la valeur du champ de recherche

  if (!username) {
    alert('Veuillez entrer un nom d\'utilisateur GitHub.');
    return;
  }

  // URL de l'API GitHub
  const apiUrl = `https://api.github.com/users/${username}`;
  
  try {
    // Requête API avec Axios
    const response = await axios.get(apiUrl);
    const userData = response.data; // Récupérer les données de l'utilisateur
  
    // Mettre à jour la carte de profil avec les données récupérées
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

// Fonction pour mettre à jour la carte de profil
function updateProfileCard(data) {
  profileCard.innerHTML = `
    <div class="card1 w-[90%] h-96 pt-5 bg-white shadow-xl shadow-gray-300 rounded-md">
      <div class="flex pl-4">
        <div class="img rounded-[50%] w-20 h-20" style="background-image: url('${data.avatar_url}'); background-size: cover; background-position: center;"></div>
        <div class="ml-4 mt-2">
          <h2 class="font-bold text-2xl text-gray-500">${data.name || 'Nom indisponible'}</h2>
          <h3 class="text-blue-400 font-semibold">@${data.login}</h3>
          <h4 class="text-gray-400 font-semibold md:hidden">Joined ${new Date(data.created_at).toLocaleDateString()}</h4>
          <span class="text-gray-400 font-semibold hidden md:block">${data.bio || 'Pas de bio disponible.'}</span>
        </div>
      </div>
      <div class="pt-4 pl-5">
        <div class="md:pl-20">
          <div class="flex justify-around md:justify-evenly w-[94%] md:w-[75%] bg-slate-100 rounded-md mt-5 mb-4 md:h-20 md:items-center">
            <div>
              <h1 class="text-gray-500 font-semibold">Repos</h1>
              <span class="flex justify-center items-center text-gray-500 ">${data.public_repos}</span>
            </div>
            <div>
              <h1 class="text-gray-500 font-semibold">Followers</h1>
              <span class="flex justify-center items-center text-gray-500 ">${data.followers}</span>
            </div>
            <div>
              <h1 class="text-gray-500 font-semibold">Following</h1>
              <span class="flex justify-center items-center text-gray-500 ">${data.following}</span>
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
              <h2 class=" text-gray-400 ">
                <a href="${data.blog || '#'}" target="_blank">${data.blog || 'Non disponible'}</a>
              </h2>
            </div>
          </div>
          <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
            <div class="flex gap-4">
              <img src="../github-user-search-app-icons/icon-twitter.svg" alt="">
              <h2 class=" text-gray-400 ">
                <a href="https://twitter.com/${data.twitter_username || ''}" target="_blank">${data.twitter_username || 'Non disponible'}</a>
              </h2>
            </div>
            <div class="flex gap-4">
              <img src="../github-user-search-app-icons/icon-company.svg" alt="">
              <h2 class=" text-gray-400 ">${data.company || 'Non disponible'}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

