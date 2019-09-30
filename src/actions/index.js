export const ACTIVE_USER = "save_user";

/**
 * Validate the user
 * ----------------------
 * 
 * @param {*} loginDetails : {username, password}
 */
export function login(loginDetails) {
    return function(dispatch) {
        var res = {};
        res.data = {
            "permissions": "/,/docker,/docker/machines",
            "username": "Redux User",
            "empID": "-",
            "firstname": "Redux User"
        }
        dispatch( { 
            type: ACTIVE_USER,
            payload: res
        })
    }
}

/**
 *  Get the user Details
 * ------------------------
 * 
 * @param {*} userId :string
 */
export function fetchUser(userId) {
    return function(dispatch) {
        var res = {};
        res.data = {
            "permissions": "/,/docker,/docker/machines",
            "username": "Redux User",
            "empID": "-",
            "firstname": "Redux User"
        }
        dispatch( { 
            type: ACTIVE_USER,
            payload: res
        })        
    }
}