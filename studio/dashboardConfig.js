export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615864859d7d446a028eb2f6',
                  title: 'Sanity Studio',
                  name: 'agnes-bourdon-website-studio',
                  apiId: '4099ee92-e817-4407-a017-5ee055078586'
                },
                {
                  buildHookId: '61586485161351327c3c961a',
                  title: 'Landing pages Website',
                  name: 'agnes-bourdon-website',
                  apiId: '63358b3e-a5fe-4b67-b50a-429c86fd164f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MatteoGauthier/agnes-bourdon-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://agnes-bourdon-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
