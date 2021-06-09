import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

console.log(OrbitControls)

const cursor = {
    x:0,
    y:0
}
// cursor
window.addEventListener('mousemove',(event) => {
    // console.log(event.clientX)
    // console.log(event.clientY)
    // cursor.x = event.clientX / sizes.width// it is let cursor position constraint up to 1
    cursor.x = event.clientX / sizes.width- 0.5
    cursor.y = event.clientY / sizes.height- 0.5

    
    // console.log(event.clientX)
    // console.log(sizes.width)
    // console.log(cursor.x)
})

// console.log(gsap)
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(0.5, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// if update something, window size, camera, renderer all need to be reset
window.addEventListener('resize',()=>{
    console.log('resize')

    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)

})
// const aspectRatio = sizes.width / sizes.height
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio,
//     1 * aspectRatio,
//     1,
//     -1,
//     0.1,
//     100
// )

camera.position.z = 3
scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(window.devicePixelRatio)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

window.addEventListener('dblclick', ()=>{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    //webkitFullscreenElement is apple version call full screen
    if(!document.fullscreenElement)
    {
        if(canvas.requestFullscreen){
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen){
            canvas.requestFullscreen()
        }
    }
    else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
        else if(document.webkitFullscreen)
        {
            document.webkitExitFullscreen()
        }
       
    }
})

//Time
// let time = Date.now()

//clock
const clock = new THREE.Clock()

//animations
const tick = () =>{

    //Clock
    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)

    //time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    
    //update camera
    // camera.position.x = cursor.x * 3
    // camera.position.x = Math.sin(cursor.x * 10) * 3
    // camera.position.y = Math.cos(cursor.y * 10) * 3
    // camera.position.z = Math.cos(cursor.y * 2) * 3
    // console.log(Math.sin(cursor.x * 10))
    // camera.position.y = cursor.y * 5
    // camera.lookAt(new THREE.Vector3())
    // camera.lookAt(mesh.position)
    // console.log(cursor.x)
    // console.log(camera.position.x)
    // console.log(deltaTime)
    // console.log(time)

    // console.log('tick')


    //update objects 
    controls.update()

    // gsap.to(mesh.position, {duration:1, delay:1, x: Math.sin(elapsedTime)})

    // gsap.to(mesh.position, {x: Math.sin(elapsedTime)}) //the same below it
    // mesh.position.y = Math.sin(elapsedTime)
    
    // mesh.position.x = Math.cos(elapsedTime)
    // mesh.position.z = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)
    // mesh.position.x += 0.01
    // mesh.rotation.y += 0.001 * deltaTime //let object update time = screen update time


    // mesh.scale.x -= 0.01
    // console.log(mesh.position)
    // console.log(mesh)
    // console.log(geometry.parameters)
    // console.log(geometry)
    // console.log(mesh.scale.x)
    // if (mesh.position.x > 1){
    //     mesh.scale.x -= 0.01
    // }
    

    //render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()