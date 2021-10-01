import { Component } from 'react'
import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/Resizer'

class World extends Component {
  constructor (props) {
    super(props)

    //3D Scene components
    this.container = document.getElementById('root')
    this.camera = createCamera()
    this.scene = createScene()

    // this is somewhat asynchronous or something...
    // not sure what's going on with it right now but it has to be in the contstructor
    this.renderer = createRenderer()
  }

  componentDidMount() {
    this.container.append(this.renderer.domElement)

    const cube = createCube()

    this.scene.add(cube)

    new Resizer(this.container, this.camera, this.renderer)

    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return null
  }
}

export default World
