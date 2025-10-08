import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";

// Import das mesmas imagens da HomeScreen
import showDeRockImg from "../assets/show_de_rock.jpg";
import feiraGastronomiaImg from "../assets/feira_de_gastronomia.jpg";
import mostraCinemaImg from "../assets/mostra_de_cinema.jpg";
import exposicaoArteImg from "../assets/exposicao_de_arte.jpg";
import festivalPraiaImg from "../assets/festival_na_praia.jpg";
import teatroInfantilImg from "../assets/teatro_infantil.jpg";

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

  const eventos = [
    {
      nome: "Show de Rock            ",
      horario: "Sábado, 20h",
      descricao: "Uma noite inesquecível com as melhores bandas locais e muito som ao vivo!",
      image: showDeRockImg,
      categoria: "Musical",
    },
    {
      nome: "Feira de Gastronomia",
      horario: "Domingo, 12h",
      descricao: "Sabores regionais e pratos únicos da nossa região litorânea.",
      image: feiraGastronomiaImg,
      categoria: "Gastronomia",
    },
    {
      nome: "Mostra de Cinema      ",
      horario: "Sexta, 19h",
      descricao: "Filmes independentes nacionais com exibições ao ar livre.",
      image: mostraCinemaImg,
      categoria: "Cinema",
    },
    {
      nome: "Exposição de Arte       ",
      horario: "Quinta, 10h às 18h",
      descricao: "Obras inspiradas nas paisagens e na cultura do litoral.",
      image: exposicaoArteImg,
      categoria: "Arte",
    },
    {
      nome: "Festival na Praia           ",
      horario: "Sábado e Domingo, 14h",
      descricao: "Música, gastronomia e esportes à beira-mar.",
      image: festivalPraiaImg,
      categoria: "Musical",
    },
    {
      nome: "Teatro Infantil               ",
      horario: "Domingo, 16h",
      descricao: "Uma peça encantadora para toda a família.",
      image: teatroInfantilImg,
      categoria: "Teatro",
    },
  ];

  const eventosFiltrados =
    categoriaSelecionada === "Todos"
      ? eventos
      : eventos.filter((e) => e.categoria === categoriaSelecionada);

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
    <View style={{ flex: 1, backgroundColor: "#E8E6E1" }}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
        <TouchableOpacity onPress={openMenu} style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
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

          {/* EVENTOS COM IMAGENS */}
          {eventosFiltrados.map((evento, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.eventCard, { flexDirection: "row", alignItems: "center" }]}
              onPress={() => navigation.navigate("EventoDetalhes", { evento })}
            >
              <Image source={evento.image} style={styles.eventImage} />
              <View style={styles.eventTextContainer}>
                <Text style={styles.eventTitle}>{evento.nome}</Text>
                <Text style={styles.eventDate}>{evento.horario}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* FOOTER FIXO */}
      <View
        style={{
          backgroundColor: "#2F3E46",
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          © 2025 Litoral mise-en-scène. Todos os direitos reservados.
        </Text>
      </View>

      {/* MENU LATERAL DIREITO */}
      {menuVisible && (
        <View style={styles.overlay}>
          <Pressable style={{ flex: 1 }} onPress={closeMenu} />
          <Animated.View
            style={[styles.sideMenuRight, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuAppTitle}>🌊 Litoral mise-en-scène</Text>
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Home" as never);
              }}
            >
              <Text style={styles.menuText}>🏠 Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Categorias" as never);
              }}
            >
              <Text style={styles.menuText}>🎭 Categorias</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                closeMenu();
                navigation.navigate("Cadastro" as never);
              }}
            >
              <Text style={styles.menuText}>📝 Cadastro</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </View>
  );
}
