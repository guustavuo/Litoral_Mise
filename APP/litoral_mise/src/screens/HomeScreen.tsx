import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";
import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";


// Import das imagens locais
import showDeRockImg from "../assets/show_de_rock.jpg";
import feiraGastronomiaImg from "../assets/feira_de_gastronomia.jpg";
import mostraCinemaImg from "../assets/mostra_de_cinema.jpg";
import exposicaoArteImg from "../assets/exposicao_de_arte.jpg";
import festivalPraiaImg from "../assets/festival_na_praia.jpg";
import teatroInfantilImg from "../assets/teatro_infantil.jpg";
import fundoImg from "../assets/fundo.jpg"; // imagem de fundo (já estava no seu projeto)

export default function HomeScreen() {
  const navigation = useNavigation();

  const eventos = [
    {
      nome: "Show de Rock",
      horario: "Sábado, 20h",
      descricao:
        "Uma noite inesquecível com as melhores bandas locais e muito som ao vivo!",
      image: showDeRockImg,
    },
    {
      nome: "Feira de Gastronomia",
      horario: "Domingo, 12h",
      descricao:
        "Sabores regionais e pratos únicos da nossa região litorânea.",
      image: feiraGastronomiaImg,
    },
    {
      nome: "Mostra de Cinema",
      horario: "Sexta, 19h",
      descricao:
        "Filmes independentes nacionais com exibições ao ar livre.",
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
       {/* HEADER (centralizado e estilizado) */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
      </View>

      {/* CONTEÚDO */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={{
            paddingBottom: 40, // menor espaçamento
            flexGrow: 1, // garante que o conteúdo ocupe toda a tela
          }}
        >

        {/* HERO COM IMAGEM DE FUNDO */}
        <ImageBackground
          source={fundoImg}
          style={styles.hero}
          imageStyle={{ opacity: 0.5 }}
        >
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
              onPress={() => navigation.navigate("EventoDetalhes" as never, { evento } as never)}
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
            <TextInput style={styles.input} placeholder="Seu e-mail" placeholderTextColor="#aaa" />
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Inscrever</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      </ScrollView>

            {/* MENU INFERIOR FIXO COM ANIMAÇÃO */}
        <View style={styles.bottomBar}>
          {[
            { name: "Home", icon: "home-outline", route: "Home" },
            { name: "Categorias", icon: "grid-outline", route: "Categorias" },
            { name: "Perfil", icon: "person-circle-outline", route: "Cadastro" },
          ].map((item, index) => {
            const [scale] = React.useState(new Animated.Value(1));

            const handlePressIn = () => {
              Animated.spring(scale, {
                toValue: 0.9,
                useNativeDriver: true,
              }).start();
            };

            const handlePressOut = () => {
              Animated.spring(scale, {
                toValue: 1,
                friction: 3,
                useNativeDriver: true,
              }).start(() => navigation.navigate(item.route as never));
            };

            return (
              <Animated.View key={index} style={{ transform: [{ scale }] }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.bottomBarButton}
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                >
                  <Ionicons
                    name={item.icon as any}
                    size={item.name === "Perfil" ? 24 : 22}
                    style={
                      item.name === "Perfil"
                        ? styles.bottomBarIconActive
                        : styles.bottomBarIconInactive
                    }
                  />
                  <Text style={styles.bottomBarText}>{item.name}</Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>


      </View>
  );
}
