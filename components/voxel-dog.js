import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitCOntrols } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from 'lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()

  return (
    <Box
      ref={refContainer}
      className="voxel-dog"
      m="auto"
      at={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
    >
      Dog!!!
    </Box>
  )
}
export default VoxelDog
