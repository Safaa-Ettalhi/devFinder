// const darknLightButton = document.getElementById('darknLightButton');

// darknLightButton.addEventListener("click", function () {
//     alert('button clicked')
// })


// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener("click", function () {
//     prompt('9leb 6 9') })

// Get references to DOM elements
// const searchButton = document.getElementById('searchButton');
// const darknLightButton = document.getElementById('darknLightButton');
// const inputField = document.querySelector('input[type="search"]');
// const cardSection = document.querySelector('.card');

// // Function to display user information
// const displayUserInfo = (userData) => {


//     cardSection.innerHTML = `
//         <div class="w-[90%] h-96 pt-5 bg-white shadow-xl shadow-gray-300 rounded-md">
//             <div class="flex pl-4">
//                 <div class="img rounded-[50%] w-20 h-20 bg-[url('${userData.avatar_url}')] bg-cover bg-center"></div>
//                 <div class="ml-4 mt-2">
//                     <h2 class="font-bold text-2xl text-gray-500">${userData.name || "Not Available"}</h2>
//                     <h3 class="text-blue-400 font-semibold">@${userData.login}</h3>
//                     <h4 class="text-gray-400 font-semibold md:hidden">Joined ${new Date(userData.created_at).toLocaleDateString()}</h4>
//                     <span class="text-gray-400 font-semibold hidden md:block">${userData.bio || "This profile has no bio"}</span>
//                 </div>
//             </div>
//             <div class="pt-4 pl-5">
//                 <span class="text-gray-400 font-semibold md:hidden">${userData.bio || "This profile has no bio"}</span>
//                 <div class="md:pl-20">
//                     <div class="flex justify-around md:justify-evenly w-[94%] md:w-[75%] bg-slate-100 rounded-md mt-5 mb-4 md:h-20 md:items-center">
//                         <div>
//                             <h1 class="text-gray-500 font-semibold">Repos</h1>
//                             <span class="flex justify-center items-center text-gray-500">${userData.public_repos}</span>
//                         </div>
//                         <div>
//                             <h1 class="text-gray-500 font-semibold">Followers</h1>
//                             <span class="flex justify-center items-center text-gray-500">${userData.followers}</span>
//                         </div>
//                         <div>
//                             <h1 class="text-gray-500 font-semibold">Following</h1>
//                             <span class="flex justify-center items-center text-gray-500">${userData.following}</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="flex flex-col items-start gap-2 md:gap-10 pt-4 md:items-center">
//                     <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
//                         <div class="flex gap-5">
//                             <img src="../github-user-search-app-icons/icon-location.svg" alt="">
//                             <h2 class="text-blue-950">${userData.location || "Not Available"}</h2>
//                         </div>
//                         <div class="flex gap-4">
//                             <img src="../github-user-search-app-icons/icon-website.svg" alt="">
//                             <h2 class="text-gray-400"><a href="${userData.blog || "#"}" target="_blank">${userData.blog || "Not Available"}</a></h2>
//                         </div>
//                     </div>
//                     <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
//                         <div class="flex gap-4">
//                             <img src="../github-user-search-app-icons/icon-twitter.svg" alt="">
//                             <h2 class="text-gray-400"><a href="https://twitter.com/${userData.twitter_username || ""}" target="_blank">${userData.twitter_username || "Not Available"}</a></h2>
//                         </div>
//                         <div class="flex gap-4">
//                             <img src="../github-user-search-app-icons/icon-company.svg" alt="">
//                             <h2 class="text-gray-400">${userData.company || "Not Available"}</h2>
//                         </div>
//                     </div>     
//                 </div>
//             </div>
//         </div>
//     `;
// };

const searchButton = document.getElementById('searchButton');
const inputField = document.querySelector('input[type="search"]');
const cardSection = document.querySelector('.card');

const displayUserInfo = function (userData) {
    cardSection.innerHTML = `
    <div class="w-[90%] h-96 pt-5 bg-white shadow-xl shadow-gray-300 rounded-md">
            <div class="flex pl-4">
                <div class="img rounded-[50%] w-20 h-20 bg-[url(${userData.avatar_url})] bg-cover bg-center"></div>
                <div class="ml-4 mt-2">
                    <h2 class="font-bold text-2xl text-gray-500">${userData.name || "Not Available"}</h2>
                    <h3 class="text-blue-400 font-semibold">@${userData.login}</h3>
                    <h4 class="text-gray-400 font-semibold md:hidden">Joined ${new Date(userData.created_at).toLocaleDateString()}</h4>
                    <span class="text-gray-400 font-semibold hidden md:block">${userData.bio || "This profile has no bio"}</span>
                </div>
            </div>
            <div class="pt-4 pl-5">
                <span class="text-gray-400 font-semibold md:hidden">${userData.bio || "This profile has no bio"}</span>
                <div class="md:pl-20">
                    <div class="flex justify-around md:justify-evenly w-[94%] md:w-[75%] bg-slate-100 rounded-md mt-5 mb-4 md:h-20 md:items-center">
                        <div>
                            <h1 class="text-gray-500 font-semibold">Repos</h1>
                            <span class="flex justify-center items-center text-gray-500">${userData.public_repos}</span>
                        </div>
                        <div>
                            <h1 class="text-gray-500 font-semibold">Followers</h1>
                            <span class="flex justify-center items-center text-gray-500">${userData.followers}</span>
                        </div>
                        <div>
                            <h1 class="text-gray-500 font-semibold">Following</h1>
                            <span class="flex justify-center items-center text-gray-500">${userData.following}</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-2 md:gap-10 pt-4 md:items-center">
                    <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                        <div class="flex gap-5">
                            <img src="../github-user-search-app-icons/icon-location.svg" alt="">
                            <h2 class="text-blue-950">${userData.location || "Not Available"}</h2>
                        </div>
                        <div class="flex gap-4">
                            <img src="../github-user-search-app-icons/icon-website.svg" alt="">
                            <h2 class="text-gray-400"><a href="${userData.blog || "#"}" target="_blank">${userData.blog || "Not Available"}</a></h2>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 md:w-[80%] md:flex-row md:gap-44">
                        <div class="flex gap-4">
                            <img src="../github-user-search-app-icons/icon-twitter.svg" alt="">
                            <h2 class="text-gray-400"><a href="https://twitter.com/${userData.twitter_username || ""}" target="_blank">${userData.twitter_username || "Not Available"}</a></h2>
                        </div>
                        <div class="flex gap-4">
                            <img src="../github-user-search-app-icons/icon-company.svg" alt="">
                            <h2 class="text-gray-400">${userData.company || "Not Available"}</h2>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    `
}

// Function to display error message
const displayError = function (message) {
    cardSection.innerHTML = `
        <div class="text-center text-red-500 font-bold">
            ${message}
        </div>
    `;
};

const fetchUserData = function (username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(function (response) {
        displayUserInfo(response.data)
    })
    .catch(function (error) {
        displayError(error);
    })
}

// Fetch user data from GitHub API
// const fetchUserData = function (username) {
//     axios.get(`https://api.github.com/users/${username}`)
//     .then(function (response) {
//          displayUserInfo(response.data);
//     })
//     .catch(
//         displayError();
//     )
// }

// Add event listener to the search button
searchButton.addEventListener('click', () => {
    const username = inputField.value.trim();
    if (username) {
        fetchUserData(username);
    } else {
        displayError("Please enter a username.");
    }
});
