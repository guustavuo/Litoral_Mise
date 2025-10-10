import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },

    // HEADER
  header: {
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
    backgroundColor: "#0a3d62", // mesma cor do menu inferior
    paddingVertical: 24,
    height: 90,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8, // sombra no Android
  },
  logo: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "700",
    letterSpacing: 1.2,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", // estilo artístico padrão (pode trocar abaixo)
  },

  // HERO
  hero: {
    backgroundColor: "#1C1C1C",
  padding: 32,
  alignItems: "center",
  justifyContent: "center",
  height: 250, // ou ajuste conforme o tamanho da sua imagem
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#dcdcdc",
    textAlign: "center",
    marginBottom: 20,
  },
  heroButton: {
    backgroundColor: "#0a3d62",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  heroButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // SECTION
  section: {
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
  },
  addButton: {
    backgroundColor: "#0a3d62",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  eventCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2d3436",
  },
  eventDate: {
    fontSize: 14,
    color: "#636e72",
  },

  // NEWSLETTER
  newsletter: {
    backgroundColor: "#1b3a57",
    padding: 20,
    alignItems: "center",
  },
  newsletterTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  newsletterSubtitle: {
    fontSize: 14,
    color: "#dcdcdc",
    marginBottom: 12,
    textAlign: "center",
  },
  newsletterForm: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    width: "100%",
    maxWidth: 400,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "#333",
  },
  subscribeButton: {
    backgroundColor: "#0a3d62",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // FOOTER
  footer: {
    backgroundColor: "#2f2f2f",
    padding: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#dcdcdc",
  },

      // MENU LATERAL (direita)
  menuButton: {
    backgroundColor: "#c2edf3",
    padding: 8,
    borderRadius: 6,
  },
  menuIcon: {
    fontSize: 24,
    color: "#0a3d62",
  },
  menuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  menuContainer: {
    width: 200,
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 20,
    marginTop: 80,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sideMenuRight: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#004d73",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  menuHeader: {
    alignItems: "center",
    marginBottom: 40,
  },
  menuAppTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,
  },

  // ESTILOS ADICIONAIS PARA A LISTA DE EVENTOS
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
  },
  eventTextContainer: {
    flex: 1,
  },

  // abaixo de tudo (antes do export default styles;)
  // MENU INFERIOR FIXO (visual vibrante e moderno)
  bottomBar: {
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a3d62", // azul-escuro principal
    borderRadius: 30,
    paddingVertical: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },
  bottomBarButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBarText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff", // texto branco para contraste
    marginTop: 4,
  },
  bottomBarIconActive: {
    //color: "#6FE7DD", // azul piscina vibrante (ícone ativo)
    color: "#dcdcdc",
  },
  bottomBarIconInactive: {
    color: "#dcdcdc", // ícones neutros
  },

  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
  },


});

export default styles;
