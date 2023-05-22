function SectionTag({ tagData }) {
  const arr = tagData.map((item, index) => {
    return (
      <div key={index} className="container-tag">
        <div className="tag">{item}</div>
      </div>
    );
  });

  return arr;
}

export default SectionTag;
