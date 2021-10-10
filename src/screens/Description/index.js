import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import icons from "../../utils/icons";

export function Description({ route, navigation }) {
  const [itemDescription, setIgtenDescription] = useState({});
  const [imgColor, setImgColor] = useState("#fff");

  useEffect(() => {
    const { item } = route.params;
    setIgtenDescription(item);
  }, []);
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.arrowLeft}
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: "#fffdfd",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.heart}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#e6ba40",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#dddcdc",
          width: "100%",
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#8b8080",
            width: "50%",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Image
            style={{
              padding: 50,
              tintColor: imgColor,
            }}
            source={icons.camera}
          />
        </View>
      </View>
      <View
        style={{
          margin: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 18 }}>{itemDescription.colection}</Text>
          <Text style={{ fontSize: 30 }}>{itemDescription.title}</Text>
        </View>
        <Text style={{ fontSize: 20, marginTop: 30 }}>
          R${itemDescription.price},00
        </Text>
      </View>

      <View
        style={{
          margin: 15,
        }}
      >
        <Text>Cor: exemplo</Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity onPress={() => setImgColor("#8f8e8e")}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 130,
                backgroundColor: "#8f8e8e",
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImgColor("#e900a3")}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 130,
                backgroundColor: "#bd178b",
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setImgColor("#79005a")}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 130,
                backgroundColor: "#79005a",
                marginRight: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={{
            width: "90%",
            backgroundColor: "#ebb400",
            padding: 20,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Compar Agora
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "90%",
            padding: 20,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#ebb400",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Adicionar ao Carrinho
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            Informações
          </Text>
          <Text>{itemDescription.info}</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}>
            Descrição
          </Text>
          <Text>{itemDescription.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 40,
  },
});
