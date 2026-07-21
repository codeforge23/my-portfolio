export default function StarRating({ rating }) {
  return (
    <div className="skill-ratting">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={i < rating ? 'fa fa-star' : 'fa fa-star-o'} />
      ))}
    </div>
  )
}
