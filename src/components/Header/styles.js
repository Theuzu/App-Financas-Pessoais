import styled from "styled-components";

export const Container = styled.SafeAreaView`
    padding-top: 10px;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 15px;
    margin-bottom: 15px;
    width: 100%;
    max-height: 60px;
    align-items: center;
    justify-content: flex-start;
`;

export const ButtonMenu = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 25px;
`;

export const Title = styled.Text`
    margin-left: 2%;
    font-size: 22px;
    color: black;
`;