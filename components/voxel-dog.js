import { useState, useEffect, useRef, useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import { Loading, Spacer } from '@nextui-org/react'
import * as THREE from 'three'
import { OrbitCOntrols } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from 'lib/model'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState(null)
  const [camera, setCamera] = useState(null)

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
