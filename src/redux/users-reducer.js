const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS';

let initialState = {
    users:[{id: 1, photo: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', followed: true, fullName:'Alina Sereda', status:'I am a boss', location:{city:'Kyiv', country:'Ukraine'}}, 
            {id: 2, photo: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', followed: false, fullName:'Ann Buraya', status:'I am a boss', location:{city:'Kyiv', country:'Ukraine'}},
            {id: 3, photo: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', followed: true, fullName:'Daria Stukalo', status:'I am a boss', location:{city:'Kyiv', country:'Ukraine'}},
            {id: 4, photo: 'https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', followed: true, fullName:'Asy Livingstone', status:'I am a boss', location:{city:'Kyiv', country:'Ukraine'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    } 
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    } 
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state 
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
