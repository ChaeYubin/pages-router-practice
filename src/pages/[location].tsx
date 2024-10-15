import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.location}의 3일 예보</h1>
      <Button />
    </>
  );
}
