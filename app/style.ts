import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  // Botões da Home
  button: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  yellow: {
    backgroundColor: '#fcee21',
  },
  red: {
    backgroundColor: '#ed1c24',
  },
  blue: {
    backgroundColor: '#1b1464',
  },
  green: {
    backgroundColor: '#00a651',
  },
  // Cartões dos cursos
  card: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  selectedCard: {
    borderColor: '#00f',
    borderWidth: 2,
  },
  courseImage: {
    width: '100%',
    height: 150,
  },
  courseInfo: {
    padding: 10,
    backgroundColor: '#555',
  },
  courseTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDetails: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 4,
  },
  // Estilo da tela Conta
  accountButton: {
    width: '100%',
    backgroundColor: '#bcbcbc',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  accountButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 16,
    color: '#ed1c24',
    fontWeight: 'bold',
  },
  vagaCard: {
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vagaDestaque: {
    borderColor: '#00f',
    borderWidth: 2,
  },
  vagaCargo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  vagaEmpresa: {
    fontSize: 14,
    color: '#000',
    marginTop: 2,
  },
  vagaLocal: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
  },
  saibaMaisButton: {
    backgroundColor: '#1b1464',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  saibaMaisText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
