import React from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/homeStyles";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Home</Text>
          <Text style={styles.navItem}>Categorias</Text>
          <Text style={styles.navItem}>Cadastro</Text>
          <Text style={styles.navItem}>Login</Text>
          <Text style={styles.navItem}>Usuários</Text>
        </View>
      </View>

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
          <TextInput style={styles.input} placeholder="Seu e-mail" placeholderTextColor="#aaa" />
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeButtonText}>Inscrever</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Agenda Cultural. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}
