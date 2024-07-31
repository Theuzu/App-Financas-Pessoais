import React from 'react';
import { Container, ButtonMenu, Title } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

export default function Header({ title }) {
    const navigation = useNavigation()
    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <AntDesign name="bars" size={24} color="black" />
            </ButtonMenu>
            {title && (
                <Title>
                    {title}
                </Title>
                )}
        </Container>
    )
}