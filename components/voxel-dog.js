import { useState, useEffect, useRef, useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import { Loading, Spacer } from '@nextui-org/react'
import * as THREE from 'three'
import { OrbitCOntrols } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from 'lib/model'
import { Container } from 'postcss'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState(null)
  const [_camera, setCamera] = useState(null)
  const [target, setTarget] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialPosition, setInitialPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState(null)

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (containe && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitCOntrols(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target.copy(target)
    }
  }, [])

  return (
    <Box ref={refContainer} className="voxel-dog" m="auto">
      {loading && (
        <Loading
          loadingCss={{ $$loadingSize: '100px', $$loadingBorder: '10px' }}
          size="xl"
          position="relative"
          color="success"
          textColor="success"
        >
          DOG!!!!
        </Loading>
      )}
    </Box>
  )
}
export default VoxelDog
