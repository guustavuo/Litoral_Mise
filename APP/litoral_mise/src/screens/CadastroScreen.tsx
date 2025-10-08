import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/homeStyles";
import { Ionicons } from "@expo/vector-icons";

export default function CadastroScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(Dimensions.get("window").width))[0];

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

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
        <Text style={styles.logo}>🌊 Litoral mise-en-scène</Text>
        
      </View>

      {/* CONTEÚDO */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
          }}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              width: "85%",
              borderRadius: 20,
              padding: 24,
              marginVertical: 40,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                color: "#2F3E46",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Crie sua conta
            </Text>

            {/* CAMPOS */}
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={form.nome}
              onChangeText={(v) => setForm({ ...form, nome: v })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(v) => setForm({ ...form, email: v })}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={form.senha}
              onChangeText={(v) => setForm({ ...form, senha: v })}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="phone-pad"
              value={form.telefone}
              onChangeText={(v) => setForm({ ...form, telefone: v })}
            />

            {/* BOTÃO */}
            <TouchableOpacity
              style={{
                backgroundColor: "#0a3d62",
                paddingVertical: 12,
                borderRadius: 30,
                marginTop: 20,
              }}
              onPress={() => alert("Cadastro realizado!")}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Cadastrar
              </Text>
            </TouchableOpacity>

            {/* LINK LOGIN */}
            <TouchableOpacity
              style={{ marginTop: 16 }}
              onPress={() => navigation.navigate("Home" as never)}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#2F3E46",
                  textDecorationLine: "underline",
                }}
              >
                Já tem conta? Entrar
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2023 Agenda Cultural. Todos os direitos reservados.
          </Text>
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
