var ghpages = require('gh-pages');

ghpages.publish(
    'public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/JUST1CEjohnson/gh-pages.git',
        user: {
            name: 'JJ',
            email: 'forhours@hotmail.com'
        }
    },
    () => {
        console.log('Deploy complete!')
    }
)