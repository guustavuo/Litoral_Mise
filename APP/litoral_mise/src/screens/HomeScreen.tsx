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
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";

// Import das imagens locais
import showDeRockImg from "../assets/show_de_rock.jpg";
import feiraGastronomiaImg from "../assets/feira_de_gastronomia.jpg";
import mostraCinemaImg from "../assets/mostra_de_cinema.jpg";
import exposicaoArteImg from "../assets/exposicao_de_arte.jpg";
import festivalPraiaImg from "../assets/festival_na_praia.jpg";
import teatroInfantilImg from "../assets/teatro_infantil.jpg";
import fundoImg from "../assets/fundo.jpg"; // 👈 nova imagem de fundo

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

  const eventos = [
    {
      nome: "Show de Rock",
      horario: "Sábado, 20h",
      descricao: "Uma noite inesquecível com as melhores bandas locais e muito som ao vivo!",
      image: showDeRockImg,
    },
    {
      nome: "Feira de Gastronomia",
      horario: "Domingo, 12h",
      descricao: "Sabores regionais e pratos únicos da nossa região litorânea.",
      image: feiraGastronomiaImg,
    },
    {
      nome: "Mostra de Cinema",
      horario: "Sexta, 19h",
      descricao: "Filmes independentes nacionais com exibições ao ar livre.",
      image: mostraCinemaImg,
    },
    {
      nome: "Exposição de Arte",
      horario: "Quinta, 10h às 18h",
      descricao: "Obras inspiradas nas paisagens e na cultura do litoral.",
      image: exposicaoArteImg,
    },
    {
      nome: "Festival na Praia",
      horario: "Sábado e Domingo, 14h",
      descricao: "Música, gastronomia e esportes à beira-mar.",
      image: festivalPraiaImg,
    },
    {
      nome: "Teatro Infantil",
      horario: "Domingo, 16h",
      descricao: "Uma peça encantadora para toda a família.",
      image: teatroInfantilImg,
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
        {/* HERO COM IMAGEM DE FUNDO */}
        <ImageBackground source={fundoImg} style={styles.hero} imageStyle={{ opacity: 0.5 }}>
          <Text style={styles.heroTitle}>Descubra os Melhores Eventos da Cidade</Text>
          <Text style={styles.heroSubtitle}>
            Sua agenda cultural completa com shows, exposições, teatro, gastronomia e muito mais.
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Explorar Eventos</Text>
          </TouchableOpacity>
        </ImageBackground>

        {/* SEÇÃO DE EVENTOS */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Eventos</Text>
          </View>

          {eventos.map((evento, index) => (
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

      {/* MENU LATERAL */}
      {menuVisible && (
        <View style={styles.overlay}>
          <Pressable style={{ flex: 1 }} onPress={closeMenu} />
          <Animated.View
            style={[
              styles.sideMenuRight,
              { transform: [{ translateX: slideAnim }] },
            ]}
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






