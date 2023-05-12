const BASE_URL = "http://example.com/api";

export const getTransactions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postTransaction = async (transaction) => {
  try {
    const response = await fetch(`${BASE_URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
