enum ProjectType {
  FRONTEND = 'front-end',
  MOTION = 'motion',
  BOTH = 'ambos'
}
export interface Project {
  type: ProjectType
  typeText: string,
  name: string,
  logo: string | null,
  video: string | null,
  imageHome: string,
  imageCover?: string | null,
  text: {
    department: string,
    client: string,
    description: string,
  },
  images: string[],
  url: string,
}

export const PROYECTOS: Project[] = [
  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: 'MásMóvil eShops Yoigo',
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/mm_eshops/mm_home.jpg',
    imageCover: 'assets/img_proyectos/mm_eshops/mm_portada.jpg',
    text: {
      department: 'Senior frontend developer para el Grupo MásMóvil',
      client: 'Equipo de B2C een Grupo MásMóvil',
      description: 'Frontend software developer para las "eShops" de la compañia, trabajando en distintas tecnologías según el proyecto en equipos Agile. Stack: desarrollo en REACT, next, react-redux, redux-toolkit, redux-persist, redux-observable, typescript, material-ui, tesiting Jest, Cypress, lerna, etc. Entornos de integración continua con jenkins. Integración con apis de terceros..., desarrollo en ANGULAR (actualizados a últimas versiones) + redux (NgRx) + rxjs + ssr + karma, consultas REST APIs, git + github, entorno de integración continua (circle ci, Jenkins) ... etc.',
    },
    images: [
      'assets/img_proyectos/mm_eshops/mm_1.png',
      'assets/img_proyectos/mm_eshops/mm_2.png',
      'assets/img_proyectos/mm_eshops/mm_3.png',
      'assets/img_proyectos/mm_eshops/mm_4.png',
      'assets/img_proyectos/mm_eshops/mm_5.png',
      'assets/img_proyectos/mm_eshops/mm_6.png',
      'assets/img_proyectos/mm_eshops/mm_7.png',
      'assets/img_proyectos/mm_eshops/mm_8.png',
      'assets/img_proyectos/mm_eshops/mm_9.png',
      'assets/img_proyectos/mm_eshops/mm_10.png'],
    url: 'masmovil-eshops',
  },
  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: 'Graphene Interface',
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/stv/stv_home.jpg',
    imageCover: 'assets/img_proyectos/stv/stv_portada.jpg',
    text: {
      department: 'Frontend development team TV DIGITAL • OptivaMedia',
      client: 'Telefónica S.A..Graphene • Inteface para Televisión digital • Lanzamiento • Creación de maqueta, HTML5, CSS3, Javascript',
      description: 'Desarrollo de interfaces gráficas para Set Top Box. Equipo de desarrollo de software para Digital TV (multidispositivo). Tecnologías: HTML5, CSS3 (preprocesadores), javascript (ES6-7, Vue, state management con Vuex ...), webpack, control de versiones Git, git-flow (github). Metodología ágil, uso de Jira, Zeplin… Integración de interfaz gráfica y comunicación con el middleware (openTV) del hardware. Gestión y llamadas al API backend de gestión de contenidos y usuarios de Telefónica.',
    },
    images: [
      'assets/img_proyectos/stv/stv_1.jpg',
      'assets/img_proyectos/stv/stv_2.jpg',
      'assets/img_proyectos/stv/stv_3.jpg',
      'assets/img_proyectos/stv/stv_4.jpg',
      'assets/img_proyectos/stv/stv_5.jpg',
      'assets/img_proyectos/stv/stv_6.jpg',
      'assets/img_proyectos/stv/stv_7.jpg',
      'assets/img_proyectos/stv/stv_8.jpg',
      'assets/img_proyectos/stv/stv_9.jpg',
      'assets/img_proyectos/stv/stv_10.jpg'],
    url: 'graphene-telefonica',
  },
  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: "The Big Magazine",
    logo: null,
    video: '235306291?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/the_big_magazine/big_magazine_home.jpg',
    imageCover: 'assets/img_proyectos/the_big_magazine/big_magazine_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'The Big Magazine • Lanzamiento • Diseño de marca, UX/UI, creación de maqueta, HTML5, CSS3, Javascript',
      description: 'The Big Magazine es una suscripción multi-plataforma a las mejores revistas nacionales. Nuestra labor fue crear el diseño de marca e imagen corporativa, diseño de interfaz y experiencia de usuario de todas las plataformas (web, tablet y smartphone). Desde el department de desarrollo frontend, realizamos la maqueta con su funcionalidad en javascript.'
    },
    images: [
      'assets/img_proyectos/the_big_magazine/big_magazine_1.jpg',
      'assets/img_proyectos/the_big_magazine/big_magazine_2.jpg',
      'assets/img_proyectos/the_big_magazine/big_magazine_3.jpg'],
    url: 'the-big-magazine',
  },

  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: "Zed Usa",
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/usa/usa_home.jpg',
    imageCover: 'assets/img_proyectos/usa/usa_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: ' Zed USA • Diseño de marca, UI, maqueta App y Web mobile.',
      description: 'Rediseño y funcionalidad de UI de diversas aplicaciones de la filial estadounidense, tales como Master Chef, BBZ Quiz, Copa América Centenario. HTML, CSS, Javascript'
    },
    images: [
      'assets/img_proyectos/usa/usa_1.jpg',
      'assets/img_proyectos/usa/usa_2.jpg',
      'assets/img_proyectos/usa/usa_3.jpg',
      'assets/img_proyectos/usa/usa_4.jpg',
      'assets/img_proyectos/usa/usa_5.jpg',

    ],

    url: 'zed-usa',
  },

  {
    type: ProjectType.MOTION,
    typeText: 'Motion Grapichs / animacion 2d / sonorización',
    name: "Pipiyó",
    logo: null,
    video: '235523412?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/pipiyo/pipiyo_home.jpg',
    imageCover: null,
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'PeeStickers • Lanzamiento • Diseño de marca, animaciones y motion graphics',
      description: 'PeeStickers es uno de los productos desarrollados por Zed WW S.A. Se creó toda la línea gráfica y animaciones para vídeo promocional. Sonorización. corporativo y spots publicitarios. Así mismo se diseñó y ejecutó la misma línea gráfica para su web. HTML5, CSS3, Javascript. Animaciones svg con bodymovin.js'
    },
    images: [
      'assets/img_proyectos/pipiyo/pipiyo_1.jpg',
      'assets/img_proyectos/pipiyo/pipiyo_2.jpg',
      'assets/img_proyectos/pipiyo/pipiyo_3.jpg'],
    url: 'pipiyo'
  },

  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end / diseño',
    name: "24 Symbols",
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/24_symbols/24_symbols_home.jpg',
    imageCover: 'assets/img_proyectos/24_symbols/24_symbols_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: '24 Symbols',
      description: 'Para 24 Symbols se realizaron diferentes campañas online dirigidas a la captación de suscriptores. Creamos los contenidos para redes sociales, realizamos diferentes piezas de venta como el "site demo" del producto a nivel internacional. En el lado frontend creamos la aplicación web para multidispositivo, responsive design y multiplataforma. HTML, CSS, Javascript'
    },
    images: [
      'assets/img_proyectos/24_symbols/24_symbols_1.jpg',
      'assets/img_proyectos/24_symbols/24_symbols_2.jpg',
      'assets/img_proyectos/24_symbols/24_symbols_3.jpg'],
    url: '24-symbols'
  },

  {
    type: ProjectType.MOTION,
    typeText: 'motion graphics',
    name: "World Kite Tour",
    logo: null,
    video: '235620957?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/wkt/wkt_home.jpg',
    imageCover: null,
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'World Kite Tour',
      description: 'Animación de logo'
    },
    images: [


    ],

    url: 'world-kite-tour'
  },

  {
    type: ProjectType.BOTH,
    typeText: 'front-end / diseño',
    name: "Vaughan systems APP",
    logo: null,
    video: '235306291?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/english_bits/english_bits_home.jpg',
    imageCover: 'assets/img_proyectos/english_bits/english_bits_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Vaughan Systems',
      description: 'Vaughan se puso en contacto con Zed Worldwide para encargarle la creación de un nuevo producto basado en uno de sus cursos de inglés y también su lanzamiento en Latinoamérica a través de una suscripción para smartphones. ​Desde el department de desarrollo web se trabajó para crear la aplicación con tecnologías front (HTML, CSS, javascript) según los diseños de interfaz y de experiencia de usuario del department creativo (web, tablet y smartphone). Además se crearon vídeos promocionales para dar a conocer el producto en operadoras de telefonía de Latinoamérica.'
    },
    images: [
      'assets/img_proyectos/english_bits/english_bits_1.jpg',
      'assets/img_proyectos/english_bits/english_bits_2.jpg',
      'assets/img_proyectos/english_bits/english_bits_3.jpg'],
    url: 'vaughan-system',
  },

  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: "Recargas PLUS",
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/movistar/movistar_home.jpg',
    imageCover: 'assets/img_proyectos/movistar/movistar_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Movistar • Desarrollo frontend del producto Recargas Plus',
      description: '​Desde Zed Worldwide junto con Movistar pusimos en marcha el programa de fidelización de Movistar "Recargas Plus" para clients de esta modalidad. El department creativo creó el diseño de marca del programa, diseño de interfaz y experiencia de usuario. Desde el department de desarrollo web, creamos las maquetas y desarrollo en HTML, CSS, Javascript, ActionScript 2 y Flash'
    },
    images: [
      'assets/img_proyectos/movistar/movistar_1.jpg',
      'assets/img_proyectos/movistar/movistar_2.jpg',
      'assets/img_proyectos/movistar/movistar_3.jpg'],
    url: 'recargas-plus'
  },
  {
    type: ProjectType.MOTION,
    typeText: 'front-end / motion graphics',
    name: "Felicitación",
    logo: null,
    video: '235620836?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/felicitacion/felicitacion_home.jpg',
    imageCover: null,
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Uso interno',
      description: 'Edición y sonorización de tarjeta navideña para uso interno.'
    },
    images: [],

    url: 'felicitacion-navidad'
  },

  {
    type: ProjectType.BOTH,
    typeText: 'front-end / motion graphics',
    name: "Club Zed",
    logo: null,
    video: '235633711?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/clubzed/clubzed_home.jpg',
    imageCover: 'assets/img_proyectos/clubzed/clubzed_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Club Zed • web/wap, UX/UI, prensa, spots TV.',
      description: 'Lanzamiento Internacional del Club Zed. Un servicio de contenido móvil con diferentes modelos de negocio, servicios de suscripción, pay per download, freemium... Zed Worldwide opera en 70 países en 5 continentes con acuerdos (en algunos momentos) con más de 200 operadoras de telefonía móvil. Diferentes spots de TV cada semana, prensa diaria, diseño de las plataformas web y wap para diferentes países, campañas promocionales y de producto para móvil y web... Todas estas piezas se traducían a diferentes idiomas y se distribuían entre todos los países donde opera la compañía.El Club Zed consiguió una PLATA en los Premios a la EFICACIA 2007.'
    },
    images: [
      'assets/img_proyectos/clubzed/clubzed_1.jpg',
      'assets/img_proyectos/clubzed/clubzed_2.jpg',
      'assets/img_proyectos/clubzed/clubzed_3.jpg'

    ],

    url: 'club-zed'
  },

  {
    type: ProjectType.BOTH,
    typeText: 'front-end / motion graphics',
    name: "Saboroto",
    logo: null,
    video: '235634544?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/saboroto/saboroto_home.jpg',
    imageCover: 'assets/img_proyectos/saboroto/saboroto_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Saboroto • desarrollo web y Animaciones.',
      description: 'Lanzamiento del servicio Saboroto. Creación de la web y videos promocionales.'
    },
    images: [

    ],

    url: 'saboroto'
  },

  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: "Iz Crowfinancing",
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/iz/iz_home.jpg',
    imageCover: 'assets/img_proyectos/iz/iz_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Iz Crowfinancing • desarrollo de la web.',
      description: 'Lanzamiento del servicio online de búsqueda de financiación. Creación de la web (frontend).'
    },
    images: [
      'assets/img_proyectos/iz/iz_1.jpg',
      'assets/img_proyectos/iz/iz_2.jpg',
      'assets/img_proyectos/iz/iz_3.jpg'
    ],

    url: 'iz-crowfinancing'
  },

  {
    type: ProjectType.MOTION,
    typeText: 'motion graphics',
    name: "Symposium Zed",
    logo: null,
    video: '235634656?color=3fb2ba&title=0&byline=0&portrait=0',
    imageHome: 'assets/img_proyectos/symposium/symposium_home.jpg',
    imageCover: null,
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'Club Zed • Video corporativo.',
      description: 'Video corporativo para el Symposium anual de la compañia. 2008.'
    },
    images: [


    ],

    url: 'symposium-zed'
  },

  {
    type: ProjectType.FRONTEND,
    typeText: 'front-end',
    name: "My planet Card",
    logo: null,
    video: null,
    imageHome: 'assets/img_proyectos/myplanet/myplanet_home.jpg',
    imageCover: 'assets/img_proyectos/myplanet/myplanet_portada.jpg',
    text: {
      department: 'Creative & Frontend development team • Zed Worldwide S.A.',
      client: 'My planet Card • Desarrollo web. HTML, CSS, Javascript',
      description: 'Lanzamiento de la web que promociona la tarjeta "MyPlante Card" Prepaid Mastercard©'
    },
    images: [
      'assets/img_proyectos/myplanet/myplanet_1.jpg',
      'assets/img_proyectos/myplanet/myplanet_2.jpg'
    ],

    url: 'my-planet-card'
  }

]
