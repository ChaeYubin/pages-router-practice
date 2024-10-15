import { useRouter } from "next/router";

const Button = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return <button onClick={handleClick}>홈으로</button>;
};

export default Button;
