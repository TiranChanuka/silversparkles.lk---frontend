const CheckoutCard = ({ item }) => {
  return (
    <div className="flex justify-between items-center Outfit">
      <div className="flex items-center gap-[10px]">
        <div className="w-[70px] h-[90px]">
          <img
            src={item.productImg}
            alt="product"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-[600]">{item.productName}</span>
          <span className="font-[600]">({item.size}mm)</span>
        </div>
      </div>
      <div className="font-[600]">${item.price}</div>
    </div>
  );
};

export default CheckoutCard;
