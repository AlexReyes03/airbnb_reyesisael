import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../../../kernel/components/Loading";
import { db } from "../../../config/utils/firebaseConnection";
import ListHouses from "../../../kernel/components/ListHouses";

export default function Home(props) {
  const { navigation } = props;
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "place"));
        const hauseArray = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log("data", doc.data.description);
          hauseArray.push(doc.data());
        });
        setHouses(hauseArray);
      } catch (error) {
        console.error("Error getting documents: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

    return loading ? (
      <Loading
        isVisible={loading}
        title="Cargando los inmuebles"
        color="#4abfa4"
        size="large"
      />
    ) : (
      <View style={styles.container}>
        <FlatList
          data={houses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ListHouses 
              image={item.images[index]}
              imageList={item.images}
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating || 0}
              count={item.count || 1}
              direction={item.direction}
              navigation = { navigation }
            />
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
