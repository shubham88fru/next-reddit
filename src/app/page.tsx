import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Click Me!</Button>
      </form>
    </div>
  );
}
