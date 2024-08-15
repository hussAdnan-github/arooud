export default function TitleHeadRegiste({ title, description }) {
  return (
    <div className="text_ligin text-end    mb-4">
      <h1 className="mb-4 text-4xl font-bold text-black dark:text-white">{title}</h1>
      <p className="text-xl font-normal text-black	dark:text-white">{description}</p>
    </div>
  );
}
