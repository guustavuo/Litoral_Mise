import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";
import { Ionicons } from "@expo/vector-icons";

// Import das mesmas imagens da HomeScreen
import showDeRockImg from "../assets/show_de_rock.jpg";
import feiraGastronomiaImg from "../assets/feira_de_gastronomia.jpg";
import mostraCinemaImg from "../assets/mostra_de_cinema.jpg";
import exposicaoArteImg from "../assets/exposicao_de_arte.jpg";
import festivalPraiaImg from "../assets/festival_na_praia.jpg";
import teatroInfantilImg from "../assets/teatro_infantil.jpg";

export default function CategoriasScreen() {
  const navigation = useNavigation();
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

  // Mesmo array de eventos da HomeScreen (com categoria para filtrar)
  const eventos = [
    {
      nome: "Show de Rock",
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
      nome: "Mostra de Cinema",
      horario: "Sexta, 19h",
      descricao: "Filmes independentes nacionais com exibições ao ar livre.",
      image: mostraCinemaImg,
      categoria: "Cinema",
    },
    {
      nome: "Exposição de Arte",
      horario: "Quinta, 10h às 18h",
      descricao: "Obras inspiradas nas paisagens e na cultura do litoral.",
      image: exposicaoArteImg,
      categoria: "Arte",
    },
    {
      nome: "Festival na Praia",
      horario: "Sábado e Domingo, 14h",
      descricao: "Música, gastronomia e esportes à beira-mar.",
      image: festivalPraiaImg,
      categoria: "Musical",
    },
    {
      nome: "Teatro Infantil",
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

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER (sem hambúrguer) */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={{ backgroundColor: "#E8E6E1" }}>
        <View style={{ padding: 24, alignItems: "center" }}>
          <Text style={{ fontSize: 26, fontWeight: "600", color: "#2F3E46", marginBottom: 20 }}>
            Eventos por categoria
          </Text>

          {/* BOTÕES DE CATEGORIAS */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 20 }}>
            {categorias.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setCategoriaSelecionada(cat)}
                style={{
                  backgroundColor: categoriaSelecionada === cat ? "#2F3E46" : "#fff",
                  borderRadius: 20,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  margin: 6,
                }}
              >
                <Text style={{ color: categoriaSelecionada === cat ? "#fff" : "#2F3E46", fontWeight: "600" }}>
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

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Litoral mise-en-scène. Todos os direitos reservados.</Text>
        </View>
      </ScrollView>

      {/* MENU INFERIOR FIXO */}
<View style={styles.bottomBar}>
  <TouchableOpacity
    style={styles.bottomBarButton}
    onPress={() => navigation.navigate("Home" as never)}
  >
    <Ionicons name="home-outline" size={22} style={styles.bottomBarIconInactive} />
    <Text style={styles.bottomBarText}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.bottomBarButton}
    onPress={() => navigation.navigate("Categorias" as never)}
  >
    <Ionicons name="grid-outline" size={22} style={styles.bottomBarIconInactive} />
    <Text style={styles.bottomBarText}>Categorias</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.bottomBarButton}
    onPress={() => navigation.navigate("Cadastro" as never)}
  >
    <Ionicons name="add-circle-outline" size={24} style={styles.bottomBarIconActive} />
    <Text style={styles.bottomBarText}>Cadastro</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}
