export const navbarConfig = {
  filters:[
    {
      name: 'title',
      inputType: 'text',
      type: 'input',
      placeholder: 'Title',
    },
    {
      name: 'author',
      inputType: 'text',
      type: 'input',
      placeholder: 'Author',
    },
    {
      name: 'series',
      inputType: 'text',
      type: 'input',
      placeholder: 'Series',
    },
    {
      name: 'categories',
      inputType: 'text',
      type: 'select',
      placeholder: 'Categories',
      options: [
        '',
        'Animals, Bugs & Pets', 
        'Art, Creativity & Music', 
        'General Literature', 
        'Hobbies, Sports & Outdoors', 
        'Science Fiction & Fantasy', 
        'Real Life', 
        'Science & Technology', 
        'Mystery & Suspense', 
        'Reference'
      ]
    },
  ]
}