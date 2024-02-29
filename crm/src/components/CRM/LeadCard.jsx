import { alpha, Avatar, Box, Card, Stack, useTheme } from "@mui/material";
import FlexBox from "../flexbox/FlexBox";
import FlexRowAlign from "../flexbox/FlexRowAlign";
import { H2, H6, Tiny } from "../Typography";
import ChartPieIcon from "../../assets/icons/ChartPieIcon";
import crmLead from "../../assets/crm-lead.png"

const LeadCard = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        padding: 3,
        height: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <H6>Leads Converted</H6>
          <H2 color="primary.main">80%</H2>

          <FlexBox alignItems="center" mt={1}>
            <FlexRowAlign
              gap={1}
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: alpha(theme.palette.text.disabled, 0.2),
              }}
            >
              <ChartPieIcon
                sx={{
                  fontSize: 17,
                  color: "text.disabled",
                }}
              />
            </FlexRowAlign>
            <Tiny fontWeight={600}>56 out of 70</Tiny>
          </FlexBox>
        </Box>

        <Avatar
          src={crmLead}
          alt="Lead Converted"
          sx={{
            width: "auto",
            height: "auto",
            borderRadius: "0%",
          }}
        />
      </Stack>
    </Card>
  );
};

export default LeadCard;
