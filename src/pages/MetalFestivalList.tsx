import { useState } from "react";
import { useQueryFestivals } from "../api/generated/apiComponents";
import { Card, Grid, LoadingOverlay, Text, Title, Alert } from "@mantine/core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { formatDateTime } from "./../utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterFestivals } from "../utils/searchUtils";
import SearchBar from "../components/SearchBar";

const MetalFestivalList = () => {
  const { data, isLoading, error } = useQueryFestivals({});
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div role="status" aria-label="Loading festivals">
        <LoadingOverlay visible={true} />
        Loading festivals...
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        icon={<FontAwesomeIcon icon={faCircleExclamation} />}
        title="Error"
        color="red"
      >
        {error instanceof Error ? error.message : "An unknown error occurred"}
      </Alert>
    );
  }

  const filteredFestivals = filterFestivals(data || [], searchTerm);

  return (
    <div style={{ position: "relative", margin: 20 }}>
      <Title order={1} mb="md">
        Metal Festivals
      </Title>

      <SearchBar
        placeholder="Search festivals by name, city, country, or info..."
        onSearch={setSearchTerm}
      />
      {filteredFestivals && (
        <Grid>
          {filteredFestivals.map((festival) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={festival.id}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Title order={3}>
                  {festival.name || "Festival Name Not Available"}
                </Title>
                <Text mt="sm">
                  {festival.location?.city ? `${festival.location.city}/` : ""}
                  {festival.location?.country || "Location Not Available"}
                </Text>
                <Text>
                  Date:{" "}
                  {festival.start ? formatDateTime(festival.start) : "N/A"} -{" "}
                  {festival.end ? formatDateTime(festival.end) : "N/A"}
                </Text>
                <Text lineClamp={3} mt="sm">
                  {festival.info}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MetalFestivalList;
