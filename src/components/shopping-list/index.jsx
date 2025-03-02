import React, { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import {
	ActionButton,
	Button,
	ButtonContainer,
	Input,
	InputContainer,
	InputGroup,
	List,
	ListItem,
	ShoppingListContainer,
	Title,
	QuantityInput,
	Select,
	ItemInfo,
	ItemName,
	ItemQuantity,
} from "./styles";

export function ShoppingList() {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [quantity, setQuantity] = useState("1");
	const [unit, setUnit] = useState("un");

	const addItem = (e) => {
		e.preventDefault();
		if (inputValue.trim() === "") return;

		const quantityNum = Number.parseFloat(quantity) || 1;

		setItems([
			...items,
			{
				id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
				name: inputValue,
				quantity: quantityNum,
				unit,
				purchased: false,
			},
		]);
		setInputValue("");
		setQuantity("1");
		setUnit("un");
	};

	const togglePurchased = (id) => {
		const newItems = items.map((item) =>
			item.id === id ? { ...item, purchased: !item.purchased } : item,
		);
		setItems(newItems);
	};

	const removeItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			addItem(e);
		}
	};

	const formatQuantity = (quantity, unit) => {
		return `${quantity} ${unit}`;
	};

	return (
		<ShoppingListContainer>
			<Title>Minha Lista</Title>
			<InputContainer>
				<InputGroup>
					<Input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={handleKeyPress}
						placeholder="Adicione um item"
					/>
					<QuantityInput
						type="number"
						min="0.1"
						step="0.1"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						placeholder="Qtd"
					/>
					<Select value={unit} onChange={(e) => setUnit(e.target.value)}>
						<option value="un">Un</option>
						<option value="kg">Kg</option>
					</Select>
				</InputGroup>
				<Button onClick={addItem}>Adicionar</Button>
			</InputContainer>
			<List>
				{items.map((item) => (
					<ListItem key={item.id} purchased={item.purchased}>
						<ItemInfo>
							<ItemName>{item.name}</ItemName>
							<ItemQuantity>
								{formatQuantity(item.quantity, item.unit)}
							</ItemQuantity>
						</ItemInfo>
						<ButtonContainer>
							<ActionButton onClick={() => togglePurchased(item.id)}>
								<FaCheck />
							</ActionButton>
							<ActionButton onClick={() => removeItem(item.id)} delete>
								<FaTrash />
							</ActionButton>
						</ButtonContainer>
					</ListItem>
				))}
			</List>
		</ShoppingListContainer>
	);
}

export default ShoppingList;
