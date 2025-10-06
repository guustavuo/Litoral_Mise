import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from "react-native";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logoImage} />
        <Text style={styles.logoText}>Litoral mise-en-scène</Text>
      </View>

      {/* Botão menu hamburguer */}
      <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
        <Text style={styles.menuIcon}>☰</Text>
      </TouchableOpacity>

      {/* Menu modal */}
      <Modal
        visible={menuVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.menuContainer}>
            {["Home", "Categorias", "Cadastro", "Login", "Usuários"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#dff6fa",
    paddingHorizontal: 16,
    paddingVertical: 20,
    height: 80,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a3d62",
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 26,
    color: "#0a3d62",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
    color: "#0a3d62",
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
});
