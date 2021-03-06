import { combineReducers } from 'redux'
import personal from '../reducers/personal'
import education from '../reducers/education'
import projects from '../reducers/projects'
import profession from '../reducers/profession'
import utils from '../reducers/utils'

const reducers = combineReducers({
  login,
  userForm,
  success,
  education, 
  projects,
  other,
  experience,
  formPersonalDetails
})

export default reducers
