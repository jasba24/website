// Internals
import NotFound from './404'
import type { MyLocale } from '..'

export const table: MyLocale = {
  404: NotFound,
  defaultSeo: {
    title: 'Daniel Esteves - Frontend Developer',
    description:
      'Daniel Esteves desarrollador web frontend ha realizado sitios web utilizando WordPress, React, Gatsby, NextJS y mucho más. Listo para hacer tus sueños realidad.',
    shareImage: 'https://danestves.com/og.png',
  },
  header: {
    menu: {
      home: 'Inicio',
      aboutMe: 'Sobre Mí',
      openSource: 'Open Source',
      portfolio: 'Portafolio',
      blog: 'Blog',
      contact: 'Contacto',
    },
  },
  home: {
    summary:
      'Apasionado por la tecnología con muchas ganas de aprender y esparcir conocimiento por toda',
    buttons: {
      contact: {
        label: 'Contacto',
      },
    },
    videos: {
      title: 'Últimos videos:',
    },
    posts: {
      title: 'Últimos posts:',
    },
  },
  aboutMe: {
    seo: {
      title: 'Hola Mundo. Soy Daniel Esteves un Desarrollador Web Frontend',
      description:
        'Desde mi temprana adolescencia empecé a estudiar el "cómo", no sólo a aprender a usar los programas, sino a entender realmente cómo funcionan.',
    },
    intro: 'Hoy, soy',
    summary: {
      p1: 'Desde muy niño he estado interesado en las computadoras comenzando desde los videojuegos, cada vez que jugaba sentía una necesidad de saber cómo eso está funcionando y cómo mi personaje hace cualquier movimiento; probando cada día más y más juegos me empezó a interesar cómo se pueden hacer las gráficas del juego y la interactividad contra el usuario.',
      p2: 'Al llegar a la secundaria empecé a investigar sobre las computadoras y me empezó a interesar cómo las webs son construidas sobre todos las redes sociales, me gustaba la idea de que cuando un usuario le seleccionaba un menú se mostraban más opciones y animaciones, y eso fue lo que me enamoró del desarrollo web.',
      p3: 'Comencé hace cinco años a trabajar y aprender desde el frontend, la parte visual de la web; hoy en día me considero un fullstack ya que gracias a el conocimiento que he obtenido puedo construir aplicaciones desde las vistas hasta las bases de datos y rutas. Me gusta aprender cada día más, integrar nuevas tecnologías y contribuir a nuevos proyectos para mejorar la productividad.',
      sign: 'Los veo en el código',
    },
    experience: {
      title: 'Experiencia laboral',
    },
  },
  openSource: {
    seo: {
      title: 'Open Source - Proyectos para la comunidad',
      description:
        'Proyectos libres para aportar nuevas herramientas a la comunidad.',
    },
    highlights: {
      title: 'Proyectos destacados',
    },
    repositories: {
      title: 'Repositorios en GitHub',
    },
  },
  portfolio: {
    seo: {
      title: 'Portafolio - Proyectos previamente realizados',
      description:
        'Portafolio de Daniel Esteves para mostrar sus proyectos realizados en todo su trayecto como desarrollador web frontend. React, NextJS, Gatsby y WordPress.',
    },
    title: 'Portafolio',
    portfolios: {
      button: {
        label: 'Ver Portafolio',
      },
      industry: 'Industria',
      technology: 'Tecnología',
      web: 'Sitio Web',
    },
  },
  contact: {
    seo: {
      title: 'Contacto - Hagamos un proyecto juntos',
      description:
        'Hagamos esa idea realidad. Da el primer paso para tener tu producto o servicio en línea.',
    },
    title: 'Hagamos esa idea realidad',
    subtitle: 'Da el primer paso',
    summary:
      'Todo inicia con un mensaje. Una sola idea para dominarlos a todos 😎 haz crecer tu mercado o emerge con tu nuevo negocio.',
    steps: {
      first: '¿De qué se trata tu negocio?',
      second: '¿A qué nicho va dirigido?',
      third: '¿Es una reestructuración o creación desde cero?',
      fourth: '¿Qué tal si tomamos un poco de inspiración?',
      fifth: 'Fijemos fechas de entrega',
      sixth: 'Transformemos tu idea en un producto o servicio',
    },
    form: {
      name: {
        label: 'Nombre',
      },
      email: {
        label: 'Correo',
      },
      subject: {
        label: 'Asunto',
      },
      message: {
        label: 'Mensaje',
      },
      button: {
        label: 'Enviar',
      },
    },
  },
  blog: {
    seo: {
      title: 'Un blog para aprender sobre JS, React, Vue, recursos y mucho más',
      description:
        'Este blog está dedicado a todos aquellos que les gusta aprender un poco más de javascript ​por medio de sus ventajas y funciones.',
    },
    publishedAt: 'Publicado en',
    visits: 'visitas',
    alert: {
      text: 'If you are searching for the english version',
      button: {
        label: 'Click here',
      },
    },
    commentOnTwitter: 'Comentar en Twitter',
  },
  newsletter: {
    title: '¿Quieres ser el primero en leer mis posts?',
    summary:
      'Suscríbete al newsletter y tendrás tutoriales, noticias y posts de primera mano.',
    form: {
      label: 'Correo',
      placeholder: 'Ingresa tu correo',
      button: {
        sending: 'Enviando',
        label: 'Suscribirse',
      },
    },
    response: {
      email: {
        required: 'Tu correo es requerido para poder suscribirte',
      },
      success: 'Muchas gracias por suscribirte, nuevo contenido cada semana',
    },
    subscribed: 'personas se han suscrito al newsletter',
  },
  cta: {
    gif: {
      alt: 'Persona programando animadas a través de un GIF',
    },
    title: '¿Qué quieres lograr hoy?',
    summary:
      'Ponte en contacto a través de este botón para que pueda saber más de tu producto o servicio y podamos discutir la mejor manera de llevarlo a cabo.',
    button: {
      label: 'Hagamos esa idea realidad',
    },
  },
  footer: {
    copyright: 'Todos los derechos reservados',
  },
}
