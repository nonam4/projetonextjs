import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Switch from '../Switch'
import Icons from '../Icons'
import { Container, Settings } from './styles'

function Header({toggleTheme}) {
    const { colors, title } = useContext(ThemeContext)
    //console.log(colors.switchColor, colors.azul)
    return (
        <Container>
            Header
            <Settings>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={40}
                    handleDiameter={14}
                    offColor={colors.switchColor}
                    onColor={colors.switchColor}
                    hoverColor={colors.azul}
                    onHandleColor={colors.handleColor}
                    offHandleColor={colors.handleColor}
                />

                <Icons name={'download'} color={colors.switchColor} size={24}/>
            </Settings>
            
        </Container>
    )
}

export default Header