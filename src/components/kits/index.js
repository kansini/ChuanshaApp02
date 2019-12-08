import animation from './animation'
import loading from './loading'
import customList from './customList'
import fotoList from './fotoList'

const components = {
    animation,
    loading,
    customList,
    fotoList
}

const install = (Vue, opts = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

export default install
