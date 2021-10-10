import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { ButtonOption } from "../../components/ButtonOption";

import icons from "../../utils/icons";
import { data } from "../../utils/data";

export function Home({ navigation }) {
  function ItemBox({ item }) {
    return (
      <View style={styles.containerItem}>
        <View style={styles.itemBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Description", { item })}
          >
            <Image style={{ width: 40, height: 40 }} source={item.img} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: "absolute", top: 6, right: 6 }}>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={icons.heart}
            />
          </TouchableOpacity>
        </View>
        <Text>{item.title}</Text>
        <Text>R$ {item.price},00</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <TouchableOpacity>
          <Image
            source={icons.heart}
            resizeMode="contain"
            style={{ width: 40, height: 40, tintColor: "#e6ba40" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.navigation}>
        <ButtonOption name="Promoções" />
        <ButtonOption name="Mulher" />
        <ButtonOption name="Homem" />
        <ButtonOption name="Criança" />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 40,
            marginVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 40, height: 40, tintColor: "#000" }}
            source={icons.filter}
          />

          <Image
            style={{ width: 40, height: 40 }}
            source={icons.organization}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={ItemBox}
          contentContainerStyle={{ paddingBottom: 220 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 30,
  },

  logo: {
    fontSize: 30,
    color: "#e6ba40",
  },

  navigation: {
    flexDirection: "row",
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 30,
    borderBottomWidth: 0.5,
  },
  item: {
    paddingHorizontal: 7,
  },

  text: {
    fontSize: 20,
  },

  itemBox: {
    backgroundColor: "#c5c5c5",
    width: 140,
    height: 160,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 8,

    margin: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  imgProduct: {
    width: 80,
    height: 80,
  },
});
