import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";

export default function CategoriasScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(Dimensions.get("window").width))[0];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const categorias = [
    "Todos",
    "Gastronomia",
    "Musical",
    "Concerto",
    "Literatura",
    "Teatro",
    "Cinema",
    "Religião",
  ];

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get("window").width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setMenuVisible(false));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
        </View>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView style={{ backgroundColor: "#E8E6E1" }}>
        <View style={{ padding: 24, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "600",
              color: "#2F3E46",
              marginBottom: 20,
            }}
          >
            Eventos por categoria
          </Text>

          {/* BOTÕES DE CATEGORIAS */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            {categorias.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setCategoriaSelecionada(cat)}
                style={{
                  backgroundColor:
                    categoriaSelecionada === cat ? "#2F3E46" : "#fff",
                  borderRadius: 20,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}
              >
                <Text
                  style={{
                    color:
                      categoriaSelecionada === cat ? "#fff" : "#2F3E46",
                    fontWeight: "600",
                  }}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* EVENTOS (simulação visual) */}
          <View
            style={{
              backgroundColor: "#3A3A3A",
              width: "85%",
              height: 120,
              borderRadius: 12,
              marginTop: 20,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#3A3A3A",
              width: "85%",
              height: 120,
              borderRadius: 12,
              marginTop: 20,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#3A3A3A",
              width: "85%",
              height: 120,
              borderRadius: 12,
              marginTop: 20,
              marginBottom: 40,
            }}
          ></View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Agenda Cultural. Todos os direitos reservados.
          </Text>
        </View>
      </ScrollView>

      {/* MENU LATERAL */}
      {menuVisible && (
        <Pressable style={styles.menuOverlay} onPress={closeMenu}>
          <Animated.View
            style={[
              styles.menuContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Home" as never);
              }}
            >
              <Text>🏠 Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Categorias" as never);
              }}
            >
              <Text>🎭 Categorias</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Cadastro" as never);
              }}
            >
              <Text>📝 Cadastro</Text>
            </TouchableOpacity>
          </Animated.View>
        </Pressable>
      )}
    </View>
  );
}
