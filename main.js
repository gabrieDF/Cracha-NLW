const LinkSocialMidia = {
  github: "gabrieDF",
  youtube: "GabrielDf013",
  facebook:"profile.php?id=100009274901525",
  instagram:"biel13_zs",
  twitter: ""
}

function ChangeSocialMidia(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMidia[social]}`
    
  }
}

ChangeSocialMidia()

function getGitHubProfilesInfos(){
  const url = `https://api.github.com/users/${LinkSocialMidia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubProfilesInfos()

