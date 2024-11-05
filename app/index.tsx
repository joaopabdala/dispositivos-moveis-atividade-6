import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

/**
 * index: carrinho produtos
 * checkout: total, meio de pagamento
 * compra concluída
 */

export default function index() {
  const handleCarrinho = () => {
    router.push("/carrinho");
  };

  return (
    <Scrollable>
      <HeaderWithTitle title="Loja" />
      <Button onPress={handleCarrinho} title="Prosseguir para o carrinho">
      </Button>
    </Scrollable>
  );
}
