import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const AppTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 2.8rem;
  color: #2c3e50;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  color: #34495e;
  font-weight: 500;
  max-width: 600px;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.7);
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 20px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 15px;
    margin-top: 15px;
  }
`;
