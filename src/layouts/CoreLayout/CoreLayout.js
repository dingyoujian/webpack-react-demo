import React from 'react'
import Header from '../../components/Header'
import Top from '../../components/Top'
import Bottom from '../../components/Bottom'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
    <div className='root'>
        <Top/>
        <div className='container text-center'>
            <Header />
            <div className='core-layout__viewport'>
                {children}
            </div>
        </div>
        <Bottom/>
    </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
