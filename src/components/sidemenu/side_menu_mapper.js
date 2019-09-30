import { RC_LOAD_APP, RC_DOCKER, RC_DOCKER_MACHINES } from '../routers/RouteConstants';


export var naver = {
    [RC_LOAD_APP]: {
        "/": {
            "id": "M_HOME",
            "name": "Home",
            "url": RC_LOAD_APP,
            "fa_icon": "fa fa-home"
        },
        "fa_icon": "fa fa-home"
    },
    [RC_DOCKER]: {
        "/": {
            "id": "M_DOCKERS",
            "name": "Dockers",
            "url": RC_DOCKER,
            "fa_icon": "fab fa-docker"
        },
        "/machines": {
            "id": "M_DOCKERS_MACHINES",
            "name": "Docker Machines",
            "url": RC_DOCKER_MACHINES,
            "fa_icon": "fab fa-docker"
        },
        "fa_icon": "fab fa-docker"        
    }
}