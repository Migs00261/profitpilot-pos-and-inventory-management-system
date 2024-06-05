'use client'
import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function RegistrationLottie() {
  return (
    <div className='w-full'>
        <Player
  autoplay
  loop
  src="/Registration.json"
  style={{ height: '500px', width: '100%' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    </div>
  )
}


export default RegistrationLottie