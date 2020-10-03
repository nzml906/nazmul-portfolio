const projects = [
  {
    img: 'https://i.imgur.com/uwjNJNX.png',
    id: '14',
    titulo: 'Dev-MeetUp',
    linkGithub: 'https://github.com/nzml906/dev-meetup',
    linkSitio: 'https://nzml906.github.io/dev-meetup/#/',
    skills: ['vue js', 'vuex', 'vuetify', 'firebase']
  },
  {
    img: 'https://i.imgur.com/nskjLXC.png',
    id: '13',
    titulo: 'COVID-19-react',
    linkGithub: 'https://github.com/nzml906/COVID-19-react',
    linkSitio: 'https://nzml906.github.io/COVID-19-react/',
    skills: [
      'react js',
      'axios',
      'chart js',
      'react chart-js',
      'react metarial UI',
      'restful-webservices'
    ]
  },
  {
    img: 'https://i.imgur.com/c3BNEq2.png',
    id: '12',
    titulo: 'COVID-19',
    linkGithub: 'https://github.com/nzml906/COVID-19',
    linkSitio: 'https://nzml906.github.io/COVID-19/',
    skills: [
      'vue js',
      'axios',
      'chart js',
      'vue chart-js',
      'bootstrap',
      'restful-webservices'
    ]
  },
  {
    img: 'https://i.imgur.com/Q8kzZoH.png',
    id: '7',
    titulo: 'Vue todo application',
    linkGithub: 'https://github.com/nzml906/vue-todo',
    linkSitio: 'https://nzml906.github.io/vue-todo/#/',
    skills: ['Vue', 'Vuex', 'PWA', 'Task lists']
  },
  {
    img: 'https://i.imgur.com/MREOLfQ.png',
    id: '11',
    titulo: 'Admin-UI',
    linkGithub: 'https://github.com/nzml906/star-admin',
    linkSitio: 'https://nzml906.github.io/star-admin/#/',
    skills: [
      'bootstrap4',
      'bootstrap-vue',
      'html',
      'css',
      'scss',
      'Web-UI',
      'Figma design',
      'PSD to HTML'
    ]
  },
  // {
  //   img: 'https://i.imgur.com/dl4jBVn.png',
  //   id: '10',
  //   titulo: 'bootstrap-ui-portfolio',
  //   linkGithub: 'https://github.com/nzml906/bootstrap-ui-portfolio',
  //   linkSitio: 'https://nzml906.github.io/bootstrap-ui-portfolio/#/',
  //   skills: [
  //     'bootstrap4',
  //     'html',
  //     'css',
  //     'scss',
  //     'Web-UI',
  //     'Figma design',
  //     'PSD to HTML'
  //   ]
  // },

  {
    img: 'https://i.imgur.com/XH6PTqR.png',
    id: '10',
    titulo: 'TechForing Landing page',
    linkGithub: 'https://github.com/nzml906/foring',
    linkSitio: 'https://nzml906.github.io/foring/',
    skills: ['Bootstrap 4.5', 'scss', 'PSD to HTML']
  },

  {
    img: 'https://i.imgur.com/RyyOFUo.png',
    id: '9',
    titulo: 'PSD to HTML',
    linkGithub: 'https://github.com/nzml906/PSD2HTML_Natours_',
    linkSitio: 'https://nzml906.github.io/natours-vue/',
    skills: ['html', 'css', 'scss', 'Web-UI', 'Figma design', 'PSD to HTML']
  },
  {
    img: 'https://i.imgur.com/kJ7osgJ.png',
    id: '8',
    titulo: 'PSD to HTML',
    linkGithub: 'https://github.com/nzml906/PSD2HTML_Trillo_',
    linkSitio: 'https://nzml906.github.io/trillo-ui/',
    skills: ['html', 'css', 'scss', 'Web-UI', 'Figma design', 'PSD to HTML']
  },
  {
    img: 'https://i.imgur.com/mm3nuwb.png',
    id: '6',
    titulo: 'Realtime-chat',
    linkGithub: 'https://github.com/nzml906/MEVN-realtime-chat',
    linkSitio: 'https://fierce-dawn-90847.herokuapp.com/',
    skills: [
      'Vue',
      'Node MVC',
      'MongoDB',
      'Mongoose',
      'Express js',
      'RESTful APIs',
      'Authentication',
      'Authorization',
      'JWT-token',
      'Bcrypt-js',
      'Middleware',
      'Axios',
      'Jest',
      'Morgan',
      'Winstone'
    ]
  },
  {
    img: 'https://i.imgur.com/bkthkiE.png',
    id: '5',
    titulo: 'Portfolio Website',
    linkGithub: 'https://github.com/nzml906/nazmul-portfolio',
    linkSitio: 'https://nzml906.github.io/nazmul-portfolio/#/',
    skills: [
      'Vue',
      'Vue-Router',
      'Vue-Lazy-Image',
      'Vue-CLI',
      'Responsive Web App',
      'Scss'
    ]
  },
  {
    img: 'https://i.imgur.com/MlwuLaW.png',
    id: '4',
    titulo: 'vue-crud',
    linkGithub: 'https://github.com/nzml906/vue-crud',
    linkSitio: 'https://nzml906.github.io/vue-crud/#/',
    skills: ['vue', 'firebase', 'CRUD']
  },
  {
    img: 'https://i.imgur.com/t94dErV.png',
    id: '3',
    titulo: 'vue-shop',
    linkGithub: 'https://github.com/nzml906/vue-shopping',
    linkSitio: 'https://nzml906.github.io/vue-shopping/',
    skills: ['vue', 'vuex', 'scss', 'Shopping cart']
  },
  // {
  //   img: 'https://i.imgur.com/xsLgY4Z.png',
  //   id: '2',
  //   titulo: 'vue-news',
  //   linkGithub: 'https://github.com/nzml906/vue-news',
  //   linkSitio: 'https://nzml906.github.io/vue-news/',
  //   skills: ['vue', 'axios', 'api']
  // },
  {
    img: 'https://i.imgur.com/aQvEdsf.png',
    id: '1',
    titulo: 'nexter-real-estate',
    linkGithub: 'https://github.com/nzml906/nexter-real-estate',
    linkSitio: 'https://nzml906.github.io/nexter-real-estate/#/',
    skills: ['Sass', 'Css Grid', 'Css Flexbox', 'Responsive Design']
  }
];

export default projects;
