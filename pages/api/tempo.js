function tempo(request, response) {
  const apiSecret = process.env.USER
  const dynamicDate = new Date();

  const githubResponse = await fetch(`https://api.github.com/users/${apiSecret}`);
  const githubUser = githubResponse.login;

  response.json({
    date: dynamicDate.toGMTString(),
    githubUser: githubUser
  })
}

export default tempo;