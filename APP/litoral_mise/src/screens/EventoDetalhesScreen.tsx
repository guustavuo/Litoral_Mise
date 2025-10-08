import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function EventoDetalhesScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { evento }: any = route.params;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#f9f9f9" }}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* IMAGEM DO EVENTO */}
      {evento.image && (
        <Image
          source={evento.image}
          style={{
            width: "100%",
            height: 240,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          resizeMode="cover"
        />
      )}

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0a3d62" }}>
          {evento.nome}
        </Text>

        <Text style={{ fontSize: 16, color: "#555", marginTop: 6 }}>
          {evento.horario}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#333",
            marginTop: 20,
            lineHeight: 22,
          }}
        >
          {evento.descricao}
        </Text>

        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#0a3d62",
            paddingVertical: 12,
            borderRadius: 30,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
