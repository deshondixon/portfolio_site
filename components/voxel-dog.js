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
    <Box ref={refContainer} position={[0, 0, 0]}>
      Dog!!!
    </Box>
  )
}
export default VoxelDog
