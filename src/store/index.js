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
            "status": "Aprobado"
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
            "id": 1,
            "title": "Vacaciones",
            "description": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum cursus, mauris vitae mollis maximus, enim est mollis libero, non tincidunt risus odio vel risus. ",
            "date": "2/6/2021",
            "status": "Aprobado"
          },

          {
            "id": 2,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "10/1/2021",
            "status": "Aprobado"
          },

          {
            "id": 3,
            "title": "Permiso",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec finibus orci, ultricies pharetra arcu. Nullam ultricies lacinia nibh, quis accumsan ex dictum in. Vivamus vel rutrum diam.",
            "date": "11/10/2021",
            "status": "Pendiente"
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
