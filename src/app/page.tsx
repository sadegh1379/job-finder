import { Button, Flex } from '@radix-ui/themes';

export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <p className="text-red">Hello from Radix Themes :)</p>
      <Button>Let's go</Button>
    </Flex>
  );
}
