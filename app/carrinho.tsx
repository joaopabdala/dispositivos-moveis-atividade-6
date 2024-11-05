import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Carrinho(3)" />

      <Card title="Adaptador Sata">
      <View>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Ionicons name="checkbox" size={20} color="orange" />
          <Text style={styles.indicatedText}>Indicado</Text>
          <Text style={styles.arrowText}>></Text>
        </View>
        <View>
          <Text style={styles.editText}>Editar</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <MaterialCommunityIcons name="checkbox-blank-outline" size={20} color="orange" />
          <Image source={require("../assets/images/adaptador_sata.jpg")} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.description}>
              O Cabo USB Adaptador SATA é um dispositivo versátil que permite a conexão de unidades de armazenamento SATA, como discos rígidos e SSDs (Solid State Drives), a um computador ou dispositivo que tenha portas USB disponíveis.
            </Text>
            <View style={styles.tagBackground}>
              <Text numberOfLines={1}>Sata para USB3.0</Text>
            </View>
            <Image source={require("../assets/images/frete-gratis.png")} style={styles.freteGratis} />
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
              <PriceTag price={50} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.couponContainer}>
        <View style={styles.couponRow}>
          <MaterialIcons name="discount" size={24} color="green" />
          <Text>Ver todos os cupons da loja </Text>
        </View>
        <View style={styles.couponRow}>
          <AntDesign name="car" size={24} color="orange" />
          <Text numberOfLines={2}>Frete grátis em fretes até R$20,00 para pedidos acima de R$19,90</Text>
        </View>
      </View>
    </View>
      </Card>

      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card>

      <Card title="Mouse sem fio 2.4Ghz">
        <Text>
          O mouse TGT Vector E1 é o equip perfeito para você que está iniciando
          sua jornada gamer e deseja aumentar a precisão de seu setup!
          Desenvolvido para ter o ótimo desempenho em todos os tipos de jogos,
          este mouse é sua nova arma de combate!
        </Text>

        <PriceTag price={119} />
      </Card>

      <Card title="Teclado Mancer Shade">
        <Text>
          O teclado Mancer Shade MK2 é o item indispensável para sua próxima
          batalha! Ele possui formato TKL em padrão ABNT2 (padrão brasileiro).
          Foi desenvolvido com tudo que um gamer precisa, ele te levará para o
          próximo nível!
        </Text>

        <PriceTag price={119} />
      </Card>

      <CheckoutButton onPress={handleCheckout} />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatedText: {
    borderRadius: 5,
    padding: 4,
    borderWidth: 2,
    borderColor: 'orange',
  },
  arrowText: {
    marginLeft: 5,
  },
  editText: {
    color: 'grey',
  },
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    flexDirection: 'row',
    width: 100,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 40,
  },
  textContainer: {
    gap: 5,
  },
  description: {
    flexWrap: 'wrap',
  },
  tagBackground: {
    backgroundColor: 'lightgrey',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4
  },
  freteGratis: {
    width: 200,
    height: 20,
  },
  priceContainer: {
    marginTop: 20,
  },
  priceRow: {
    flexDirection: 'row',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  divider: {
    height: 2,
    backgroundColor: 'grey',
    marginBottom: 10,
  },
  couponContainer: {
    paddingVertical: 10,
    justifyContent: 'center'
  },
  couponRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
