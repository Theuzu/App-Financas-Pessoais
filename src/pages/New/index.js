import React, {useState} from "react";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";
import api from "../../services/api";

export default function New(){
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [typeInput, setTypeInput] = useState('receita')

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || typeInput == null){
            alert('Preencha todos os campos')
            return;
        }
        
        Alert.alert(
            'Confirmando Dados',
            `Tipo: ${typeInput}, Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Canelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(params) {
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: typeInput,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Background>
            <Header title="Registrando"/>
            <Input
            placeholder="Descrição do Registro"
            value={labelInput}
            onChangeText={ (text) => setLabelInput(text)}
            />
            <Input
            placeholder="Valor Desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={ (text) => setValueInput(text)}
            />

            <RegisterTypes 
            type={typeInput}
            sendTypeChanged={(item)=> setTypeInput(item)}
            />

            <SubmitButton onPress={handleSubmit}>
                <SubmitText>
                    Registrar
                </SubmitText>
            </SubmitButton>
        </Background>
    </TouchableWithoutFeedback>
    )
}