import { useParams } from "react-router-dom";
import { useQueryFestivals } from "../api/generated/apiComponents";
import { Card, Grid, LoadingOverlay, Text, Title, Alert } from "@mantine/core";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDateTime } from "../utils/dateUtils";

const FestivalDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: festivals,
    isLoading,
    error,
  } = useQueryFestivals({
    queryParams: { id: id || "" },
  });

  if (isLoading) {
    return (
      <div role="status" aria-label="Loading festival details">
        <LoadingOverlay visible={true} />
        Loading festival details...
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

  const festival = festivals?.[0];

  if (!festival) {
    return (
      <Alert
        icon={<FontAwesomeIcon icon={faCircleExclamation} />}
        title="Festival Not Found"
        color="red"
      >
        The festival with the specified ID was not found.
      </Alert>
    );
  }

  return (
    <div style={{ position: "relative", margin: 20 }}>
      <Title order={1} mb="md">
        {festival.name || "Festival Name Not Available"}
      </Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text>
              <strong>Location:</strong>{" "}
              {festival.location?.city ? `${festival.location.city}, ` : ""}
              {festival.location?.country || "Location Not Available"}
            </Text>
            <Text>
              <strong>Date:</strong>{" "}
              {festival.start ? formatDateTime(festival.start) : "N/A"} -{" "}
              {festival.end ? formatDateTime(festival.end) : "N/A"}
            </Text>
            <Text>
              <strong>Info:</strong>{" "}
              {festival.info || "No additional information available."}
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default FestivalDetailPage;
