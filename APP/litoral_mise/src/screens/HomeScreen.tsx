import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import styles from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(width * 0.7)); // começa fora da tela à direita

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
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Descubra os Melhores Eventos da Cidade</Text>
          <Text style={styles.heroSubtitle}>
            Sua agenda cultural completa com shows, exposições, teatro, gastronomia e muito mais.
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Explorar Eventos</Text>
          </TouchableOpacity>
        </View>

        {/* Eventos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Eventos</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Adicionar Evento</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.eventCard}>
            <Text style={styles.eventTitle}>Show de Rock</Text>
            <Text style={styles.eventDate}>Sábado, 20h</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.eventCard}>
            <Text style={styles.eventTitle}>Feira de Gastronomia</Text>
            <Text style={styles.eventDate}>Domingo, 12h</Text>
          </TouchableOpacity>
        </View>

        {/* Newsletter */}
        <View style={styles.newsletter}>
          <Text style={styles.newsletterTitle}>Receba as Novidades</Text>
          <Text style={styles.newsletterSubtitle}>
            Inscreva-se para receber informações sobre os próximos eventos.
          </Text>

          <View style={styles.newsletterForm}>
            <TextInput
              style={styles.input}
              placeholder="Seu e-mail"
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Inscrever</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Agenda Cultural. Todos os direitos reservados.
          </Text>
        </View>
      </ScrollView>

      {/* MENU LATERAL (DIREITA) */}
      {menuVisible && (
        <Pressable style={styles.overlay} onPress={toggleMenu}>
          <Animated.View
            style={[
              styles.sideMenuRight,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            {/* Logo e título dentro do menu */}
            <View style={styles.menuHeader}>
              <Image
                source={require("../assets/logo.png")}
                style={{ width: 48, height: 48, marginBottom: 8 }}
              />
              <Text style={styles.menuAppTitle}>Litoral mise-en-scène</Text>
            </View>

            {/* Opções */}
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
