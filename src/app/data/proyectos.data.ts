export interface Proyecto {
  tipo: string
  texto_tipo: string,
  nombre: string,
  logo: string | null,
  video: string | null,
  imagen_home: string,
  imagen_portada?: string | null,
  texto: {
    departamento: string,
    cliente: string,
    descripcion: string,
  },
  imagenes: string[],
  url: string,
}
export const PROYECTOS: Proyecto[] = [
  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: 'MásMóvil eShops',
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/mm_eshops/mm_home.jpg',
    imagen_portada: 'assets/img_proyectos/mm_eshops/mm_portada.jpg',
    texto: {
      departamento: 'Senior frontend developer para el Grupo MásMóvil',
      cliente: 'Equipo de B2C een Grupo MásMóvil',
      descripcion: 'Frontend software developer para las "eShops" de la compañia, trabajando en distintas tecnologías según el proyecto en equipos Agile. Stack: desarrollo en REACT, next, react-redux, redux-toolkit, redux-persist, redux-observable, typescript, material-ui, tesiting Jest, Cypress, lerna, etc. Entornos de integración continua con jenkins. Integración con apis de terceros..., desarrollo en ANGULAR (actualizados a últimas versiones) + redux (NgRx) + rxjs + ssr + karma, consultas REST APIs, git + github, entorno de integración continua (circle ci, Jenkins) ... etc.',
    },
    imagenes: [
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
    url: 'graphene-telefonica',
  },
  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: 'Graphene Interface',
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/stv/stv_home.jpg',
    imagen_portada: 'assets/img_proyectos/stv/stv_portada.jpg',
    texto: {
      departamento: 'Frontend development team TV DIGITAL • OptivaMedia',
      cliente: 'Telefónica S.A..Graphene • Inteface para Televisión digital • Lanzamiento • Creación de maqueta, HTML5, CSS3, Javascript',
      descripcion: 'Desarrollo de interfaces gráficas para Set Top Box. Equipo de desarrollo de software para Digital TV (multidispositivo). Tecnologías: HTML5, CSS3 (preprocesadores), javascript (ES6-7, Vue, state management con Vuex ...), webpack, control de versiones Git, git-flow (github). Metodología ágil, uso de Jira, Zeplin… Integración de interfaz gráfica y comunicación con el middleware (openTV) del hardware. Gestión y llamadas al API backend de gestión de contenidos y usuarios de Telefónica.',
    },
    imagenes: [
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
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: "The Big Magazine",
    logo: null,
    video: '235306291?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/the_big_magazine/big_magazine_home.jpg',
    imagen_portada: 'assets/img_proyectos/the_big_magazine/big_magazine_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'The Big Magazine • Lanzamiento • Diseño de marca, UX/UI, creación de maqueta, HTML5, CSS3, Javascript',
      descripcion: 'The Big Magazine es una suscripción multi-plataforma a las mejores revistas nacionales. Nuestra labor fue crear el diseño de marca e imagen corporativa, diseño de interfaz y experiencia de usuario de todas las plataformas (web, tablet y smartphone). Desde el departamento de desarrollo frontend, realizamos la maqueta con su funcionalidad en javascript.'
    },
    imagenes: [
      'assets/img_proyectos/the_big_magazine/big_magazine_1.jpg',
      'assets/img_proyectos/the_big_magazine/big_magazine_2.jpg',
      'assets/img_proyectos/the_big_magazine/big_magazine_3.jpg'],
    url: 'the-big-magazine',
  },

  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: "Zed Usa",
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/usa/usa_home.jpg',
    imagen_portada: 'assets/img_proyectos/usa/usa_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: ' Zed USA • Diseño de marca, UI, maqueta App y Web mobile.',
      descripcion: 'Rediseño y funcionalidad de UI de diversas aplicaciones de la filial estadounidense, tales como Master Chef, BBZ Quiz, Copa América Centenario. HTML, CSS, Javascript'
    },
    imagenes: [
      'assets/img_proyectos/usa/usa_1.jpg',
      'assets/img_proyectos/usa/usa_2.jpg',
      'assets/img_proyectos/usa/usa_3.jpg',
      'assets/img_proyectos/usa/usa_4.jpg',
      'assets/img_proyectos/usa/usa_5.jpg',

    ],

    url: 'zed-usa',
  },

  {
    tipo: 'motion',
    texto_tipo: 'Motion Grapichs / animacion 2d / sonorización',
    nombre: "Pipiyó",
    logo: null,
    video: '235523412?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/pipiyo/pipiyo_home.jpg',
    imagen_portada: null,
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'PeeStickers • Lanzamiento • Diseño de marca, animaciones y motion graphics',
      descripcion: 'PeeStickers es uno de los productos desarrollados por Zed WW S.A. Se creó toda la línea gráfica y animaciones para vídeo promocional. Sonorización. corporativo y spots publicitarios. Así mismo se diseñó y ejecutó la misma línea gráfica para su web. HTML5, CSS3, Javascript. Animaciones svg con bodymovin.js'
    },
    imagenes: [
      'assets/img_proyectos/pipiyo/pipiyo_1.jpg',
      'assets/img_proyectos/pipiyo/pipiyo_2.jpg',
      'assets/img_proyectos/pipiyo/pipiyo_3.jpg'],
    url: 'pipiyo'
  },

  {
    tipo: 'front-end',
    texto_tipo: 'front-end / diseño',
    nombre: "24 Symbols",
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/24_symbols/24_symbols_home.jpg',
    imagen_portada: 'assets/img_proyectos/24_symbols/24_symbols_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: '24 Symbols',
      descripcion: 'Para 24 Symbols se realizaron diferentes campañas online dirigidas a la captación de suscriptores. Creamos los contenidos para redes sociales, realizamos diferentes piezas de venta como el "site demo" del producto a nivel internacional. En el lado frontend creamos la aplicación web para multidispositivo, responsive design y multiplataforma. HTML, CSS, Javascript'
    },
    imagenes: [
      'assets/img_proyectos/24_symbols/24_symbols_1.jpg',
      'assets/img_proyectos/24_symbols/24_symbols_2.jpg',
      'assets/img_proyectos/24_symbols/24_symbols_3.jpg'],
    url: '24-symbols'
  },

  {
    tipo: 'motion',
    texto_tipo: 'motion graphics',
    nombre: "World Kite Tour",
    logo: null,
    video: '235620957?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/wkt/wkt_home.jpg',
    imagen_portada: null,
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'World Kite Tour',
      descripcion: 'Animación de logo'
    },
    imagenes: [


    ],

    url: 'world-kite-tour'
  },

  {
    tipo: 'ambos',
    texto_tipo: 'front-end / diseño',
    nombre: "Vaughan systems APP",
    logo: null,
    video: '235306291?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/english_bits/english_bits_home.jpg',
    imagen_portada: 'assets/img_proyectos/english_bits/english_bits_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Vaughan Systems',
      descripcion: 'Vaughan se puso en contacto con Zed Worldwide para encargarle la creación de un nuevo producto basado en uno de sus cursos de inglés y también su lanzamiento en Latinoamérica a través de una suscripción para smartphones. ​Desde el departamento de desarrollo web se trabajó para crear la aplicación con tecnologías front (HTML, CSS, javascript) según los diseños de interfaz y de experiencia de usuario del departamento creativo (web, tablet y smartphone). Además se crearon vídeos promocionales para dar a conocer el producto en operadoras de telefonía de Latinoamérica.'
    },
    imagenes: [
      'assets/img_proyectos/english_bits/english_bits_1.jpg',
      'assets/img_proyectos/english_bits/english_bits_2.jpg',
      'assets/img_proyectos/english_bits/english_bits_3.jpg'],
    url: 'vaughan-system',
  },

  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: "Recargas PLUS",
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/movistar/movistar_home.jpg',
    imagen_portada: 'assets/img_proyectos/movistar/movistar_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Movistar • Desarrollo frontend del producto Recargas Plus',
      descripcion: '​Desde Zed Worldwide junto con Movistar pusimos en marcha el programa de fidelización de Movistar "Recargas Plus" para clientes de esta modalidad. El departamento creativo creó el diseño de marca del programa, diseño de interfaz y experiencia de usuario. Desde el departamento de desarrollo web, creamos las maquetas y desarrollo en HTML, CSS, Javascript, ActionScript 2 y Flash'
    },
    imagenes: [
      'assets/img_proyectos/movistar/movistar_1.jpg',
      'assets/img_proyectos/movistar/movistar_2.jpg',
      'assets/img_proyectos/movistar/movistar_3.jpg'],
    url: 'recargas-plus'
  },
  {
    tipo: 'motion',
    texto_tipo: 'front-end / motion graphics',
    nombre: "Felicitación",
    logo: null,
    video: '235620836?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/felicitacion/felicitacion_home.jpg',
    imagen_portada: null,
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Uso interno',
      descripcion: 'Edición y sonorización de tarjeta navideña para uso interno.'
    },
    imagenes: [],

    url: 'felicitacion-navidad'
  },

  {
    tipo: 'ambos',
    texto_tipo: 'front-end / motion graphics',
    nombre: "Club Zed",
    logo: null,
    video: '235633711?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/clubzed/clubzed_home.jpg',
    imagen_portada: 'assets/img_proyectos/clubzed/clubzed_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Club Zed • web/wap, UX/UI, prensa, spots TV.',
      descripcion: 'Lanzamiento Internacional del Club Zed. Un servicio de contenido móvil con diferentes modelos de negocio, servicios de suscripción, pay per download, freemium... Zed Worldwide opera en 70 países en 5 continentes con acuerdos (en algunos momentos) con más de 200 operadoras de telefonía móvil. Diferentes spots de TV cada semana, prensa diaria, diseño de las plataformas web y wap para diferentes países, campañas promocionales y de producto para móvil y web... Todas estas piezas se traducían a diferentes idiomas y se distribuían entre todos los países donde opera la compañía.El Club Zed consiguió una PLATA en los Premios a la EFICACIA 2007.'
    },
    imagenes: [
      'assets/img_proyectos/clubzed/clubzed_1.jpg',
      'assets/img_proyectos/clubzed/clubzed_2.jpg',
      'assets/img_proyectos/clubzed/clubzed_3.jpg'

    ],

    url: 'club-zed'
  },

  {
    tipo: 'ambos',
    texto_tipo: 'front-end / motion graphics',
    nombre: "Saboroto",
    logo: null,
    video: '235634544?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/saboroto/saboroto_home.jpg',
    imagen_portada: 'assets/img_proyectos/saboroto/saboroto_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Saboroto • desarrollo web y Animaciones.',
      descripcion: 'Lanzamiento del servicio Saboroto. Creación de la web y videos promocionales.'
    },
    imagenes: [

    ],

    url: 'saboroto'
  },

  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: "Iz Crowfinancing",
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/iz/iz_home.jpg',
    imagen_portada: 'assets/img_proyectos/iz/iz_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Iz Crowfinancing • desarrollo de la web.',
      descripcion: 'Lanzamiento del servicio online de búsqueda de financiación. Creación de la web (frontend).'
    },
    imagenes: [
      'assets/img_proyectos/iz/iz_1.jpg',
      'assets/img_proyectos/iz/iz_2.jpg',
      'assets/img_proyectos/iz/iz_3.jpg'
    ],

    url: 'iz-crowfinancing'
  },

  {
    tipo: 'motion',
    texto_tipo: 'motion graphics',
    nombre: "Symposium Zed",
    logo: null,
    video: '235634656?color=3fb2ba&title=0&byline=0&portrait=0',
    imagen_home: 'assets/img_proyectos/symposium/symposium_home.jpg',
    imagen_portada: null,
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'Club Zed • Video corporativo.',
      descripcion: 'Video corporativo para el Symposium anual de la compañia. 2008.'
    },
    imagenes: [


    ],

    url: 'symposium-zed'
  },

  {
    tipo: 'front-end',
    texto_tipo: 'front-end',
    nombre: "My planet Card",
    logo: null,
    video: null,
    imagen_home: 'assets/img_proyectos/myplanet/myplanet_home.jpg',
    imagen_portada: 'assets/img_proyectos/myplanet/myplanet_portada.jpg',
    texto: {
      departamento: 'Creative & Frontend development team • Zed Worldwide S.A.',
      cliente: 'My planet Card • Desarrollo web. HTML, CSS, Javascript',
      descripcion: 'Lanzamiento de la web que promociona la tarjeta "MyPlante Card" Prepaid Mastercard©'
    },
    imagenes: [
      'assets/img_proyectos/myplanet/myplanet_1.jpg',
      'assets/img_proyectos/myplanet/myplanet_2.jpg'
    ],

    url: 'my-planet-card'
  }

]
