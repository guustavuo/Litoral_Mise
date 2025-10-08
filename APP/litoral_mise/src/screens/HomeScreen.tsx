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
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(Dimensions.get("window").width))[0];

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

  // --- EVENTOS EXEMPLO ---
  const eventos = [
    {
      nome: "Show de Rock",
      horario: "Sábado, 20h",
      descricao:
        "Uma noite inesquecível com as melhores bandas locais e muito som ao vivo!",
      imageUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    },
    {
      nome: "Feira de Gastronomia",
      horario: "Domingo, 12h",
      descricao:
        "Sabores regionais, experiências culinárias e pratos únicos da nossa região litorânea.",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      nome: "Mostra de Cinema",
      horario: "Sexta, 19h",
      descricao:
        "Uma seleção de filmes independentes nacionais com exibições ao ar livre.",
      imageUrl: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
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

       {/* SEÇÃO DE EVENTOS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Eventos</Text>
          </View>

          {eventos.map((evento, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.eventCard, { padding: 0, overflow: "hidden" }]}
              onPress={() => navigation.navigate("EventoDetalhes", { evento })}
            >
              <Image
                source={{ uri: evento.imageUrl }}
                style={{
                  width: "100%",
                  height: 150,
                }}
                resizeMode="cover"
              />
              <View style={{ padding: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#2d3436",
                    marginBottom: 4,
                  }}
                >
                  {evento.nome}
                </Text>
                <Text style={{ fontSize: 14, color: "#636e72" }}>{evento.horario}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>


        {/* NEWSLETTER */}
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

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 Litoral mise-en-scène. Todos os direitos reservados.
          </Text>
        </View>
      </ScrollView>

      {/* MENU ANIMADO */}
      {menuVisible && (
        <Pressable style={styles.menuOverlay} onPress={closeMenu}>
          <Animated.View
            style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}
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
