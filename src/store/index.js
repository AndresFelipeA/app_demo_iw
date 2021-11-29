import { createStore } from 'vuex'

export default createStore({
  state: {

    infoUser: [

      {
        "id": 1,
        "name": "Juan",
        "lastname": "Perez",
        "email": "juan-per@gmail.com",
        "topic":[
          {
            "id": 1,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "11/10/2021",
            "status": "Pendiente"
          },
          {
            "id": 2,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "4/1/2021",
            "status": "Pendiente"
          },
          {
            "id": 3,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "15/7/2021",
            "status": "Rechazado"
          },
        ],
      },

      {
        "id": 2,
        "name": "Pedro",
        "lastname": "Rodriguez",
        "email": "per-rod@gmail.com",
        "topic":[
          {
            "id": 4,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "2/6/2021",
            "status": "Aprobado"
          },

          {
            "id": 5,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "10/1/2021",
            "status": "Aprobado"
          },

          {
            "id": 6,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "11/10/2021",
            "status": "Pendiente"
          },


        ],
      },
      {
        "id": 3,
        "name": "Carlos",
        "lastname": "García",
        "email": "carlosg@gmail.com",
        "topic":[
          {
            "id": 7,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "22/3/2021",
            "status": "Aprobado"
          },

          {
            "id": 8,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "10/1/2021",
            "status": "Aprobado"
          },

          {
            "id": 9,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "19/4/2021",
            "status": "Pendiente"
          },


        ],
      },
      {
        "id": 4,
        "name": "Diego",
        "lastname": "Beltrán",
        "email": "dibeltran@gmail.com",
        "topic":[
          {
            "id": 10,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "28/7/2021",
            "status": "Pendiente"
          },

          {
            "id": 11,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "10/12/2021",
            "status": "Pendiente"
          },

          {
            "id": 12,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "19/3/2021",
            "status": "Pendiente"
          },


        ],
      },
      {
        "id": 4,
        "name": "Fabian",
        "lastname": "Cortés",
        "email": "facortes@gmail.com",
        "topic":[
          {
            "id": 13,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "3/6/2021",
            "status": "Pendiente"
          },

          {
            "id": 14,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "10/12/2021",
            "status": "Aprobado"
          },

          {
            "id": 15,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "19/3/2021",
            "status": "Rechazado"
          },


        ],
      },

    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
