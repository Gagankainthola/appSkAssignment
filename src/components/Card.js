// src/components/Card.jsx
export default function Card({ image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex-1 max-w-xs">
      <img src={image} alt="Card" className="w-full h-full  object-cover" />
    </div>
  );
}
