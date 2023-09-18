import React, { useState, useEffect } from "react";
import { api } from "../network/api";
import "./PromotionApprove.css";

const PromotionApprove = () => {
  const [promotions, setPromotions] = useState([]);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await api("/api/v1/auth/promotionList", "GET");
        setPromotions(response.data);
      } catch (error) {
        console.error("API error:", error);
      }
    };
    fetchPromotions();
  }, []);

  const handleApprove = async (promotion) => {
    await api(`/promotion/${promotion.id}`, "POST");
    alert("승급이 승인되었습니다!");
    closeAndClearModal();
  };

  const handleReject = (promotion) => {
    // 승급 거절 로직을 구현하세요.
    closeAndClearModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndClearModal = () => {
    setIsModalOpen(false);
    setSelectedPromotion(null);
  };

  return (
    <div className="promotion-container">
      <h1>승급 승인 페이지</h1>
      <div className="box-container">
        {promotions.map((promotion) => (
          <div
            key={promotion.id}
            className="box"
            onClick={() => {
              setSelectedPromotion(promotion);
              openModal();
            }}
          >
            <p>{promotion.sellerName}</p>
          </div>
        ))}
      </div>
      {isModalOpen && selectedPromotion && (
        <div className="modal">
          <h2>{selectedPromotion.userId}</h2>
          <p>Seller Name: {selectedPromotion.sellerName}</p>
          <p>Seller Number: {selectedPromotion.sellerNumber}</p>
          <button onClick={() => handleApprove(selectedPromotion)}>
            승급 승인
          </button>
          <button onClick={() => handleReject(selectedPromotion)}>
            승급 거절
          </button>
        </div>
      )}
    </div>
  );
};

export default PromotionApprove;
