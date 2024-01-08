const ImgCard = ({ imgURL, changeBigImage, bigImage }) => {
  const handleClick = () => {
    if (bigImage !== imgURL.big) {
      changeBigImage(imgURL.big);
    }
  };

  return (
    <div
      className={`border-2 rounded-full ${
        bigImage === imgURL.big ? "border-coral-green" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-full max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="img collection"
          width={127}
          height={103}
          className="object-contain transition"
        />
      </div>
    </div>
  );
};

export default ImgCard;
