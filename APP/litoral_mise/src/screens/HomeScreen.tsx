import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import styles from "../styles/homeStyles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>

        {/* Botão menu hamburguer */}
        <Pressable
          onPress={() => setMenuVisible(true)}
          style={{ padding: 8, backgroundColor: "#c2edf3", borderRadius: 6 }}
        >
          <Text style={{ fontSize: 24, color: "#0a3d62" }}>☰</Text>
        </Pressable>
      </View>

      {/* Conteúdo scrollável */}
      <ScrollView style={styles.container}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Descubra os Melhores Eventos da Cidade</Text>
          <Text style={styles.heroSubtitle}>
            Sua agenda cultural completa com shows, exposições, teatro, gastronomia e muito mais.
          </Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Explorar Eventos</Text>
          </TouchableOpacity>
        </View>

        {/* Próximos Eventos */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Eventos</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+ Adicionar Evento</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Show de Rock</Text>
            <Text style={styles.eventDate}>Sábado, 20h</Text>
          </View>

          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>Feira de Gastronomia</Text>
            <Text style={styles.eventDate}>Domingo, 12h</Text>
          </View>
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

      {/* Modal do menu */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        {/* Fundo escuro clica e fecha */}
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
          onPress={() => setMenuVisible(false)}
        >
          {/* Caixa do menu */}
          <View
            style={{
              backgroundColor: "#fff",
              width: 200,
              borderRadius: 10,
              paddingVertical: 10,
              marginTop: 100,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{ padding: 12 }}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Home" as never);
              }}
            >
              <Text>🏠 Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ padding: 12 }}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Categorias" as never);
              }}
            >
              <Text>🎭 Categorias</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ padding: 12 }}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate("Cadastro" as never);
              }}
            >
              <Text>📝 Cadastro</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
