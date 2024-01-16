import { Tabs, Box, Text } from "@radix-ui/themes";

export default function TabsCont() {
  return (
    <Tabs.Root
      defaultValue="account"
      className="bg-slate-100 w-fit p-1 mb-4 rounded-lg font-semibold text-sm"
    >
      <Tabs.List className="rounded-md  ">
        <Tabs.Trigger value="account">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>
      {/**
      <Box px="4" pt="3" pb="2">
        <Tabs.Content value="account">
          <Text size="2">Make changes to your account.</Text>
        </Tabs.Content>

        <Tabs.Content value="analytics">
          <Text size="2">Access and update your documents.</Text>
        </Tabs.Content>

        <Tabs.Content value="reports">
          <Text size="2">Get up to date with the latest reports.</Text>
        </Tabs.Content>
        <Tabs.Content value="notifications">
          <Text size="2">Get up to date with the latest reports.</Text>
        </Tabs.Content>
      </Box>
       */}
    </Tabs.Root>
  );
}
