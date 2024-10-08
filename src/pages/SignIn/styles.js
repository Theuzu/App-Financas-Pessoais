import styled from "styled-components";

export const Background = styled.View`
    flex:1;
    background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;


export const Input = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: "#121212";
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: #3b3dbf;
    width: 90%;
    height: 45px;
    margin-top: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 20px;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    /* font-size: 20px; */
    color: "#171717";
`;

