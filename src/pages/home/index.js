import React, {useRef, useState} from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform, FlatList } from 'react-native';

import { styles } from './style';
import { feedItems } from '../../components/list';
import FeedView from '../../components/FeedView';

import { Feather } from '@expo/vector-icons';

export default function Home() {
  const [showItem, setShowItem] = useState(feedItems[0]);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index]);
    }
  });

 return (
   <View style={styles.container} >

        <View style={styles.labs} >

          <TouchableOpacity>
              <Feather name='tv' size={35} color={'#F49006'} />
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={styles.labsText} >PRA VOCÊ</Text>
          </TouchableOpacity>
         
          <TouchableOpacity>
              <Feather name='bell' size={35} color={'#F49006'} />
          </TouchableOpacity>

        </View>

        <FlatList
          data={feedItems}
          renderItem={({item}) => <FeedView data={item} currentVisibleItem={showItem} />}
          onViewableItemsChanged={onViewRef.current}
          snapToAlignment='center'
          snapToInterval={810}
          scrollEventThrottle={200}
          decelerationRate={'fast'}
          viewabilityConfig={{
            waitForInteraction: false,
            viewAreaCoveragePercentThreshold: 100,
          }}
        />

    
   </View>
  );
}
