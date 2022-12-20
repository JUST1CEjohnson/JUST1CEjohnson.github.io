var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://JUST1CEjohnson/JUST1CEjohnson/JUST1CEjohnson.github.io.git', // Update to point to your repository  
        user: {
            name: 'JJ', // update to use your name
            email: 'forhours@hotmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)