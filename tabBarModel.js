import React from 'react';
import { View } from 'react-native';

//criando rotas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Paginas Autenticadas
import Home from '../pages/home';
import Inbox from '../pages/inbox';
import New from '../pages/new';
import Profile from '../pages/profile';
import Search from '../pages/search';

//Estilos
import { Ionicons } from '@expo/vector-icons';
import ButtonNew from '../components/ButtonNew';


export default function Routes() {

    const Tabs = createBottomTabNavigator();

 return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarStyle:{
                    backgroundColor: '#F49006',
                    borderTopWidth: 0,
                },
                
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: '#F5F5F5',
            }}
        >
                <Tabs.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused, size, color}) => {
                            if(focused){
                                return <Ionicons name='home' size={size} color={color} />
                            }
                                return <Ionicons name='home-outline' size={size} color={color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name='Search'
                    component={Search}
                    options={{
                        tabBarIcon: ({ focused, size, color}) => {
                            if(focused){
                                return <Ionicons name='search' size={size} color={color} />
                            }
                                return <Ionicons name='search-outline' size={size} color={color} />
                        }
                    }}
                />

                <Tabs.Screen
                    name='New'
                    component={New}
                    options={{
                        tabBarIcon: ({ focused, size, color}) => {
                            return <ButtonNew size={size} />
                        }
                    }}
                />
                
                <Tabs.Screen
                    name='Inbox'
                    component={Inbox}
                    options={{
                        tabBarIcon: ({ focused, size, color}) => {
                            if(focused){
                                return <Ionicons name='ios-chatbubble-ellipses' size={size} color={color} />
                            }
                                return <Ionicons name='ios-chatbubble-ellipses-outline' size={size} color={color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused, size, color}) => {
                            if(focused){
                                return <Ionicons name='person' size={size} color={color} />
                            }
                                return <Ionicons name='person-outline' size={size} color={color} />
                        }
                    }}
                />
        </Tabs.Navigator>
  );
}
