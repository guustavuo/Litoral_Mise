import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import styles from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function CadastroScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(width * 0.7));

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: width * 0.7,
        duration: 250,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 32, height: 32, marginRight: 8 }}
          />
          <Text style={styles.logo}>Litoral mise-en-scène</Text>
        </View>
        <TouchableOpacity
          onPress={toggleMenu}
          style={{ padding: 8, backgroundColor: "#c2edf3", borderRadius: 6 }}
        >
          <Text style={{ fontSize: 24, color: "#0a3d62" }}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cadastro de Evento</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome do evento"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Data"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Local"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            placeholderTextColor="#aaa"
            multiline
          />

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* MENU LATERAL */}
      {menuVisible && (
        <Pressable style={styles.overlay} onPress={toggleMenu}>
          <Animated.View
            style={[
              styles.sideMenuRight,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <View style={styles.menuHeader}>
              <Image
                source={require("../assets/logo.png")}
                style={{ width: 48, height: 48, marginBottom: 8 }}
              />
              <Text style={styles.menuAppTitle}>Litoral mise-en-scène</Text>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate("Home" as never);
              }}
            >
              <Text style={styles.menuIcon}>🏠</Text>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate("Categorias" as never);
              }}
            >
              <Text style={styles.menuIcon}>🎭</Text>
              <Text style={styles.menuText}>Categorias</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                toggleMenu();
                navigation.navigate("Cadastro" as never);
              }}
            >
              <Text style={styles.menuIcon}>📝</Text>
              <Text style={styles.menuText}>Cadastro</Text>
            </TouchableOpacity>
          </Animated.View>
        </Pressable>
      )}
    </View>
  );
}
