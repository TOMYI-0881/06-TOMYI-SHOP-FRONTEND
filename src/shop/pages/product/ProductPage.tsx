import { useStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";

export const ProductPage = () => {
  // const { hola, count, inc, incD } = useStore();
  const count = useStore((state) => state.count);
  const incD = useStore((state) => state.incD);
  return (
    <>
      <h1>contador {count}</h1>
      <Button onClick={() => useStore.getState().inc()}>+1</Button>
      <Button onClick={() => incD(5)}>-1</Button>
    </>
  );
};
