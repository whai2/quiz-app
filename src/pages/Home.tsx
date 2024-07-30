import { useNavigate } from "react-router-dom";

import Button from "@/components/Button";

import routes from "@/constants/routes";

function Home() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(routes.quiz)}>퀴즈 시작하기</Button>;
}

export default Home;
