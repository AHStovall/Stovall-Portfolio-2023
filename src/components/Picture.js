import React from 'react'
import { Image } from 'semantic-ui-react'
import picture from '../images/profilePicture.jpg';
// insert image link above

const Picture = () => (
  <div>
    <Image src={picture} />
  </div>
)

export default Picture