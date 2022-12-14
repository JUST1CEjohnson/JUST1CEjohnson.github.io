var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/JUST1CEjohnson/gh-pages.git', // Update to point to your repository  
        user: {
            name: 'Justin', // update to use your name
            email: 'test@testing.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)