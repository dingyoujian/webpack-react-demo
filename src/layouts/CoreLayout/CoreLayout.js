import React from 'react'
import Header from '../../components/Header'
import TopBackground from '../../components/TopBackground'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
    <div>
        <TopBackground />
        <div className='container text-center'>
            <Header />
            <div className='core-layout__viewport'>
                {children}
            </div>
        </div>
    </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
