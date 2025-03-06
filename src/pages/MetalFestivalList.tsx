import { useQueryFestivals } from "../api/generated/apiComponents";
import { Card, Grid, LoadingOverlay, Text, Title, Alert } from "@mantine/core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { formatDateTime } from "./../utils/dateUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import useFestivalSearch from "../hooks/useFestivalSearch";

const MetalFestivalList = () => {
  const { data, isLoading, error } = useQueryFestivals({});
  const { filteredFestivals, setSearchTerm, searchTerm } =
    useFestivalSearch(data);

  if (isLoading) {
    return (
      <div role="status" aria-label="Loading festivals">
        <LoadingOverlay visible={true} />
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

  return (
    <div style={{ position: "relative", margin: 20 }}>
      <Title order={1} mb="md">
        Metal Festivals
      </Title>

      <SearchBar
        placeholder="Search festivals by name, city, country, or info..."
        onSearch={setSearchTerm}
        currentValue={searchTerm}
      />
      {filteredFestivals && (
        <Grid>
          {filteredFestivals.map((festival) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={festival.id}>
              <Card
                component={Link}
                to={`/festivals/${festival.id}`}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  textDecoration: "none",
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
