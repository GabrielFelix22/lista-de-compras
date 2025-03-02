import styled from "styled-components";

export const ShoppingListContainer = styled.div`
  max-width: 600px;
  width: 95%;
  margin: 0 auto;
  padding: 25px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 20px;
    border-radius: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 92%;
    padding: 15px;
    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  min-width: 250px;
  width: 100%;

  @media screen and (max-width: 768px) {
    min-width: 200px;
  }

  @media screen and (max-width: 480px) {
    min-width: 100%;
    gap: 6px;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #84fab0;
    box-shadow: 0 0 0 2px rgba(132, 250, 176, 0.2);
  }

  &::placeholder {
    color: #95a5a6;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
    font-size: 16px; /* Evita zoom no iPhone */
  }
`;

export const QuantityInput = styled(Input)`
  max-width: 100px;
  text-align: center;

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Select = styled.select`
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 80px;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  padding-right: 30px;

  &:focus {
    outline: none;
    border-color: #84fab0;
    box-shadow: 0 0 0 2px rgba(132, 250, 176, 0.2);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 16px;
    padding: 12px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(to right, #84fab0, #8fd3f4);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(to right, #74eaa0, #7fc3e4);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 14px 20px;
    font-size: 16px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 12px;
  background-color: ${(props) => (props.purchased ? "rgba(132, 250, 176, 0.2)" : "#fff")};
  border-radius: 12px;
  border: 1px solid ${(props) => (props.purchased ? "#84fab0" : "#e0e0e0")};
  text-decoration: ${(props) => (props.purchased ? "line-through" : "none")};
  color: ${(props) => (props.purchased ? "#7f8c8d" : "#2c3e50")};
  transition: all 0.3s ease;
  font-size: 1.1rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 768px) {
    padding: 12px;
    font-size: 1rem;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
    font-size: 0.9rem;
    margin-bottom: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    &:hover {
      transform: none;
    }
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    width: 100%;
    gap: 8px;
  }
`;

export const ItemName = styled.span`
  margin-right: 10px;
  word-break: break-word;

  @media screen and (max-width: 480px) {
    margin-right: 6px;
  }
`;

export const ItemQuantity = styled.span`
  font-size: 0.9rem;
  color: #666;
  background: rgba(132, 250, 176, 0.1);
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    padding: 3px 6px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    gap: 15px;
  }
`;

export const ActionButton = styled.button`
  background-color: transparent;
  color: #7f8c8d;
  padding: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${(props) => (props.delete ? "#e74c3c" : "#84fab0")};
    background-color: ${(props) => (props.delete ? "rgba(231, 76, 60, 0.1)" : "rgba(132, 250, 176, 0.1)")};
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    font-size: 1.2rem;

    &:active {
      background-color: ${(props) => (props.delete ? "rgba(231, 76, 60, 0.1)" : "rgba(132, 250, 176, 0.1)")};
    }

    &:hover {
      transform: none;
    }
  }
`;
