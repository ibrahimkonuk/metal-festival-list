import React from "react";
import { Stack, Text, Title, Button, Container, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "src/components/utils/LanguageSwitch";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container size="md" p="md">
      <LanguageSwitch />
      <Stack
        justify="center"
        align="center"
        gap="xl"
        style={{ minHeight: "100vh" }}
      >
        <Title order={1} mb="lg" ta="center">
          {t("HEADLINE")}
        </Title>

        <Text size="xl" ta="center" maw={rem(800)}>
          {t("GREETING")}
        </Text>

        <Button
          component={Link}
          to="/metalfestivallist"
          size="xl"
          radius="md"
          variant="filled"
          color="red.7"
          style={{
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          styles={{
            root: {
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
              },
            },
          }}
        >
          {t("BUTTON")}
        </Button>
      </Stack>
    </Container>
  );
};
