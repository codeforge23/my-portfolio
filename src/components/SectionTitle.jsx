export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
