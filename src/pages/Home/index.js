import React, {
    useContext,
    useEffect,
    useState
} from "react";

import { View, Text, Button } from "react-native";

import api from "../../services/api";
import Header from "../../components/Header";
import BalanceItem from "../../components/BalanceItem";

import { format } from "date-fns"; 
import { AuthContext } from "../../contexts/auth";
import { useIsFocused } from '@react-navigation/native'

import {
    Background,
    ListBalance
} from "./styles";

export default function Home(){
    const isFocused =  useIsFocused();
    const [listBalance, setListBalance] = useState();

    const [dateMovements, setDateMovements] = useState(new Date())

    useEffect(()=>{
        let isActive = true;

        async function getMovements(){
            let dateFormated = format(dateMovements, "dd/MM/yyyy")

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setListBalance(balance.data);
            }
        }
        getMovements();

        return () => isActive = false
    }, [isFocused])

    const {signOut, user} = useContext(AuthContext);
    return(
        <Background>
            <Header
            title="Minhas Movimentações"
            />
            <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.tag}
            renderItem={({item}) => (<BalanceItem data={item}/>)}
            />
        </Background>
    )
}