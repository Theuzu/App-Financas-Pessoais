import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
    align-items: center;
    flex: 1;
    background-color: #F0F4FF;
    margin-left: 15px;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #FFF;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    font-size: 24px;
    font-weight: 600;
`;